import React, {useEffect, useState} from "react";
import {getDict, saveDict} from "@/services/ant-design-pro/api";
import './index.less';
import {Button, Empty, Form, InputNumber, message, Spin} from "antd";
import {useModel} from "umi";

const DictMgmt = () => {
  const [form] = Form.useForm();
  const { initialState, setInitialState } = useModel('@@initialState');
  const [accountQuantity, setAccountQuantity] = useState();
  const onFinish = async (values) => {
    setLoadData(true);
    const payload = {
      type: 'account_quantity',
      value: values.account_quantity
    }
    try{
      await saveDict(payload);
      message.success("数据保存成功");
    } catch (error) {
      message.error("数据保存失败, "+ error.message);
    }
    setLoadData(false);
  };

  const [loadData, setLoadData] = React.useState(false);//页面加载时启动等待框, 加载数据

  useEffect(async() => {
    const dicts = await getDict();
    for (let i = 0; i < dicts.length; i++) {
      if (dicts[i].type === 'account_quantity')
        // setAccountQuantity(dicts[i].value);
        form.setFieldsValue({account_quantity: dicts[i].value})
    }
  }, []);

  const page = () => {
    if (initialState.currentUser?.type !== 1){
      return <Empty description='当前帐户无操作权限'/>;
    }
    return (
      <Spin spinning={loadData}>
        <Form
          style={{margin: 7}}
          labelCol={{span: 6}}
          wrapperCol={{span: 14}}
          form={form}
          onFinish={onFinish}
          scrollToFirstError>
          <Form.Item
            name="account_quantity"
            label="申报单位数量"
            rules={[{required: true,message: '请输入申报单位数量'}]}>
            <InputNumber style={{width:400}} />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit" >
              保存
            </Button>
          </Form.Item>
        </Form>
      </Spin>
    )
  }

  return page();
}

export default DictMgmt;
