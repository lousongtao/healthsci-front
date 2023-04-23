import {
  Button, Card,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Modal, notification, Popconfirm,
  Select
} from "antd";
import {getTjdwAccount, returnWorks} from "@/services/ant-design-pro/api";
import React, {useEffect} from "react";
import PrizeTable from "@/pages/component/PrizeTable";
import SubsidizeTable from "@/pages/component/SubsidizeTable";

/**
 * 查看作品界面
 *
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
const ViewModal = (props) => {

  const [form] = Form.useForm();

  const [editObj, setEditObj] = React.useState({});
  const buildForm = () => {
    return (
      <Form
        style={{margin: 7}}
        labelCol={{span: 6}}
        wrapperCol={{span: 14}}
        form={form}
        scrollToFirstError>
        <Form.Item
          name="title"
          label="标题"
          rules={[{required: true,message: '请输入标题',whitespace: true}]}>
          <Input style={{width:400}} disabled/>
        </Form.Item>
        <Form.Item
          name="poster"
          label="作者"
          rules={[{required: true,message: '请输入作者',whitespace: true}]}>
          <Input style={{width:200}} disabled/>
        </Form.Item>
        <Form.Item
          name="vendor"
          label="制作单位"
          rules={[{required: true,message: '请输入制作单位',whitespace: true}]}>
          <Input style={{width:200}} disabled/>
        </Form.Item>
        <Form.Item name="type" label="类别" rules={[{required: true,message: '请选择类别'}]} >
          <Select style={{width:400}} disabled>
            <Select.OptGroup label="图文类" key={1}>
              <Select.Option value={11} key={11}>科普文章</Select.Option>
              <Select.Option value={12} key={12}>漫画</Select.Option>
              <Select.Option value={13} key={13}>海报折页</Select.Option>
              <Select.Option value={14} key={14}>其它</Select.Option>
            </Select.OptGroup>
            <Select.OptGroup label="图书类" key={1}>
              <Select.Option value={41} key={41}>图书类</Select.Option>
            </Select.OptGroup>
            <Select.OptGroup label="音频类" key={2}>
              <Select.Option value={21} key={21}>专题音频</Select.Option>
              <Select.Option value={22} key={22}>广播剧</Select.Option>
              <Select.Option value={23} key={23}>有声书</Select.Option>
              <Select.Option value={24} key={24}>其他</Select.Option>
            </Select.OptGroup>
            <Select.OptGroup label="视频类" key={3}>
              <Select.Option value={31} key={31}>单集作品 - 短视频(小于10分钟)</Select.Option>
              <Select.Option value={32} key={32}>单集作品 - 长视频(大于10分钟)</Select.Option>
              <Select.Option value={33} key={33}>系列作品 - 短视频(小于10分钟)</Select.Option>
              <Select.Option value={34} key={34}>系列作品 - 长视频(大于10分钟)</Select.Option>
            </Select.OptGroup>
          </Select>
        </Form.Item>
        <Form.Item
          name="tjdwTag"
          label="机构类型">
          <Input style={{width:400}} disabled/>
        </Form.Item>
        <Form.Item
          name="tjdw"
          label="推荐单位">
          <Input style={{width:400}} disabled/>
        </Form.Item>

        <Form.Item
          name="mediaName"
          label="刊播媒体/出版社">
          <Input style={{width:400}} disabled/>
        </Form.Item>
        <Form.Item
          name="subMediaName"
          label="版面/栏目/ISBN编号">
          <Input style={{width:400}} disabled/>
        </Form.Item>
        <Form.Item
          name="mediaPlayDate"
          label="首次刊播/刊登/出版时间">
          <DatePicker placeholder="刊播日期" disabled />
        </Form.Item>
        <Form.Item
          name="mediaPlayTimes"
          label="最高阅读/播放量/发行量(万)">
          <InputNumber placeholder="播放量" disabled />
        </Form.Item>
        <Form.Item
          name="mediaLink"
          label="作品链接">
          {getWorksLink()}
        </Form.Item>
        <Form.Item
          name="worksLink"
          label="相关佐证材料">
          {getFileUrlLink()}
        </Form.Item>
        <Form.Item
          name="worksLink"
          label="推荐表">
          {getReccFormUrlLink()}
        </Form.Item>
        <PrizeTable
          prizeList={editObj.prizeList ? editObj.prizeList : []}
          onChangePrize={(prizeList) => editObj.prizeList = prizeList}
          onDeletePrize={(prizeList) => editObj.prizeList = prizeList}
          disabled />
        <SubsidizeTable
          subsidizeList={editObj.subsidizeList ? editObj.subsidizeList : []}
          onChangeSubsidize={(subsidizeList) => editObj.subsidizeList = subsidizeList}
          onDeleteSubsidize={(subsidizeList) => editObj.subsidizeList = subsidizeList}
          disabled />
        <Card title="申报项目情况" bordered={false} style={{ width: '100%' }}>
          <Form.Item name="projectBrief" label="项目综述" labelCol={4} wrapperCol={20}>
            <Input.TextArea
              showCount
              rows={6}
              maxLength={500}
              placeholder="请高度概括申报项目品牌的内容、亮点特色及社会影响等"
              disabled/>
          </Form.Item>
          <Form.Item name="projectDesc" label="项目介绍" labelCol={4} wrapperCol={20}>
            <Input.TextArea
              showCount
              rows={14}
              maxLength={2000}
              placeholder="请详细说明科普品牌的背景、内容、成果实施、应用和普及情况，产生的社会效益及贡献等"
              disabled />
          </Form.Item>
        </Card>
      </Form>
    )
  }

  /**
   * effect不能用props.editObj做检查判断, 如果连续编辑同一条记录导致对象无变化的话, effect就不会重复执行.
   * effect不能只执行一次, 第一次执行是在父类初始化的时候. 要求每次改变props值都要执行一次
   */
  useEffect(() => {
    if (props.editObj !== editObj){
      //要先把form清空, 再重新设置新的值, 否则当add的时候, 传入空对象, 无法覆盖之前的显示
      form.resetFields();
      form.setFieldsValue(props.editObj);
      setEditObj(props.editObj);
    }
  } );

  //java 保存的路径中, 有时候正斜线, 有时候反斜线
  const getFileUrlLink = () => {
    if (editObj?.fileUrl){
      const segs = editObj.fileUrl.replace(/\\/g, '/').split('/WorksFiles/');
      return <a href={'http://workscollect.shbxjk.cn/WorksFiles/' + segs[1]} target='_blank'>点击查看</a>
    }
    return <></>
  }

  const getWorksLink = () => {
    if (editObj?.mediaLink){
      return <a href={editObj?.mediaLink} target='_blank'>{editObj?.mediaLink}</a>
    }
    return <></>
  }

  //java 保存的路径中, 有时候正斜线, 有时候反斜线
  const getReccFormUrlLink = () => {
    if (editObj?.reccFormFileUrl){
      const segs = editObj.reccFormFileUrl.replace(/\\/g, '/').split('/WorksReccForm/');
      return <a href={'http://workscollect.shbxjk.cn/WorksReccForm/' + segs[1]} target='_blank'>点击查看</a>
    }
    return <h4 style={{color: 'red'}}>申报单位未提交推荐表</h4>
  }

  const handleReturn = async () => {
    try{
      let works = await returnWorks(editObj.id);

      if (works){
        if (status == 0){
          notification['success']({
            message: '记录回退成功 - ' + editObj.title,
            duration: 0
          });
        } else notification['error']({message: '提交失败. 状态'+ status });
        form.resetFields();
        props.onReturn();
      } else {
        notification['error']({message: '提交失败.' });
      }
    } catch (error) {
      notification['error']({
        message: '提交失败. 错误: ' + error?.info?.message
      })
    }
  }

  /**
   * effect不能用props.editObj做检查判断, 如果连续编辑同一条记录导致对象无变化的话, effect就不会重复执行.
   * effect不能只执行一次, 第一次执行是在父类初始化的时候. 要求每次改变props值都要执行一次
   */
  useEffect(async () => {
    if (props.editObj !== editObj){
      //要先把form清空, 再重新设置新的值, 否则当add的时候, 传入空对象, 无法覆盖之前的显示
      form.resetFields();
      form.setFieldsValue(props.editObj);

      // 载入推荐用户信息
      if (props.editObj?.id){
        const tjdwacc = await getTjdwAccount(props.editObj.id);
        form.setFieldsValue({
          tjdwTag: tjdwacc.orgTypeName,
          tjdw: tjdwacc.name
        })
      }
      setEditObj(props.editObj);
    }
  } );

  const handleCancel = () => {
    setEditObj({});
    props.onCancel();
  }

  return (
    <Modal
      title={props.modalTitle}
      getContainer={false}
      centered
      destroyOnClose
      maskClosable={false}
      visible={props.visible}
      closable={false}
      footer={[
        <Button key="cancel" onClick={handleCancel}>
          关闭
        </Button>,
        <Popconfirm
          key="return"
          onConfirm={() => handleReturn()}
          title='确认退回该记录给原有申报帐户么？'>
          <Button key="cancel">
            退回
          </Button>
        </Popconfirm>
      ]}
      width={1000}>
      {buildForm()}
    </Modal>
  )

}

export default ViewModal;
