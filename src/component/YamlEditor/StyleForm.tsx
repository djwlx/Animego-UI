import React, { useState } from "react";
import { Button, Checkbox, Form, Input, InputNumber, Switch, Card } from "antd";
import { get } from "lodash-es";
import { getEditField } from "./utils";
import FieldRender from "./FieldRender";

const onFinish = (values: any) => {
  console.log("Success:", values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};
interface StyleFormProps {
  rowData: any; //原始数据
  fieldData: any; //字段数据
  configData: any; //配置数据
}

const StyleForm: React.FC<StyleFormProps> = (props) => {
  const { rowData, fieldData, configData } = props;
  const [form] = Form.useForm();
  // 第二层的配置默认添加到其他设置
  const otherSetting = fieldData?.filter((item: any) => !item.children);

  return (
    <>
      <Form
        form={form}
        name="basic"
        labelCol={{ span: 12 }}
        wrapperCol={{ span: 12 }}
        // initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        layout="vertical"
      >
        {fieldData?.map((item: any, index: number) => {
          if (item.children) {
            return (
              <Card title={get(configData, item.key)._attr}>
                {getEditField(item.children)?.map((item) => {
                  return (
                    <Form.Item
                      label={get(configData, item.key)._attr}
                      name={item.key}
                    >
                      <FieldRender type={typeof get(rowData, item.key)} />
                    </Form.Item>
                  );
                })}
              </Card>
            );
          }
        })}
        {otherSetting.length && (
          <Card title={"其他设置"}>
            {otherSetting?.map((item: any, index: number) => {
              return (
                <Form.Item
                  label={get(configData, item.key)._attr}
                  name={item.key}
                >
                  <FieldRender type={typeof get(rowData, item.key)} />
                </Form.Item>
              );
            })}
          </Card>
        )}
      </Form>
      <Button
        onClick={() => {
          console.log(form.getFieldsValue(true));
          console.log(form.getFieldValue("setting.feed.mikan.name"));
        }}
      >
        获取数据
      </Button>
    </>
  );
};

export default StyleForm;
