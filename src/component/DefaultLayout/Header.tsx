import React, { FC } from "react";
import { Nav, Avatar, Dropdown } from "@douyinfe/semi-ui";

const Header: FC = () => {
  return (
    <div style={{ width: "100%", position: "fixed" }}>
      <Nav
        mode={"horizontal"}
        onSelect={(key) => console.log(key)}
        header={{
          logo: (
            <img src="https://sf6-cdn-tos.douyinstatic.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/root-web-sites/webcast_logo.svg" />
          ),
          text: "个人中心",
        }}
      />
    </div>
  );
};
export default Header;
