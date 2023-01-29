// 从树形结构中找到真正能编辑的字段,并扁平化，也就是没有cildren的子树
// 后面加入再多层级在此处理
export const getEditField = (data: any) => {
  const result: any[] = [];

  const getTree = (data: any) => {
    data?.forEach((item: any) => {
      if (item?.children) {
        getTree(item.children);
      } else {
        result.push(item);
      }
    });
  };
  getTree(data);
  return result;
};
