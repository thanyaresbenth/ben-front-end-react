import React, {useState} from 'react';
import {Form, Input, Button, Select, DatePicker, Upload, Row, Col, message} from 'antd';
import { UploadOutlined } from '@ant-design/icons';
// Import Axios at the top of your component file
import axios from 'axios';

import './UserManagementForm.css';
import moment from "moment";
import {useSearchParams} from "react-router-dom"; // Make sure to include your custom styles file

// Define the layout for form items
const formItemLayout = {
    labelCol: { span: 24 },
    wrapperCol: { span: 24 },
};

function UserManagement() {

    const [searchParams, setSearchParams] = useSearchParams();
    const requestId = searchParams.get("id");
    const [id, setId] = useState(requestId);

    const uploadButton = (
        <div>
            <UploadOutlined />
            <div>Upload Profile Picture</div>
        </div>
    );
    const [form] = Form.useForm();
    const handleSubmit = () => {
            form
                .validateFields()
                .then((values) => {
                    // Convert birthday format if needed, here assumed to be in the right format
                    const requestUser = {
                        id: id, // ID will presumably be generated by the server
                        first_name: values.first_name,
                        last_name: values.last_name,
                        gender: values.gender,
                        birthday: values.birthday ? moment(values.birthday).format('YYYY-MM-DD') : '',
                        image: 'aaaaaa', // This should be the image data or image URL from your state
                    };

                    if(id != null){
                        axios
                            .put(`http://localhost:8080/users/users/${id}`, requestUser)
                            .then((response) => {

                                console.log(response.data);
                                message.success('User created successfully!');
                            })
                            .catch((error) => {

                                console.error('There was an error creating the user:', error);
                                message.error('Failed to create user.');
                            });
                    }else{
                        //Use Axios to send a POST request
                        axios
                            .post('http://localhost:8080/users/users', requestUser)
                            .then((response) => {

                                console.log(response.data);
                                message.success('User created successfully!');
                            })
                            .catch((error) => {

                                console.error('There was an error creating the user:', error);
                                message.error('Failed to create user.');
                            });
                    }

                })
                .catch((errorInfo) => {

                    console.error('Validate Failed:', errorInfo);
                    message.error('Please correct the errors in the form.');
                });
        };



    return (
        <div className="user-management" >
            <div className="header">
                <p>Create new User</p>

                <Button type="primary">Add+</Button>

            </div>
            <Form form={form} {...formItemLayout}>
                <Row gutter={16}>
                    <Col className="gutter-row upload-col" span={10}>
                        <div className="upload-imge">
                        <Upload
                            name="avatar"
                            listType="picture-card"
                            className="avatar-uploader"
                            showUploadList={false}
                            // beforeUpload={beforeUpload}
                            // onChange={handleChange}
                        >
                            {uploadButton}
                        </Upload>
                        </div>

                        <div className="upload-buttons" span={5} style={{ textAlign: 'center' }}>
                            <Button type="primary">Upload Profile Picture</Button>

                        </div>
                        <div  className="upload-buttons">
                        <Button type="primary" danger>Delete Picture</Button>
                        </div>

                    </Col>


                    <Col className="gutter-row" span={14}>
                        <Row gutter={12}>
                            <Col span={8}>
                                <Form.Item name="first_name" label="First Name">
                                    <Input placeholder="Please enter first name" />
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item name="last_name" label="Last Name">
                                    <Input placeholder="Please enter last name" />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={16}>
                            <Col span={12}>
                                <Form.Item name="gender" label="Gender">
                                    <Select placeholder="--Please select Gender--">
                                        <Select.Option value="male">Male</Select.Option>
                                        <Select.Option value="female">Female</Select.Option>
                                    </Select>
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item name="birthday" label="Birthday">
                                    <DatePicker format="DD/MM/YYYY" placeholder="DD/MM/YYYY" />
                                </Form.Item>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col span={20} style={{ textAlign: 'right' }}>
                        <Button className="cancel-container" type="btn-btn"  onClick={() => form.resetFields()}>Cancel</Button>
                        <Button className="save-container" type="btn-btn" onClick={handleSubmit} style={{ marginLeft: '15px' }}>
                            Save
                        </Button>
                    </Col>
                </Row>
            </Form>
        </div>
    );
}

export default UserManagement;



