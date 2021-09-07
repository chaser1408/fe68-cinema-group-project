import React, { useEffect } from "react";

import { useDispatch } from "react-redux";
import { loginAction } from "./modules/actions";
import { Form, Input, Button } from "antd";

import { useHistory } from "react-router-dom";

export default function LoginUser(props) {
  const history = useHistory();

  const dispatch = useDispatch();

  // const { loading, userLogin } = useSelector((state) => state.UserLoginReducer);

  useEffect(() => {
    const userLogin = JSON.parse(localStorage.getItem("userLogin"));
    console.log("user login:", userLogin);
    // if (userLogin.taiKhoan !== null) {
    //     history.push('/');
    // }
  }, []);

  const pushCallback = () => {
    history.push("/");
  };
  const onFinish = (values) => {
    dispatch(loginAction(values, pushCallback));
    console.log("thang cong", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off">
      <Form.Item
        label="Username"
        name="taiKhoan"
        rules={[
          {
            required: true,
            message: "Please input your username!",
          },
        ]}>
        <Input />
      </Form.Item>
      <Form.Item
        label="Password"
        name="matKhau"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}>
        <Input.Password />
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}
