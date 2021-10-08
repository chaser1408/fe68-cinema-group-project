/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { Button, Form, Input, Select } from "antd";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { actFetchUserInfo, actFetchUserUpdate } from "./modules/actions";
import "./UpdateUser.scss";

function UpdateUser(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  console.log(props);
  const { userInfo } = useSelector((state) => state.userEditUserReducer);
  const { userLogin } = useSelector((state) => state.userLoginReducer);
  console.log(userInfo, "userInfo");
  useEffect(() => {
    dispatch(actFetchUserInfo(props.match.params.taiKhoan));
  }, []);

  const [isModalVisible, setIsModalVisible] = useState(false);

  const onFinish = (values, history) => {
    console.log("Success:", values);
    dispatch(actFetchUserUpdate(values, history, userLogin));
    setIsModalVisible(false);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
    setIsModalVisible(false);
  };

  const renderUserInfo = () =>
    userInfo.map((info, idx) => (
      <Form
        className={`formEdit`}
        name="basic"
        labelCol={{
          span: 7,
        }}
        wrapperCol={{
          span: 20,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        labelAlign="right"
        onValuesChange
        // form={form}
        initialValues={{
          taiKhoan: `${info.taiKhoan}`,
          matKhau: `${info.matKhau}`,
          email: `${info.email}`,
          soDt: `${info.soDt}`,
          maNhom: `GP02`,
          maLoaiNguoiDung: `${info.maLoaiNguoiDung}`,
          hoTen: `${info.hoTen}`,
        }}>
        <Form.Item
          label="Username"
          name="taiKhoan"
          rules={[
            {
              required: true,
              message: "Please input user's username!",
            },
          ]}>
          <Input />
        </Form.Item>

        {/* <Form.Item
          shouldUpdate={(prevValues, curValues) =>
            prevValues.additional !== curValues.additional
          }>
          {() => {
            return (
              <Form.Item
                label="Username"
                name="taiKhoan"
                value={`${info.taiKhoan}`}
                rules={[
                  {
                    required: true,
                    message: "Please input user's username!",
                  },
                ]}>
                <Input defaultValue={`${info.taiKhoan}`} />
              </Form.Item>
            );
          }}
        </Form.Item> */}

        <Form.Item
          label="Password"
          name="matKhau"
          rules={[
            {
              required: true,
              message: "Please input user's password!",
            },
          ]}>
          <Input.Password />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: "Please input user's username!",
            },
          ]}>
          <Input />
        </Form.Item>

        <Form.Item
          label="Phone Number"
          name="soDt"
          rules={[
            {
              required: true,
              message: "Please input user's phone number!",
            },
          ]}>
          <Input />
        </Form.Item>

        <Form.Item
          label="GROUP NUMBER"
          name="maNhom"
          rules={[
            {
              required: true,
            },
          ]}>
          <Input />
        </Form.Item>

        <Form.Item
          label="User Role"
          name="maLoaiNguoiDung"
          rules={[
            {
              required: true,
              message: "Please input user's role!",
            },
          ]}>
          <Select>
            <Select.Option value="KhachHang">Khách Hàng</Select.Option>
            <Select.Option value="QuanTri">Quản Trị</Select.Option>
            {/* <Select.Option value="KhachHang">Khách Hàng</Select.Option> */}
          </Select>
          {/* <Input /> */}
        </Form.Item>

        <Form.Item
          label="User's Fullname"
          name="hoTen"
          rules={[
            {
              required: true,
              message: "Please input user's username!",
            },
          ]}>
          <Input />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}>
          <Button type="primary" htmlType="submit">
            Update
          </Button>
        </Form.Item>
      </Form>
    ));

  return (
    <>
      <div className="container">{renderUserInfo()}</div>
    </>
  );
}

export default UpdateUser;
