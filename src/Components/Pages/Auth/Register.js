import React, { useRef } from 'react';
import {Card,Form, Button,Container} from 'react-bootstrap';
import {useAuth,AuthProvider} from './AuthContext';
const Register = () =>{
    const emailRef=useRef()
    const passwordRef=useRef()
    const passwordConfirmRef=useRef()
    const {signup} = useAuth()

    function handleSubmit(e){
        e.preventDefault()
        signup(emailRef.current.value,passwordRef.current.value)
    }

    return(
    <AuthProvider>
    <Container className="d-flex align-items-center justify-content-center" style={{minHeight:"100vh"}}>
    <div className="w-100" style={{maxWidth:'400px'}}>
    <div>
        <Card>
            <Card.Body>
                <h2 className="text-center mb-4">Sign up</h2>
                <Form>
                    <Form.Group id="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" ref={emailRef}/>
                    </Form.Group>
                    <Form.Group id="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" ref={passwordRef}/>
                    </Form.Group>
                    <Form.Group id="password-confirm">
                        <Form.Label>Password Confirmation</Form.Label>
                        <Form.Control type="passwordd" ref={passwordConfirmRef}/>
                    </Form.Group>
                    <Button className="w-100 mt-3" type="submit">Sign Up</Button>
                </Form>

            </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2">
            Already have an account? Log in</div>            
        </div>
    </div>
    </Container>
    </AuthProvider>
    )}
export default Register;