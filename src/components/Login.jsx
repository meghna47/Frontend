import React from "react";
import { Navigate } from "react-router-dom";
import { Button, Checkbox, Form, Input } from "antd";

import axios from "../api/axios";
import "../css/Login.css";
import image from "../Images/priscilla-du-preez-XkKCui44iM0-unsplash.jpg";

const onFinish = async ({ username, password }) => {
  let res = await axios.post(`/auth/login`, { username, password });

  sessionStorage.setItem("user_token", res.data.token);
  window.location.href = "/home";
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

function LoginForm() {
  return sessionStorage.getItem("user_token") ? (
    <Navigate to="/" />
  ) : (
    <div
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        height: "98vh",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div className="Form">
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          style={{
            maxWidth: 600,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default LoginForm;
