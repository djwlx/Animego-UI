import React, { FC, useState, useEffect } from "react";
import { getConfig } from "@/service";
import { Spin } from "antd";
import { YamlEditor } from "@/component";

const ReactComponent: FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [configData, setConfigData] = useState<any>([]);
  const [configComments, setConfigComments] = useState<string>();

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
    <div>
      <h2>
        配置 <Spin spinning={loading}></Spin>
      </h2>
      <YamlEditor YamlData={configData} configData={configComments} />
    </div>
  );
};
export default ReactComponent;
