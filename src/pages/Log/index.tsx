import React, { FC, useEffect, useRef, useState } from "react";
import { ClockCircleOutlined, RightOutlined } from "@ant-design/icons";
import VirtualList from "rc-virtual-list";
import { Badge, List, Space, Tag, Button } from "antd";
import { accessKey } from "@/utils/request";
import styles from "./index.module.scss";

enum LogType {
  history = "history",
  actual = "actual",
}

let index = 0;
const Log: FC = () => {
  const logsDiv = useRef<any>(null);
  const [data, setData] = useState<any[]>([]);
  const [logType, setLogType] = useState<LogType>(LogType.actual);
  const [socket, setSocket] = useState<any>();
  const [isPaused, setIsPaused] = useState<boolean>(false);

  const connect = () => {
    const ws = new WebSocket(
      `ws://localhost:7991/websocket/log?access_key=${accessKey}`
    );
    ws.onopen = function () {
      console.log("WebSocket connection established.");
      setSocket(ws);
    };

    ws.onclose = function () {
      console.log("WebSocket connection closed.");
    };

    ws.onmessage = function (event) {
      const logMessages = event.data.split("\n\n").slice(1);
      setData((prevMessages) => [
        ...prevMessages,
        ...logMessages.map((item) => {
          return {
            id: index++,
            message: item,
          };
        }),
      ]);
    };
  };

  // 实时日志
  useEffect(() => {
    connect();
  }, []);

  // 日志处理
  const formatterString = (logStr: string) => {
    const targetChar = "]";
    let index = -1;
    let count = 0;

    while ((index = logStr.indexOf(targetChar, index + 1)) !== -1) {
      count++;
      if (count === 3) {
        break;
      }
    }
    const arr = logStr.split("[").map((item) => {
      return item.split("]");
    });

    const time = arr[1][0];
    const info = arr[2][0];
    const path = arr[3][0];
    const message = logStr.slice(index + 1);
    const messages = message.split("\n").filter((item) => item !== "");

    return {
      log: logStr,
      time,
      info,
      path,
      message,
      messages,
    };
  };

  const getTagByText = (text: string) => {
    switch (text) {
      case "INFO":
        return "success";
      case "DEBUG":
        return "purple";
      case "WARN":
        return "warning";
      case "ERROR":
        return "error";
      default:
        return "default";
    }
  };

  const renderItem = (item) => {
    const obj = formatterString(item.message);
    return (
      <React.Fragment key={item.id}>
        <List.Item
          style={{ color: "black", padding: "5px 10px 5px 10px" }}
          className={styles.logColumn}
        >
          <Space>
            <Badge
              count={
                <ClockCircleOutlined
                  style={{ color: "#f5222d" }}
                  rev={undefined}
                />
              }
            />
            <span style={{ flexShrink: 0 }}>{obj.time}</span>
            <Tag
              color={getTagByText(obj.info)}
              style={{ width: 60, textAlign: "center" }}
            >
              {obj.info}
            </Tag>
            <span>
              {obj.messages.map((item, index) => {
                return (
                  <React.Fragment key={index}>
                    <RightOutlined rev={undefined} />
                    {item}
                    <br />
                  </React.Fragment>
                );
              })}
            </span>
          </Space>
        </List.Item>
      </React.Fragment>
    );
  };

  return (
    <div id="logsDiv" ref={logsDiv} style={{ backgroundColor: "white" }}>
      <Space style={{ marginBottom: 20 }}>
        <Button
          type="primary"
          danger={!isPaused}
          onClick={() => {
            if (isPaused) {
              setIsPaused(false);
              socket.send('{"action":"resume"}');
            } else {
              setIsPaused(true);
              socket.send('{"action":"pause"}');
            }
          }}
        >
          {isPaused ? "继续" : "暂停"}
        </Button>

        <Button
          type="primary"
          style={{ backgroundColor: "green" }}
          onClick={() => {
            setData([]);
          }}
        >
          清屏
        </Button>
      </Space>
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
