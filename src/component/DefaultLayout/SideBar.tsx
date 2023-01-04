import React, { FC, useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Nav } from "@douyinfe/semi-ui";
import { IconUser, IconStar } from "@douyinfe/semi-icons";

const ReactComponent: FC = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [selectKey, setSelectKey] = useState<string>("/");

  // 在此处理路由匹配导航栏情况
  useEffect(() => {
    setSelectKey(pathname);
  }, [pathname]);
  return (
    <Nav
      style={{ height: "100%", position: "fixed" }}
      selectedKeys={[selectKey]}
      items={[
        {
          itemKey: "/",
          text: "第一个页面",
          icon: <IconUser />,
        },
        { itemKey: "/second", text: "第二个页面", icon: <IconStar /> },
      ]}
      onSelect={(data) => {
        const { itemKey } = data;
        navigate(itemKey as string);
        setSelectKey(itemKey as string);
      }}
      footer={{
        collapseButton: true,
      }}
    />
  );
};
export default ReactComponent;
