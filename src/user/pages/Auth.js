import React, { useState, useContext } from 'react';
import Button from '../../shared/components/FormElements/Button';
import Input from '../../shared/components/FormElements/Input';
import Card from '../../shared/components/UIElements/Card';
import { useForm } from '../../shared/hooks/form-hook';
import { VALIDATOR_EMAIL, VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from '../../shared/util/validators';
import { authContext } from '../../shared/context/auth-context';
import './Auth.css'

const Auth = () => {
    const auth = useContext(authContext);
    const [isLoginMode, setIsLoginMode] = useState(false);
    const [formState, inputHandler, setFormData] = useForm({
        email: {
            value: '',
            isValid: false
        },
        password: {
            value: '',
            isValid: false
        }
    })

    const switchModeHandler = () => {
        if (!isLoginMode) {
            setFormData({
                ...formState.inputs,
                name: undefined
            }, formState.inputs.email.isValid && formState.inputs.password.isValid);
        } else {
            setFormData({
                ...formState.inputs,
                name: {
                    value: '',
                    isValid: false
                }
            }, false)
        }
        setIsLoginMode(prevMode => !prevMode)
    }

    const authSubmitHandler = event => {
        event.preventDefault();
        console.log('Authenticated');
        auth.login();
    }
    return (
        <Card className='authentication'>
            <h2>Login req</h2>
            <hr />
            <form onSubmit={authSubmitHandler}>
                {!isLoginMode && <Input
                    element='input'
                    id='name'
                    type='text'
                    label='Name'
                    validators={[VALIDATOR_REQUIRE()]}
                    errorText='Please enter a valid name'
                    onInput={inputHandler} />}
                <Input
                    element='input'
                    id='email'
                    type='email'
                    label='Email'
                    validators={[VALIDATOR_EMAIL()]}
                    errorText='Please enter a valid Email'
                    onInput={inputHandler} />

                <Input
                    element='input'
                    id='password'
                    type='password'
                    label='Password'
                    validators={[VALIDATOR_MINLENGTH(5)]}
                    errorText='Please enter a valid password'
                    onInput={inputHandler} />
                {!isLoginMode && <Input
                    element='input'
                    id='password_confirm'
                    type='password'
                    label='Re Enter Password'
                    validators={[VALIDATOR_MINLENGTH(5)]}
                    errorText='Passwords do not match'
                    onInput={inputHandler} />}
                <Button type='submit' disabled={!formState.isValid}>
                    {isLoginMode ? 'Login' : 'Sign Up'}</Button>
            </form>
            <Button inverse onClick={switchModeHandler}>Switch To {isLoginMode ? 'Sign Up' : 'Login'}</Button>
        </Card>
    )
}

export default Auth;