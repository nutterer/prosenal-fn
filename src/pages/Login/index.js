import React, { useState } from 'react';
import { 
    Grid, 
    GridItem,
    Center,
    Box,
    Image
} from '@chakra-ui/react'
// import { Button, Form, Input, Checkbox  } from 'antd'

// import { useForm } from 'react-hook-form';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
// import { useAuth } from '../../hooks'

import Logo from '../../psLogo.png'
import { LoginForm } from '../../components'

import allUser from '../../mock/user.json'

export const Login = () => {
  const adminUser = {
    username: "admin",
    password: "123456"
  }
 
  const [ user, setUser ] = useState({ username:"", password:"" })
  const [ error, setError ] = useState("")
  const navigate = useNavigate()

  const Login = async(detail) => {
    const getUser = allUser.map(rs => {return rs}).find(rs => rs.username === detail.username)
    console.log(getUser);
    console.log(detail);
    if (detail.username === adminUser.username && detail.password === adminUser.password ){
      console.log('Logged in');
      setUser({
        username:"user-user"+" "+detail.username
      })
      console.log(user);
      navigate('/')
    }else{
      console.log("Fail");
    }
  }

  
    // const { login } = useAuth()
    // const onFinish = async (values) => {
    //     const { username, password } = values
    //     login(username , password)
    //     console.log('Success:', values);
    //   };
    
    //   const onFinishFailed = (errorInfo) => {
    //     console.log('Failed:', errorInfo);
    //   };
  return (
      <>

        <Grid padding={20} h='100vh' alignItems='center'  templateColumns='repeat(2,1fr)' gap={4}>
            <GridItem >
                <Center>
                    <Image src={Logo} objectFit='fill' alt="Logo" />
                </Center>
            </GridItem>
            <GridItem >
                <Center>
                    <Box>
                      <LoginForm Login={Login} error={error}/>
                        {/* <Form
                            name="login"
                            labelCol={{ span: 8 }}
                            wrapperCol={{ span: 16 }}
                            initialValues={{ remember: true }}
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                            autoComplete="off"
                            noValidate
                        >
                            
                            <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

                            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                                <Button type="primary" htmlType="submit" >
                                    Submit
                                </Button>
                            </Form.Item> 
                           
                        </Form> */}
                    </Box>
                </Center>
            </GridItem>
        </Grid>
      </>
  );
}

export default Login;
