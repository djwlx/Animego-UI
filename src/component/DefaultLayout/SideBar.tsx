import React, { FC, useState, useEffect } from "react";
import { Nav } from "@douyinfe/semi-ui";
import { IconUser, IconStar } from "@douyinfe/semi-icons";

const ReactComponent: FC = () => {
  return (
    <Nav
      style={{ height: "100%", position: "fixed" }}
      items={[
        {
          itemKey: "/",
          text: "视频",
          icon: <IconUser />,
        },
        { itemKey: "/second", text: "配置", icon: <IconStar /> },
      ]}
      footer={{
        collapseButton: true,
      }}
    />
  );
};
export default ReactComponent;
