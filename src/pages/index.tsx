import React, { FC } from "react";
import { useNavigate } from "react-router-dom";

const ReactComponent: FC = () => {
  const navigate = useNavigate();
  return (
    <div style={{ height: 1000 }}>
      <h2>首页</h2>
    </div>
  );
};
export default ReactComponent;
