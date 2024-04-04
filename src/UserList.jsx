import {Button, Form, Input} from "antd";
import Search from "antd/es/input/Search";
import React from 'react';
import { Space, Table, Tag } from 'antd';
const columns = [
    {
        title: 'Profile picture',
        dataIndex: 'ProfilePicture',
        key: 'ProfilePicture',

    },
    {
        title: 'First name',
        dataIndex: 'Firstname',
        key: 'Firstname',
    },
    {
        title: 'Last Name',
        dataIndex: 'Lastname',
        key: 'Lastname',
    },
    {
        title: 'Gender',
        dataIndex: 'Gender',
        key: 'Gender',
    },
    {
        title: 'Birthday',
        dataIndex: 'Birthday',
        key: 'Birthday',
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
    {
        key: '1',
        ProfilePicture: 'A',
        Firstname: 'bbb',
        Lastname: 'New York ',
        Gender: 'male',
        Birthday: '19 may 1995'
    },
    {
        key: '2',
        ProfilePicture: 'B',
        Firstname: 'cccc',
        Lastname: 'city ',
        Gender: 'male',
        Birthday: '25 Oct 1995'
    },
    {
        key: '3',
        ProfilePicture: 'B',
        Firstname: 'cccc',
        Lastname: 'city ',
        Gender: 'male',
        Birthday: '25 Oct 1995'
    },
    {
        key: '4',
        ProfilePicture: 'B',
        Firstname: 'cccc',
        Lastname: 'city ',
        Gender: 'male',
        Birthday: '25 Oct 1995'
    },
    {
        key: '5',
        ProfilePicture: 'B',
        Firstname: 'cccc',
        Lastname: 'city ',
        Gender: 'male',
        Birthday: '25 Oct 1995'
    },
    {
        key: '6',
        ProfilePicture: 'B',
        Firstname: 'cccc',
        Lastname: 'city ',
        Gender: 'male',
        Birthday: '25 Oct 1995'
    },
    {
        key: '7',
        ProfilePicture: 'B',
        Firstname: 'cccc',
        Lastname: 'city ',
        Gender: 'male',
        Birthday: '25 Oct 1995'
    },
    {
        key: '8',
        ProfilePicture: 'B',
        Firstname: 'cccc',
        Lastname: 'city ',
        Gender: 'male',
        Birthday: '25 Oct 1995'
    },{
        key: '9',
        ProfilePicture: 'B',
        Firstname: 'cccc',
        Lastname: 'city ',
        Gender: 'male',
        Birthday: '25 Oct 1995'
    },{
        key: '10',
        ProfilePicture: 'B',
        Firstname: 'cccc',
        Lastname: 'city ',
        Gender: 'male',
        Birthday: '25 Oct 1995'
    },{
        key: '11',
        ProfilePicture: 'B',
        Firstname: 'cccc',
        Lastname: 'city ',
        Gender: 'male',
        Birthday: '25 Oct 1995'
    },

];


function UserList() {

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
         <Table columns={columns} dataSource={data} />;

    </>;

}
export default UserList;