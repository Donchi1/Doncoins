import React from 'react'
//import authProvider from './authProvider'

import {
  Admin,
  Resource,
  SelectInput,
  Filter,
  ReferenceInput,
  List,
  Edit,
  SimpleForm,
  TextInput,
  TextField,
  EmailField,
  Datagrid,
  EditButton,
  ImageField,
  DateField,
  Create,
  DateInput,
  BooleanInput,
  BooleanField,
  SearchInput,
  SimpleList,
  Sidebar,
  Layout,
} from 'react-admin'
import { makeStyles } from '@material-ui/core/styles'
import UserIcon from '@material-ui/icons/Group'
import PaymentsIcon from '@material-ui/icons/AddShoppingCart'
import WithdrawalsIcon from '@material-ui/icons/Atm'
import ContactIcon from '@material-ui/icons/TextFields'
import LetterIcon from '@material-ui/icons/Label'
import { FirebaseDataProvider } from 'react-admin-firebase'
import { createHashHistory } from 'history'
import { useMediaQuery } from '@material-ui/core'
import authProvider from './authProvider'

const UserFilter = (props) => (
  <Filter {...props}>
    <SearchInput source="q" alwaysOn />
  </Filter>
)
const PaymentFilter = (props) => (
  <Filter {...props}>
    <SearchInput source="q" alwaysOn />
  </Filter>
)
const WithdrawalFilter = (props) => (
  <Filter {...props}>
    <SearchInput source="q" alwaysOn />
  </Filter>
)
const LetterFilter = (props) => (
  <Filter {...props}>
    <SearchInput source="q" alwaysOn />
  </Filter>
)
const ContactFilter = (props) => (
  <Filter {...props}>
    <SearchInput source="q" alwaysOn />
  </Filter>
)

const useStyles = makeStyles({
  button: {
    fontWeight: 'bold',
    color: 'orange',
    backgroundColor: 'red',
  },
  tr: {
    backgroundColor: '#ccc',
    color: 'white',
  },
})
const MyEditButton = (props) => {
  const classes = useStyles()
  return <EditButton className={classes.button} {...props} />
}

const UserList = (props) => {
  const isSmall = useMediaQuery((theme) => theme.breakpoints.down('sm'))
  const classes = useStyles()

  return (
    <List filters={<UserFilter />} {...props} className={classes.tr}>
      {isSmall ? (
        <SimpleList
          key={(records) => records.id}
          primaryText={(records) => records.title}
          secondaryText={(records) => records.lastname}
          tertiaryText={(records) => records.email}
          linkType="edit"
        />
      ) : (
        <Datagrid rowClick="edit">
          <TextField source="uid" color="primary" />
          <TextField source="firstname" color="primary" />
          <TextField source="lastname" color="primary" />
          <EmailField source="email" color="primary" />
          <DateField source="age" color="primary" />
          <TextField source="totalBalance" color="primary" />
          <TextField source="initialDeposite" color="primary" />
          <TextField source="gender" color="primary" />
          <TextField source="state" color="primary" />
          <TextField source="country" color="primary" />
          <TextField source="bonus" color="primary" />
          <TextField source="initial" color="primary" />
          <TextField source="phone" color="primary" />
          <BooleanField source="disableWithdrawal" color="primary" />
          <MyEditButton />
        </Datagrid>
      )}
    </List>
  )
}
const UserPaymentList = (props) => {
  const isSmall = useMediaQuery((theme) => theme.breakpoints.down('sm'))
  const classes = useStyles()
  return (
    <List filters={<PaymentFilter />} {...props} className={classes.tr}>
      {isSmall ? (
        <SimpleList
          key={(records) => records.uid}
          primaryText={(records) => records.firstname}
          secondaryText={(records) => records.lastname}
          tertiaryText={(records) => records.paymentAmount}
          linkType="edit"
        />
      ) : (
        <Datagrid rowClick="edit">
          <TextField source="id" color="primary" />
          <TextField source="firstname" color="primary" />
          <TextField source="lastname" color="primary" />

          <DateField source="date" showTime color="primary" />
          <TextField source="paymentAmount" color="primary" />
          <ImageField source="paymentProve" color="primary" />
          <MyEditButton />
        </Datagrid>
      )}
    </List>
  )
}
const UserWithdrawalList = (props) => {
  const isSmall = useMediaQuery((theme) => theme.breakpoints.down('sm'))
  const classes = useStyles()
  return (
    <List filters={<WithdrawalFilter />} {...props} className={classes.tr}>
      {isSmall ? (
        <SimpleList
          key={(records) => records.uid}
          primaryText={(records) => records.firstname}
          secondaryText={(records) => records.withdrawalAmount}
          tertiaryText={(records) => records.wallet}
          linkType="edit"
        />
      ) : (
        <Datagrid rowClick="edit">
          <TextField source="id" color="primary" />
          <TextField source="firstname" color="primary" />
          <TextField source="lastname" color="primary" />

          <DateField source="date" showTime color="primary" />
          <TextField source="withdrawalAmount" color="primary" />
          <TextField source="wallet" color="primary" />
          <MyEditButton />
        </Datagrid>
      )}
    </List>
  )
}
const LetterList = (props) => {
  const isSmall = useMediaQuery((theme) => theme.breakpoints.down('sm'))
  const classes = useStyles()
  return (
    <List filters={<LetterFilter />} {...props} className={classes.tr}>
      {isSmall ? (
        <SimpleList
          key={(records) => records.id}
          primaryText={(records) => records.newsLetter}
          linkType="edit"
        />
      ) : (
        <Datagrid rowClick="edit">
          <TextField source="id" color="primary" />
          <TextField source="newsLetter" color="primary" />
          <MyEditButton />
        </Datagrid>
      )}
    </List>
  )
}
const ContactList = (props) => {
  const isSmall = useMediaQuery((theme) => theme.breakpoints.down('sm'))
  const classes = useStyles()
  return (
    <List filters={<ContactFilter />} {...props} className={classes.tr}>
      {isSmall ? (
        <SimpleList
          key={(records) => records.id}
          primaryText={(records) => records.contactName}
          secondaryText={(records) => records.contactEmail}
          tertiaryText={(records) => records.message}
          linkType="edit"
        />
      ) : (
        <Datagrid rowClick="edit">
          <TextField source="id" color="primary" />
          <TextField source="contactName" color="primary" />
          <TextField source="contactEmail" color="primary" />
          <TextField source="message" color="primary" />

          <MyEditButton />
        </Datagrid>
      )}
    </List>
  )
}

