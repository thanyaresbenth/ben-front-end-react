
import React, { useState } from 'react';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import {Button, Flex, message, Upload, Form, Space, Dropdown, DatePicker, Select, Row, Col, Divider} from 'antd';
import { Input, Radio } from 'antd';
import { DownOutlined, SmileOutlined } from '@ant-design/icons';

const getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
};
const beforeUpload = (file) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
        message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
        message.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
};
 function CreateNewUser(){
    const [loading, setLoading] = useState(false);
    const [imageUrl, setImageUrl] = useState();
    const handleChange = (info) => {
        if (info.file.status === 'uploading') {
            setLoading(true);
            return;
        }
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            getBase64(info.file.originFileObj, (url) => {
                setLoading(false);
                setImageUrl(url);
            });
        }
    };
    const uploadButton = (
        <button
            style={{
                border: 0,
                background: 'none',
            }}
            type="button"
        >
            {loading ? <LoadingOutlined /> : <PlusOutlined />}
            <div
                style={{
                    marginTop: 8,
                }}
            >
                Upload
            </div>
        </button>
    );


     const [form] = Form.useForm();


     const items = [
         {
             key: '1',
             label: 'Female'


         },
         {
             key: '2',
             label: 'Male'
         },

     ];







    return (
        <>

            <Form
                form={form}
                layout="vertical"
                // onFinish={onFinish}
                // onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
            </Form>

            <Row gutter={24}>
                <Col className="gutter-row" span={8}>
                    <div >
                        <Upload
                            name="avatar"
                            listType="picture-circle"
                            className="avatar-uploader"
                            showUploadList={false}
                            action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
                            beforeUpload={beforeUpload}
                            onChange={handleChange}
                        >
                            {imageUrl ? (
                                <img
                                    src={imageUrl}
                                    alt="avatar"
                                    style={{
                                        width: '100%',
                                    }}
                                />
                            ) : (
                                uploadButton
                            )}
                        </Upload>
                        <Divider>
                            <Button>Upload Profile picture</Button>
                        </Divider>
                        <Divider>
                            <Button type="primary" danger>Delete Picture</Button>
                        </Divider>



                    </div>
                </Col>
                <Col className="gutter-row" span={8}>
                    <div >
                        <Form.Item
                            name="fristName"
                            label="Frist Name"
                        >
                            <Input placeholder="Please enter Frist name" />
                        </Form.Item>

                        <Form.Item
                            label="Geandert"
                            name="Select"
                        >
                            <Select placeholder="---Please enter Last name"  />
                        </Form.Item>
                    </div>
                </Col>
                <Col className="gutter-row" span={8}>
                    <div >
                        <Form.Item
                            name="lastName"
                            label="Last Name"
                        >
                            <Input placeholder="Please enter Last name" />

                            <Form.Item label="Birthday">

                                <DatePicker placeholder="DD/MM/YYY" />
                            </Form.Item>


                            <Form.Item>
                                <Space>
                                    <Button type="primary" htmlType="submit">
                                        Submit
                                    </Button>
                                    <Button htmlType="button" >
                                        Fill
                                    </Button>
                                </Space>
                            </Form.Item>
                        </Form.Item>
                    </div>
                </Col>
            </Row>


        </>
    );
}
export default CreateNewUser;

