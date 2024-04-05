import {Button, Form, Input} from "antd";
import Search from "antd/es/input/Search";
import React, {useEffect, useState} from 'react';
import { Space, Table } from 'antd';
import axios from "axios";
import moment from 'moment';
import { Image } from 'antd';
import {useNavigate} from "react-router-dom";


const data = [

];



// ...
//เรียกApi
const API_URL = 'http://localhost:8080';

function UserList() {

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
            render:  (text, record, index) => (

                <Space size="middle">
                    <Button onClick={() => edit(record.id)}> Edit</Button>
                    <Button onClick={() => {deleteUser(record.id)}} type="primary">Delete</Button>
                </Space>

            ),
        }

    ];

    const [dataTable,setDataTable] = useState(data);
    const navigate =useNavigate();


    // edit function to navigate
    function edit(id) {
        console.log(id);
        navigate(`/UserManagemnet?id=${id}`);
    }

    function addUser(){
        navigate('/UserManagemnet');
    }

    function deleteUser(id){
        console.log(id);
        const deleteData= axios.delete(`${API_URL}/users/users/${id}`);
        getUser();

  }

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
            <Button type="primary" onClick={() => addUser()}>
                Add+
            </Button>

        </div>
        <Table columns={columns} dataSource={dataTable}   rowKey="id" />;
    </>;
}
export default UserList;