const UserEdit = (props) => (
  <Edit {...props} title="Edit UserInfo">
    <SimpleForm>
      <TextInput disabled source="id" />
      <ReferenceInput source="id" reference="users">
        <SelectInput optionText="firstname" />
      </ReferenceInput>
      <TextInput source="firstname" />
      <TextInput source="lastname" />
      <TextInput source="email" />
      <TextInput source="age" />
      <TextInput source="totalBalance" />
      <TextInput source="initialDeposite" />
      <TextInput source="gender" />
      <TextInput source="state" />
      <TextInput source="country" />
      <TextInput source="bonus" />
      <TextInput source="initial" />
      <TextInput source="phone" />
      <BooleanInput source="disableWithdrawal" />
    </SimpleForm>
  </Edit>
)
const UserEditPayments = (props) => (
  <Edit {...props} title="Edit Payments">
    <SimpleForm>
      <TextInput disabled source="uid" />
      <ReferenceInput source="id" reference="payments">
        <SelectInput optionText="firstname" />
      </ReferenceInput>
      <TextInput source="firstname" />
      <TextInput source="lastname" />
      <TextInput source="email" />
      <TextInput source="date" />
      <TextInput source="paymentAmount" />
      <TextInput source="paymentProve" />
    </SimpleForm>
  </Edit>
)
const UserEditWithdrawals = (props) => (
  <Edit {...props} title="Edit Withdrawal">
    <SimpleForm>
      <TextInput disabled source="uid" />
      <ReferenceInput source="id" reference="withdrawals">
        <SelectInput optionText="firstname" />
      </ReferenceInput>
      <TextInput source="firstname" />
      <TextInput source="lastname" />
      <TextInput source="email" />
      <TextInput source="date" />
      <TextInput source="withdrawalAmount" />
      <TextInput source="wallet" />
      <TextInput multiline source="body" />
    </SimpleForm>
  </Edit>
)
const UserEditLetter = (props) => (
  <Edit {...props} title="Edit Letter">
    <SimpleForm>
      <TextInput disabled source="uid" />
      <ReferenceInput source="id" reference="newsletters">
        <SelectInput optionText="newsletter" />
      </ReferenceInput>

      <TextInput source="newsLetter" />
    </SimpleForm>
  </Edit>
)
const UserEditContacts = (props) => (
  <Edit {...props} title="Edit Contact ">
    <SimpleForm>
      <TextInput disabled source="uid" />
      <ReferenceInput source="id" reference="Contacts">
        <SelectInput optionText="contactName" />
      </ReferenceInput>
      <TextInput source="contactName" />

      <TextInput source="contactEmail" />
      <TextInput source="message" />
    </SimpleForm>
  </Edit>
)
const UserCreate = (props) => (
  <Create title="create user" {...props}>
    <SimpleForm>
      <ReferenceInput source="uid" reference="users">
        <SelectInput optionText="firstname" />
      </ReferenceInput>
      <TextInput source="firstname" />
      <TextInput source="lastname" />
      <TextInput source="email" />
      <DateInput source="age" />
      <TextInput source="totalBalance" />
      <TextInput source="initialDeposite" />
      <TextInput source="gender" />
      <TextInput source="state" />
      <TextInput source="country" />
      <TextInput source="bonus" />
      <TextInput source="initial" />
      <TextInput source="phone" />
    </SimpleForm>
  </Create>
)

