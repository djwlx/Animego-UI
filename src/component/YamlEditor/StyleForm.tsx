import React, { useState } from "react";
import { Button, Form, Card, Space, message } from "antd";
import { cloneDeep, get, set } from "lodash-es";
import { getEditField, getInitValue, getValueName } from "./utils";
import FieldRender from "./FieldRender";
import { setConfig } from "@/service";

interface StyleFormProps {
  rowData: any; //原始数据
  fieldData: any; //字段数据
  configData: any; //配置数据
}

// 用于标题展示

const StyleForm: React.FC<StyleFormProps> = (props) => {
  const { rowData, fieldData, configData } = props;

  const [loading, setLoading] = useState<boolean>(false);
  const [form] = Form.useForm();
  const [messageApi, contextHolder] = message.useMessage();

  // 第二层的配置默认添加到其他设置
  const otherSetting = fieldData?.filter((item: any) => !item.children);
  // 获取初始值
  const initValues = getInitValue(fieldData, rowData);

  return (
    <Space direction="vertical" style={{ width: "100%" }}>
      {contextHolder}
      <Form
        form={form}
        name="basic"
        labelCol={{ span: 12 }}
        wrapperCol={{ span: 12 }}
        initialValues={initValues}
        layout="vertical"
      >
        {fieldData?.map((item: any, index: number) => {
          if (item.children) {
            return (
              <Card title={get(configData, item.key)._attr} key={index}>
                {getEditField(item.children, configData)?.map((item) => {
                  const valueType = typeof get(rowData, item.key);
                  return (
                    <Form.Item
                      label={
                        item.label
                          ? item.label
                          : get(configData, item.key)._attr
                      }
                      name={item.key}
                      valuePropName={getValueName(valueType)}
                      key={item.key}
                      tooltip={get(configData, item.key)._comment}
                    >
                      <FieldRender type={valueType} />
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
              const valueType = typeof get(rowData, item.key);
              return (
                <Form.Item
                  label={get(configData, item.key)._attr}
                  name={item.key}
                  valuePropName={getValueName(valueType)}
                  key={item.key}
                >
                  <FieldRender type={valueType} />
                </Form.Item>
              );
            })}
          </Card>
        )}
      </Form>
      <Button
        type="primary"
        loading={loading}
        onClick={() => {
          const cloneData = cloneDeep(rowData);
          const formData = form.getFieldsValue();
          Object.keys(formData)?.forEach((item: any) => {
            set(cloneData, item, formData[item]);
          });

          setLoading(true);
          setConfig({
            backup: true,
            key: "all",
            config: cloneData,
          }).then(
            (res) => {
              if (res.data.code === 200) {
                messageApi.success(res.data.msg);
                setLoading(false);
              }
            },
            () => setLoading(false)
          );
        }}
      >
        保存
      </Button>
    </Space>
  );
};

export default StyleForm;
