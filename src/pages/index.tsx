import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
const ReactComponent: FC = () => {
  const navigate = useNavigate();
  return (
    <div style={{ height: 1000 }}>
      hello我是首页
      <button onClick={() => navigate("/second")}>跳转到配置</button>
    </div>
  );
};
export default ReactComponent;
