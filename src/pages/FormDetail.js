import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Button } from 'semantic-ui-react'

const FormDetail = () =>{
    return(
        <div style={{margin: '5%', marginLeft: '5%'}}>
            <Card.Group>
                    <Card>
                        <Card.Content>
                            To create form
                        </Card.Content>
                        <Card.Content extra>
                            <Button as={Link} to={'/form/createform'} color={'teal'}>
                                Click Here!
                            </Button>
                        </Card.Content>
                    </Card>
                    <Card>
                        <Card.Content>
                            To delete Form
                        </Card.Content>
                        <Card.Content extra>
                            <Button as={Link} to={'/form/deleteform'} color={'teal'}>
                                Click Here!
                            </Button>
                        </Card.Content>
                    </Card>
                </Card.Group>
        </div>
    )
}

export default FormDetail