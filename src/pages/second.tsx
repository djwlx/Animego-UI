import React, { FC, useState, useEffect, useRef } from "react";
import { getConfig, setConfig } from "@/service";
import { Spin, Button, message } from "antd";
import { YamlEditor } from "@/component";

const ReactComponent: FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [configData, setConfigData] = useState<any>([]);
  const [configComments, setConfigComments] = useState<string>();
  const [messageApi, contextHolder] = message.useMessage();
  const yamlRef = useRef<any>();

  // 获取配置数据
  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      let { data } = await getConfig({ key: "all" });
      if (data?.code === 200) {
        setConfigData(data.data);
      }
      let { data: comments } = await getConfig({ key: "comment" });
      if (comments?.code === 200) {
        setConfigComments(comments.data);
      }
      setLoading(false);
    };

    getData();
  }, []);

  return (
    <div style={{ height: 2100 }}>
      {contextHolder}
      <h2>
        配置 <Spin spinning={loading}></Spin>
      </h2>
      <Button
        onClick={async () => {
          setLoading(true);
          const { data } = await setConfig({
            backup: true,
            key: "all",
            config: yamlRef?.current?.getValues(),
          });
          if (data.code === 200) {
            messageApi.success(data.msg);
          }
          setLoading(false);
        }}
        type="primary"
      >
        保存
      </Button>
      <YamlEditor
        ref={yamlRef}
        YamlData={configData}
        configData={configComments}
      />
    </div>
  );
};
export default ReactComponent;
