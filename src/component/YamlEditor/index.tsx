import { Tree } from "antd";
import type { DataNode } from "antd/es/tree";
import { isObject, set, findKey, get, cloneDeep } from "lodash-es";
import React, {
  FC,
  useState,
  useEffect,
  useRef,
  forwardRef,
  useImperativeHandle,
} from "react";
import { DefaultRender } from "./defaultRender";
interface YamlEditorProps {
  YamlData: any; //yaml格式的数据结构
  configData: any; //同结构的配置文件
  renderItem?: (
    title: string,
    value?: [] | string | number | boolean,
    config?: any
  ) => string | Element; //自定义渲染(后续补充)
  onChange?: () => void;
}

const YamlEditor: FC<YamlEditorProps> = (props, ref: any) => {
  const { YamlData, configData, renderItem } = props;

  // 当前树的数据源
  const [treeData, setTreeData] = useState<any>();

  // 当前yaml结构数据
  const [yamlValue, setYamlValue] = useState<any>(cloneDeep(YamlData));

  const divRef = useRef<HTMLDivElement>(null);

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
            title: (
              <DefaultRender
                title={i}
                path={objPathString}
                value={undefined}
                config={get(commentObj, objPathString)}
              />
            ),
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
            title: (
              <DefaultRender
                title={i}
                value={get(data, objPathString)}
                path={objPathString}
                config={get(commentObj, objPathString)}
                onChange={(path, value) => {
                  console.log(path, value);
                  const tempData = cloneDeep(yamlValue);
                  set(tempData, path, value);
                  setYamlValue(tempData);
                }}
              />
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

  // ref中返回的值,方法和属性可以被父组件调用
  useImperativeHandle(ref, () => {
    return {
      getValues() {
        return yamlValue;
      },
      divRef,
    };
  });

  useEffect(() => {
    setTreeData(treansTree(YamlData, configData));
    setYamlValue(YamlData);
  }, [YamlData, configData]);

  return (
    <div ref={divRef}>
      {treeData && treeData.length !== 0 && (
        <Tree showLine defaultExpandAll treeData={treeData} />
      )}
    </div>
  );
};
export default forwardRef(YamlEditor as any);
