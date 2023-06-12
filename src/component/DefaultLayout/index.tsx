import React, { useState } from "react";
import { Layout, theme, FloatButton, Modal, Input } from "antd";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import userAtom from "@/atoms";
import { useRecoilState } from "recoil";
import { SettingOutlined } from "@ant-design/icons";

const { Content } = Layout;

const DefaultLayout: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const [info, setInfo] = useRecoilState(userAtom);
  const [visible, setVisible] = useState<boolean>(false);

  return (
    <Layout>
      <Header />
      <Modal
        title="全局设置"
        open={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
      >
        <Input
          addonBefore="key:"
          value={info.access_key}
          onChange={(e: any) => setInfo({ access_key: e.target?.value })}
        />
      </Modal>
      <FloatButton
        icon={<SettingOutlined rev={undefined} />}
        onClick={() => setVisible(true)}
      />
      <Layout>
        <Layout style={{ padding: 24 }}>
          <Content
            style={{
              padding: 24,
              margin: 0,
              background: colorBgContainer,
            }}
          >
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};
export default DefaultLayout;
