import { Tabs, TabsProps } from "antd";
import type { DataNode } from "antd/es/tree";
import { isObject, get } from "lodash-es";
import React, { FC, useState, useEffect } from "react";
import StyleFrom from "./StyleForm";
interface YamlEditorProps {
  YamlData: any; //yaml格式的数据结构
  configData: any; //同结构的配置文件
}

const YamlEditor: FC<YamlEditorProps> = (props, ref: any) => {
  const { YamlData, configData } = props;

  // 当前树的数据源
  const [treeData, setTreeData] = useState<any>();

  const treansTree = (data: any, comment: any) => {
    if (!data || !comment) {
      return [];
    }

    const commentObj = comment;

    const result: DataNode[] = [];

    const tempArr = result as any;

    console.log("原始数据：", data);
    console.log("配置信息：", commentObj);
    // 遍历对象获取多叉树以及对象和多叉树路径
    const deepGet = (
      node: { [key: string]: any },
      temp: any,
      path: string,
      accessPath: string
    ) => {
      for (let i in node) {
        const objPathString = path ? path + "." + i : i;
        const nodeIndex = temp.length;
        const accessPathString = accessPath
          ? accessPath + "." + "children" + `[${nodeIndex}]`
          : `[${nodeIndex}]`;

        if (isObject(node[i]) && !Array.isArray(node[i])) {
          temp.push({
            title: i,
            key: objPathString,
            access: accessPathString,
            children: [],
          });
          deepGet(
            node[i],
            temp[nodeIndex].children,
            objPathString,
            accessPathString
          );
        } else {
          temp.push({
            title: i,
            key: objPathString,
            access: accessPathString,
          });
        }
      }
    };
    deepGet(data, tempArr, "", "");

    return tempArr;
  };

  useEffect(() => {
    setTreeData(treansTree(YamlData, configData));
  }, [YamlData, configData]);

  // tab操作栏
  const items: TabsProps["items"] = treeData
    ?.map((item: any, index: number) => {
      return {
        key: item.key,
        label: get(configData, item.key)._attr,
        children: (
          <StyleFrom
            rowData={YamlData}
            fieldData={treeData[index].children}
            configData={configData}
          />
        ),
      };
    })
    .slice(1);

  return (
    <div>
      <Tabs items={items} />
    </div>
  );
};
export default YamlEditor;
