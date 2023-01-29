import { get, set } from "lodash-es";

// 从树形结构中找到真正能编辑的字段,并扁平化，也就是没有cildren的子树
// 后面加入再多层级在此处理
export const getEditField = (data: any, config: any) => {
  const result: any[] = [];
  const getTree = (data: any) => {
    data?.forEach((item: any) => {
      if (item?.children) {
        getTree(item.children);
      } else {
        // 二层往上的名字结构在此处理
        const path = item.key;
        const pathLen = path.split(".")?.length;
        let labelName = "";

        if (pathLen > 3) {
          for (let i = 3; i <= pathLen; i++) {
            const nowPath = path.split(".").slice(0, i).join(".");
            if (i === pathLen) {
              labelName += ` [${get(config, nowPath)._attr}]`;
              break;
            }
            labelName += get(config, nowPath)._attr;
          }
        }

        result.push({
          ...item,
          label: labelName,
        });
      }
    });
  };
  getTree(data);
  return result;
};

// 获取初始值
export const getInitValue = (data: any, rowData: any) => {
  let initValue: any = {};
  const getTree = (data: any) => {
    data?.forEach((item: any) => {
      if (item?.children) {
        getTree(item.children);
      } else {
        const value = get(rowData, item.key);
        initValue[item.key] = value;
        // result.push(item);
      }
    });
  };
  getTree(data);
  return initValue;
};

// 根据类型组件返回字段映射,和组件有关
export const getValueName = (type: any) => {
  const typeObj = {
    string: "value",
    number: "value",
    boolean: "checked",
  };

  return typeObj[type];
};
