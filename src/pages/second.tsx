import React, { FC } from "react";
import { Link } from "react-router-dom";
const ReactComponent: FC = () => {
  return (
    <div>
      hello world
      <Link to="/">跳转回首页</Link>
    </div>
  );
};
export default ReactComponent;
