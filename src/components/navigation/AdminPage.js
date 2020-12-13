import React, { useState } from 'react'

import {
  Admin,
  Resource,
  SelectInput,
  Filter,
  ReferenceInput,
  ListGuesser,
  List,
  Edit,
  SimpleForm,
  TextInput,
  TextField,
  EmailField,
  Datagrid,
} from 'react-admin'
import { makeStyles } from '@material-ui/core/styles'
import UserIcon from '@material-ui/icons/Group'
import {
  FirebaseAuthProvider,
  FirebaseDataProvider,
  FirebaseRealTimeSaga,
} from 'react-admin-firebase'
import { createHashHistory } from 'history'

const UserFilter = (props) => (
  <Filter {...props}>
    <TextInput label="Search" source="q" alwaysOn />

    <ReferenceInput>
      <SelectInput optionText="firstname" />
    </ReferenceInput>
  </Filter>
)

const UserList = (props) => (
  <List filters={<UserFilter />} {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="firstname" />
      <TextField source="lastname" />
      <EmailField source="email" />
      <TextField source="password" />
      <TextField source="date" />
      <TextField source="country" />
      <TextField source="state" />
      <TextField source="gender" />
      <TextField source="phone" />
      <TextField source="amount" />
      <TextField source="wallet" />
    </Datagrid>
  </List>
)

const UserEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <ReferenceInput source="uid" reference="users">
        <SelectInput optionText="firstname" />
      </ReferenceInput>
      <TextInput source="firstname" />
      <TextInput source="lastname" />
      <TextInput source="email" />
      <TextInput source="date" />
      <TextInput source="tradeableBalance" />
      <TextInput source="phone" />
      <TextInput multiline source="body" />
    </SimpleForm>
  </Edit>
)
const UserCreate = (props) => (
  <Edit
    title={({ record }) => {
      return <span>User {record ? `"${record.firstname}"` : ''}</span>
    }}
    {...props}
  >
    <SimpleForm>
      <ReferenceInput source="uid" reference="users">
        <SelectInput optionText="firstname" />
      </ReferenceInput>
      <TextInput source="firstname" />
      <TextInput source="lastname" />
      <TextInput source="email" />
      <TextInput source="date" />
      <TextInput source="tradeableBalance" />
      <TextInput source="phone" />
      <TextInput multiline source="body" />
    </SimpleForm>
  </Edit>
)

const firebaseConfig = {
  apiKey: 'AIzaSyBexOgzIkfnsidTTFwvFTIBDoyfsw0QkSs',
  authDomain: 'donchicoin.firebaseapp.com',
  databaseURL: 'https://donchicoin.firebaseio.com',
  projectId: 'donchicoin',
  storageBucket: 'donchicoin.appspot.com',
  messagingSenderId: '1066916503780',
  appId: '1:1066916503780:web:4ce68ec0aa136cd01eccf1',
  measurementId: 'G-VNRVZ8LZKG',
}

const dataProvider = FirebaseDataProvider(firebaseConfig)

const AdminPage = () => (
  <Admin
    dataProvider={dataProvider}
    title={'Welcome to cryptogenus Admin'}
    authProvider={FirebaseAuthProvider}
  >
    <Resource
      name="users"
      list={UserList}
      edit={UserEdit}
      create={UserCreate}
      icon={UserIcon}
    />
  </Admin>
)

export default AdminPage
