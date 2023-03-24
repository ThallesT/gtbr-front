import {Badge, Button, Card, Col, Container, FloatingLabel, Form, InputGroup, Row} from "react-bootstrap";
import {useState} from "react";
import axios from "axios";

const badgeStatusColor = {
    active: 'success',
    suspended: 'warning',
    banned: 'danger',
    setup: 'info'
}

let userList = [
    {
        "id": "bf5ee70a-23ea-46d4-9037-fb6276a69ac9",
        "name": "Kima",
        "discordTag": "discord#tag",
        "status": {
            "id": "ACTIVE"
        },
        "role": []
    },
    {
        "id": "f5f3753f-ec57-4c32-baad-c111934e6f54",
        "name": "Tata",
        "discordTag": "discord#tag",
        "status": {
            "id": "SUSPENDED"
        },
        "role": []
    },
    {
        "id": "4722ecd9-cd2c-46f7-84f0-faa1021469ac",
        "name": "Luquinhas",
        "discordTag": "discord#tag",
        "status": {
            "id": "BANNED"
        },
        "role": []
    },
    {
        "id": "a9a203c5-641d-4845-9321-6ace6e8ca07e",
        "name": "Thalles",
        "discordTag": "discord#tag",
        "status": {
            "id": "SETUP"
        },
        "role": []
    }
]

export const UserDash = () => {

    const fetchUsers = () => {
        axios.get(`http://localhost:8080/user`)
            .then(response => {
                userList = response.data
                setUsers(response.data)
            })
    }

    const [users, setUsers] = useState(fetchUsers)

    const setLogin = () => {

    }

    const setDiscord = () => {

    }

    const sendUser = () => {

    }

    const deleteUser = () => {

    }

    return(
        <Container className={'mt-4'}>
            <Row>
                <Col lg={'6'}>
                    <Card className={'dark-mode-card'}>
                        <Card.Header>
                            <h4 className={'text-center text-white'}>Create User</h4>
                        </Card.Header>
                        <Card.Body>
                            <Container>
                                <Row className={'justify-content-center'}>
                                    <Col lg={12}>
                                        <FloatingLabel label={'Login'}>
                                            <Form.Control type={"text"} className={'mb-2'} placeholder={'user'}
                                                          onChange={setLogin}/>
                                        </FloatingLabel>
                                    </Col>
                                    <Col lg={12}>
                                        <FloatingLabel label={'Discord#tag'}>
                                            <Form.Control type={'text'} className={'mb-2'} placeholder={'discord'}
                                                          onChange={setDiscord}/>
                                        </FloatingLabel>
                                    </Col>
                                    <Col lg={12}>
                                        <Button variant={'outline-light'} className={'col-12 align-content-center mb-4'}
                                                size={'lg'} onClick={sendUser}>{`Create user`}</Button>
                                    </Col>

                                </Row>
                            </Container>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={'6'}>
                    <Card className={'dark-mode-card'}>
                        <Card.Header>
                            <h4 className={'text-center text-white'}>User List</h4>
                        </Card.Header>
                        <Card.Body>
                            <Container>
                                <Row>
                                    {userList.map(user => {
                                        return(
                                            <Col lg={12} className={'mb-2'}>
                                                <Card className={'super-dark-mode-card'}>
                                                    <Card.Body>
                                                        <Row>
                                                            <Col lg={10}>
                                                                <strong className={'text-white'}>{user.name}</strong>&nbsp;
                                                                <small className={'text-secondary'}>{user.discordTag}</small>
                                                                <br/>
                                                                <Badge bg={badgeStatusColor[user.status.id.toLowerCase()]}>
                                                                    {user.status.id}
                                                                </Badge>
                                                            </Col>
                                                            <Col lg={2} className={'justify-content-end'}>
                                                                <Button id={user.id} onClick={deleteUser} variant={'danger'}>
                                                                    <span className="material-symbols-rounded">delete</span>
                                                                </Button>
                                                            </Col>
                                                        </Row>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                        )
                                    })}
                                </Row>
                            </Container>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}