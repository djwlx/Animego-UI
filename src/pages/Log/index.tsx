import React, { FC, useEffect, useRef, useState } from "react";
import { ClockCircleOutlined } from "@ant-design/icons";
import VirtualList from "rc-virtual-list";
import { Badge, List, Space, Tag } from "antd";
let index = 0;

enum LogType {
  history = "history",
  actual = "actual",
}

const Log: FC = () => {
  const logsDiv = useRef<any>(null);
  const [data, setData] = useState<any[]>([]);
  const [logType, setLogType] = useState<LogType>(LogType.actual);
  const [socket, setSocket] = useState<any>();

  // 实时日志
  useEffect(() => {
    const ws = new WebSocket(
      "ws://localhost:7991/websocket/log?access_key=10464d5c99713773e5c0480e628927198ce5b92d0754a411cb602ad56cefeff7"
    );
    ws.onopen = function () {
      console.log("WebSocket connection established.");
      setSocket(ws);
    };

    ws.onclose = function () {
      console.log("WebSocket connection closed.");
    };

    ws.onmessage = function (event) {
      const logMessage = event.data;
      setData((prevMessages) => [
        ...prevMessages,
        {
          id: index++,
          message: logMessage,
        },
      ]);
    };
  }, []);

  const formatterString = (logStr: string) => {
    const arr = logStr.split("[").map((item) => {
      return item.split("]");
    });

    const time = arr[1][0];
    const info = arr[2][0];
    const path = arr[3][0];
    const message = arr[3][1];

    return {
      time,
      info,
      path,
      message,
    };
  };

  const renderItem = (item) => {
    const obj = formatterString(item.message);
    return (
      <React.Fragment key={item.id}>
        <List.Item style={{ color: "black" }}>
          <Space>
            <Badge
              count={<ClockCircleOutlined style={{ color: "#f5222d" }} />}
            />
            <span>{obj.time}</span>
            <span>
              {obj.info === "INFO" && <Tag color="success">INFO</Tag>}
              {obj.info === "DEBUG" && <Tag color="purple">DEBUG</Tag>}
              {obj.info === "WARN" && <Tag color="warning">WARN</Tag>}
              {obj.info === "ERROR" && <Tag color="error">ERROR</Tag>}
            </span>
            <span>{obj.message}</span>
          </Space>
        </List.Item>
      </React.Fragment>
    );
  };

  return (
    <div id="logsDiv" ref={logsDiv} style={{ backgroundColor: "white" }}>
      {logType === LogType.actual ? (
        <List
          bordered
          dataSource={data}
          renderItem={(item) => renderItem(item)}
        />
      ) : (
        <List>
          <VirtualList data={data} height={500} itemHeight={47} itemKey="id">
            {(item) => renderItem(item)}
          </VirtualList>
        </List>
      )}
    </div>
  );
};
export default Log;
