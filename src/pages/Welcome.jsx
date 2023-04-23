import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Card, Alert } from 'antd';

const Welcome = () => {
  return (
    <PageContainer>
      <Card>
        <Alert
          message='欢迎参与健康科普推优选树活动'
          type="success"
          showIcon
          banner
          style={{
            margin: -12,
            marginBottom: 24,
          }}
        />

      </Card>
    </PageContainer>
  );
};

export default Welcome;
