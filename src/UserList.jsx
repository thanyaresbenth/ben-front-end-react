import {Button, Form, Input} from "antd";
import Search from "antd/es/input/Search";
import React, {useEffect, useState} from 'react';
import { Space, Table, Tag } from 'antd';
import axios from "axios";
import moment from 'moment';
import { Image } from 'antd';

const columns = [
    {
        title: 'Profile picture',
        dataIndex: 'image',
        key: 'Image',
        render :  (image, record, index) => {
            return<>
                <Image
                    width={50}
                    height={50}
                    src="error"
                    fallback={image}
                />
            </>;
        }

    },
    {
        title: 'First name',
        dataIndex: 'first_name',
        key: 'Firstname',
    },
    {
        title: 'Last Name',
        dataIndex: 'last_name',
        key: 'Lastname',
    },
    {
        title: 'Gender',
        dataIndex: 'gender',
        key: 'Gender',
    },
    {
        title: 'Birthday',
        dataIndex: 'birthday',
        key: 'Birthday',
        render :  (birthday, record, index) => {
            let date = new Date(birthday);
            let dateDisplay = moment(date).format('DD/MM/YYYY');

            console.log(dateDisplay);
            return <>{dateDisplay}</>;
        }


    },
    {
        title: 'Action',
        key: 'Action',
        render: () => (
            <Space size="middle">
            <Button>Edit</Button>
            <Button type="primary">Delete</Button>
            </Space>

        ),
    }

];
const data = [

];

// ...
//เรียกApi
const API_URL = 'http://localhost:8080';

function UserList() {

    const [dataTable,setDataTable] = useState(data);

    const getUser = async () => {
        try {
            const response = await axios.get(`${API_URL}/users`);
            console.log(response);
            const userDatas = response.data;
            console.log(`users `, userDatas);
            setDataTable(userDatas);

        } catch (errors) {
            console.error(errors);
        }
    };
    const putUser = async () => {
        try {
            const response = await axios.put(`${API_URL}/users/users/:id`);
            console.log(response);
            const userDatas = response.data;
            console.log(`users `, userDatas);
            setDataTable(userDatas);

        } catch (errors) {
            console.error(errors);
        }
    };

    useEffect(() => {
        getUser();
    }, []);

    return<>
        <div>
            <Search
                addonBefore="Users List"
                placeholder="input search text"
                allowClear
                style={{ width: 304 }}
            />
            <Button type="primary" >
                Add+
            </Button>

        </div>
         <Table columns={columns} dataSource={dataTable}   rowKey="id" />;
    </>;

}
export default UserList;