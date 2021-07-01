import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu }from 'semantic-ui-react'

import { AuthContext } from '../context/auth'

const Navbar = () =>{
    const { user, logout } = useContext(AuthContext)

    const handlelog = () =>{
        console.log()
        logout()
    }

    return(
        <>
        {
            user ? (
                <Menu size="massive">
                    <Menu.Item 
                        name="home"
                        as={NavLink}
                        exact
                        to="/"
                    />
                    <Menu.Item 
                        name="form"
                        as={NavLink}
                        to="/form"
                    />
                    <Menu.Item
                        name="logout"
                        onClick={handlelog}
                        position="right" 
                        as={Link}
                        to="/"
                    />
                </Menu>
            ) : (
                <Menu size="massive">
                    <Menu.Item 
                        name="home"
                        as={NavLink}
                        exact
                        to="/"
                    />
                    <Menu.Item 
                        name="form"
                        as={NavLink}
                        to="/form"
                    />
                    <Menu.Item
                        name="login"
                        position="right" 
                        as={NavLink}
                        to="/login"
                    />
                </Menu>
            )
        }
        </>
    )
}

export default Navbar