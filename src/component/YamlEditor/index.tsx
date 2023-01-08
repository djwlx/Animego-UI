import { Tree } from "antd";
import type { DataNode } from "antd/es/tree";
import { isObject, set, findKey, get, cloneDeep } from "lodash-es";
import React, { FC, useState, useEffect } from "react";
import { defaultRender } from "./defaultRender";
interface YamlEditorProps {
  YamlData: any; //yaml格式的数据结构
  configData: any; //同结构的配置文件
  renderItem?: (
    title: string,
    value?: [] | string | number | boolean,
    config?: any
  ) => string | Element; //自定义渲染
  onChange?: () => void;
}

const YamlEditor: FC<YamlEditorProps> = (props) => {
  const { YamlData, configData, renderItem = defaultRender } = props;

  const [treeData, setTreeData] = useState<any>();

  const treansTree = (data: any, comment: any) => {
    if (!data || !comment) {
      return [];
    }

    const commentObj = JSON.parse(comment);

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
            title: renderItem(i, undefined, get(commentObj, objPathString)),
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
            title: renderItem(
              i,
              get(data, objPathString),
              get(commentObj, objPathString)
            ),
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

  return (
    <div>
      {treeData && treeData.length !== 0 && (
        <Tree showLine defaultExpandAll treeData={treeData} />
      )}
    </div>
  );
};
export default YamlEditor;
