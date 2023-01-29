import { Input, InputNumber, Switch } from "antd";
import React, { FC } from "react";

type FieldRenderProps = {
  type: string;
};
const FieldRender: FC<FieldRenderProps> = (props) => {
  const { type, ...rest } = props;
  return (
    <>
      {type === "string" && <Input {...rest} />}
      {type === "number" && <InputNumber {...rest} />}
      {type === "boolean" && <Switch {...(rest as any)} />}
    </>
  );
};
export default FieldRender;
