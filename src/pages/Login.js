import React, { useState, useContext } from 'react'
import { Form, Button } from 'semantic-ui-react'
import { useForm } from '../utils/hooks'
import gql from 'graphql-tag'
import { useMutation } from '@apollo/react-hooks'

import { AuthContext } from '../context/auth'

function Home(props){
    const context = useContext(AuthContext)

    const [errors, setErrors] = useState({})

    const {onChange, onSubmit, value} = useForm(loginUserCallback,{
        username:'',
        password:''
    })

    const [loginUser, {loading}] = useMutation(LOGIN_USER, {
        update(_, {data: { login: userData }}){
            context.login(userData)
            props.history.push('/home')
        },
        onError(err){
            console.log(err.graphQLErrors[0])
            setErrors(err.graphQLErrors[0].extension.exception.errors)
        },
        variables: value
    })

    function loginUserCallback(){
        loginUser()
    }

    return(
        <>
        <div style={{marginTop: '2%', marginLeft: '10%'}}>
        <Form onSubmit={onSubmit} noValidate className={loading ? "loading": ""}>
            <Form.Group unstackable widths={2}>
                <Form.Input
                    label="Username"
                    placeholder="Username"
                    name="username"
                    type="text"
                    value={value.username}
                    onChange={onChange}
                    
                />
            </Form.Group>
            <Form.Group unstackable widths={2}>
                <Form.Input
                    label="Password"
                    placeholder="Password"
                    name="password"
                    type="password"
                    value={value.password}
                    onChange={onChange}
                />
            </Form.Group>
            <div style={{marginTop: '20px'}}>
            <Button type="submit" primary>
                Login
            </Button>
            </div>
        </Form>
        </div>
        {
            Object.keys(errors).length > 0 && (
                <div className="ui error message">
                    <ul className="list">
                        {Object.values(errors).map(value =>(
                            <li key={value}>{value}</li>
                        ))}
                    </ul>
                </div>
            )
        }
        </>
    )
}

const LOGIN_USER = gql`
    mutation login(
        $username: String!
        $password: String!
    ){
        login(
            username: $username
            password: $password
        ){
            id email username createdAt token
        }
    }
`

export default Home