const UserCreatePayments = (props) => (
  <Create title="create payment" {...props}>
    <SimpleForm>
      <ReferenceInput source="uid" reference="payments">
        <SelectInput optionText="firstname" />
      </ReferenceInput>
      <TextInput source="firstname" />
      <TextInput source="lastname" />
      <DateInput source="date" />
      <TextInput source="paymentAmount" />
      <TextInput source="paymentProve" />

      <TextInput multiline source="body" />
    </SimpleForm>
  </Create>
)
const UserCreateWithdrawals = (props) => (
  <Create title="Create Withdrawal" {...props}>
    <SimpleForm>
      <ReferenceInput source="id" reference="withdrawals">
        <SelectInput optionText="firstname" />
      </ReferenceInput>
      <TextInput source="firstname" />
      <TextInput source="lastname" />
      <TextInput source="email" />
      <DateInput source="date" />
      <TextInput source="withdrawalAmount" />
      <TextInput source="wallet" />

      <TextInput multiline source="body" />
    </SimpleForm>
  </Create>
)
const UserCreateletter = (props) => (
  <Create title="Create letter" {...props}>
    <SimpleForm>
      <ReferenceInput source="id" reference="newsletters">
        <SelectInput optionText="email" />
      </ReferenceInput>

      <TextInput source="newsLetter" />
    </SimpleForm>
  </Create>
)
const UserCreateContacts = (props) => (
  <Create title="Create Contacts" {...props}>
    <SimpleForm>
      <ReferenceInput source="id" reference="contacts">
        <SelectInput optionText="contactName" />
      </ReferenceInput>
      <TextInput source="contactName" />
      <TextInput source="contactEmail" />
      <TextInput source="message" />
    </SimpleForm>
  </Create>
)

const MySideBar = (props) => {
  const useSidebarStyles = makeStyles({
    drawerPaper: {
      backgroundColor: 'orange',
    },
  })
  const classes = useSidebarStyles()
  return <Sidebar classes={classes} {...props} />
}
const myLayOut = (props) => <Layout {...props} sidebar={MySideBar} />
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER,
  appId: process.env.REACT_APP_FIREBASE_APP,
  measurementId: process.env.REACT_APP_FIREBASE_MESUREMENT,
}

export const dataProvider = FirebaseDataProvider(firebaseConfig)
//export const authProvider = FirebaseAuthProvider(firebaseConfig)

export const history = createHashHistory()

const AdminPage = () => {
  return (
    <Admin
      dataProvider={dataProvider}
      title={'Welcome to cryptogenus Admin'}
      authProvider={authProvider}
      history={history}
      layout={myLayOut}
    >
      <Resource
        name="users"
        list={UserList}
        edit={UserEdit}
        create={UserCreate}
        icon={UserIcon}
      />
      <Resource
        name="payments"
        list={UserPaymentList}
        edit={UserEditPayments}
        create={UserCreatePayments}
        icon={PaymentsIcon}
      />
      <Resource
        name="withdrawals"
        list={UserWithdrawalList}
        edit={UserEditWithdrawals}
        create={UserCreateWithdrawals}
        icon={WithdrawalsIcon}
      />
      <Resource
        name="contacts"
        list={ContactList}
        edit={UserEditContacts}
        create={UserCreateContacts}
        icon={ContactIcon}
      />
      <Resource
        name="newsletters"
        list={LetterList}
        edit={UserEditLetter}
        create={UserCreateletter}
        icon={LetterIcon}
      />
    </Admin>
  )
}

export default AdminPage
