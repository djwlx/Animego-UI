import React, { FC, useEffect, useRef, useState } from "react";
import VirtualList from "rc-virtual-list";
import { List } from "antd";
let index = 0;
const Log: FC = () => {
  const logsDiv = useRef<any>(null);
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    const ws = new WebSocket(
      "ws://localhost:7991/websocket/log?access_key=10464d5c99713773e5c0480e628927198ce5b92d0754a411cb602ad56cefeff7"
    );
    ws.onopen = function () {
      console.log("WebSocket connection established.");
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
      const length = data.length;
      logsDiv.current.scrollTo(0, length * 47);
    };
  }, []);

  return (
    <div id="logsDiv">
      <List style={{ backgroundColor: "black" }}>
        <VirtualList
          data={data}
          height={500}
          itemHeight={47}
          itemKey="id"
          ref={logsDiv}
          onClick={() => console.log("dd")}
        >
          {(item: any) => (
            <List.Item key={item.id}>
              <div style={{ color: "white" }}>{item.message}</div>
            </List.Item>
          )}
        </VirtualList>
      </List>
    </div>
  );
};
export default Log;
