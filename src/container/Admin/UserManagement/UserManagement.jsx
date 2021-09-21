/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actFetchUserManagement } from "./modules/actions";
import "./UserManagement.scss";
import { Modal, Button, Form, Input, Checkbox } from "antd";

function UserManagement(props) {
  const dispatch = useDispatch();
  console.log(props);
  const { userManagement } = useSelector(
    (state) => state.userMagenementReducer
  );

  useEffect(() => {
    dispatch(actFetchUserManagement());
  }, []);

  console.log(userManagement);

  const renderUserList = () =>
    userManagement?.map((user, idx) => {
      return (
        <div className="col-3">
          <div className="card">
            <img className="card-img-top" src="holder.js/100x180/" alt="" />
            <div className="card-body">
              <h4 className="card-title">{user.hoTen}</h4>
              <p className="card-text">{user.email}</p>
            </div>
          </div>
        </div>
      );
    });

  // Button + Modal - Ant Design

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  //   const handleOk = () => {
  //     setIsModalVisible(false);
  //   };

  const handleCancel = (values) => {
    console.log("Cancel:", values);
    setIsModalVisible(false);
  };

  // Form - Ant Design

  const onFinish = (values) => {
    console.log("Success:", values);
    setIsModalVisible(false);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
    setIsModalVisible(false);
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <h1 className="mr-auto my-3">UserManagement</h1>
          <Button className="ml-auto my-4" type="primary" onClick={showModal}>
            Add New User
          </Button>
          <Modal
            title="New User's Information"
            visible={isModalVisible}
            footer={null}
            onCancel={handleCancel}>
            {/* onOk={handleOk}
            onCancel={handleCancel}> */}
            {/* <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p> */}

            <Form
              name="basic"
              labelCol={{
                span: 7,
              }}
              wrapperCol={{
                span: 20,
              }}
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="on"
              labelAlign="right"
              onValuesChange>
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
                label="GROUP ID"
                name="maNhom"
                rules={[
                  {
                    required: true,
                    message: "Please input user's group ID!",
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
                <Input />
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

              {/* <Form.Item
                name="remember"
                valuePropName="checked"
                wrapperCol={{
                  offset: 8,
                  span: 16,
                }}>
                <Checkbox>Remember me</Checkbox>
              </Form.Item> */}

              <Form.Item
                wrapperCol={{
                  offset: 8,
                  span: 16,
                }}>
                <Button type="primary" htmlType="submit">
                  {/* {" "} */}
                  Add
                </Button>
              </Form.Item>
            </Form>
          </Modal>
          <div className="row">{renderUserList()}</div>
        </div>
      </div>
    </>
  );
}

export default UserManagement;
