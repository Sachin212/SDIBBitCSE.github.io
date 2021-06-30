import React from 'react'
import { Button, Card } from 'semantic-ui-react'

const Home = () =>{
    return(
        <div style={{margin: '5%', marginLeft: '5%'}}>
            <Card.Group>
                <Card>
                    <Card.Content>
                        To see All the Data Click Below
                    </Card.Content>
                    <Card.Content extra>
                        <Button color={'teal'}>
                            Click Here!
                        </Button>
                    </Card.Content>
                </Card>
                <Card>
                    <Card.Content>
                        To create/delete Form
                    </Card.Content>
                    <Card.Content extra>
                        <Button color={'teal'}>
                            Click Here!
                        </Button>
                    </Card.Content>
                </Card>
            </Card.Group>
        </div>
    )
}

export default Home