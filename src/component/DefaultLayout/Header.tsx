import React, { FC } from "react";
import { Nav, Avatar, Dropdown } from "@douyinfe/semi-ui";

const Header: FC = () => {
  return (
    <div style={{ width: "100%", position: "fixed" }}>
      <Nav
        mode={"horizontal"}
        items={
          [
            // { itemKey: "user", text: "个人中心", icon: <IconUser /> },
            // { itemKey: "union", text: "活动管理", icon: <IconStar /> },
            // {
            //   itemKey: "approve-management",
            //   text: "审批管理",
            //   icon: <IconEdit />,
            //   items: [
            //     "入驻审核",
            //     {
            //       itemKey: "operation-management",
            //       text: "运营管理",
            //       items: ["人员管理", "人员变更"],
            //     },
            //   ],
            // },
          ]
        }
        onSelect={(key) => console.log(key)}
        header={{
          logo: (
            <img src="https://sf6-cdn-tos.douyinstatic.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/root-web-sites/webcast_logo.svg" />
          ),
          text: "个人中心",
        }}
        footer={
          <Dropdown
            position="bottomRight"
            render={
              <Dropdown.Menu>
                <Dropdown.Item>详情</Dropdown.Item>
                <Dropdown.Item>退出</Dropdown.Item>
              </Dropdown.Menu>
            }
          >
            <Avatar size="small" color="light-blue" style={{ margin: 4 }}>
              user
            </Avatar>
            <span>用户</span>
          </Dropdown>
        }
      />
    </div>
  );
};
export default Header;
