import React, { FC, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getConfig } from "@/service";
import { Select, Switch, Tree, Tooltip, Input, Space } from "antd";
import type { DataNode } from "antd/es/tree";
import { encode, decode } from "js-base64";
import { isObject, set, findKey, get, cloneDeep } from "lodash-es";

const ReactComponent: FC = () => {
  const [configData, setConfigData] = useState<any>([]);
  const [configComments, setConfigComments] = useState<string>();
  console.log(isObject([]));
  const transTree = (data: any, comment: any) => {
    if (!data || !comment) {
      return [];
    }
    const commentObj = JSON.parse(comment);
    // console.log(data, commentObj);
    const result: DataNode[] = [];

    const getIndexByname = (arr: any, name: any) => {
      return arr.findIndex((item: any) => item.key === name);
    };

    const deepGet = (node: { [key: string]: any }, path: string) => {
      if (!isObject(node) || Array.isArray(node)) {
        const isArray = Array.isArray(node);
        const settingPath = path.split(".").slice(0, -1);
        // 根据路径加入树
        let temparray: any = result;
        let urlKey = "";
        settingPath?.forEach((key: string, index: number) => {
          urlKey = index !== 0 ? urlKey + "." + key : key;
          let keyIndex = getIndexByname(temparray, urlKey);
          // 没有children属性
          if (keyIndex === -1) {
            let commentKey1 = urlKey + "._comment";
            let commentKey2 = urlKey;
            const parseTitle =
              get(commentObj, commentKey1) ||
              get(commentObj, commentKey2) ||
              "";

            temparray.push({
              title: (
                <Space>
                  <Tooltip title={parseTitle}>
                    <span>{key}</span>
                  </Tooltip>
                  {index === settingPath.length - 1 && (
                    <>
                      {isArray && "(数组)"}
                      :
                      <Input
                        value={get(data, urlKey)}
                        onChange={(e) => {
                          const cloneData = cloneDeep(configData);
                          const value = e.target.value;
                          set(cloneData, urlKey, value);
                          setConfigData(cloneData);
                        }}
                      />
                    </>
                  )}
                </Space>
              ),
              key: urlKey,
            });

            let keyIndex2 = getIndexByname(temparray, urlKey);
            if (
              temparray[keyIndex2]?.children &&
              temparray[keyIndex2]?.children?.length !== 0
            ) {
              temparray = temparray[keyIndex2]?.children;
            } else {
              if (index !== settingPath.length - 1) {
                temparray[keyIndex2].children = [];
                temparray = temparray[keyIndex2]?.children;
              }
            }
          } else {
            temparray = temparray[keyIndex]?.children;
          }
          //
        });
      } else {
        for (let i in node) {
          deepGet(node[i], path + i + ".");
        }
      }
    };
    deepGet(data, "");
    console.log(result, "转换结果");
    return result;
  };

  // 获取配置数据
  useEffect(() => {
    const getData = async () => {
      let { data } = await getConfig({ key: "all" });
      if (data?.code === 200) {
        setConfigData(data.data.config);
      }
      let { data: comments } = await getConfig({ key: "comment" });
      if (comments?.code === 200) {
        setConfigComments(decode(comments.data.data));
      }
    };
    getData();
  }, []);

  return (
    <div style={{ height: 2100 }}>
      <Link to="/">首页</Link>
      <h2>配置</h2>
      {configData && configComments && (
        <Tree
          showLine
          defaultExpandAll
          treeData={transTree(configData, configComments)}
        />
      )}
    </div>
  );
};
export default ReactComponent;
