import React, { FC, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getConfig } from "@/service";
import { Select, Switch, Tree, Tooltip, Input, Space, Spin } from "antd";
import type { DataNode } from "antd/es/tree";
import { encode, decode } from "js-base64";
import { isObject, set, findKey, get, cloneDeep } from "lodash-es";
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
        setConfigData(data.data.config);
      }
      let { data: comments } = await getConfig({ key: "comment" });
      if (comments?.code === 200) {
        setConfigComments(decode(comments.data.data));
      }
      setLoading(false);
    };

    getData();
  }, []);

  return (
    <div style={{ height: 2100 }}>
      {/* <Link to="/">首页</Link> */}
      <h2>
        配置 <Spin spinning={loading}></Spin>
      </h2>

      <YamlEditor
        YamlData={configData}
        configData={configComments}
        // renderItem={(title, value, config) => {
        //   // console.log(title, config);
        //   return value ? title + ":" + value : title;
        // }}
      />
    </div>
  );
};
export default ReactComponent;
