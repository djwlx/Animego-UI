import { Input, InputNumber, Switch } from "antd";
import React, { FC } from "react";

type FieldRenderProps = {
  type: string;
};
const FieldRender: FC<FieldRenderProps> = (props) => {
  const { type } = props;
  return (
    <>
      {type === "string" && <Input />}
      {type === "number" && <InputNumber />}
      {type === "boolean" && <Switch />}
    </>
  );
};
export default FieldRender;
