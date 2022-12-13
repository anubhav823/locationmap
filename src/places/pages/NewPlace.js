import React, { useCallback, useReducer } from 'react';
import Input from '../../shared/components/FormElements/Input';

import './NewPlace.css'
import Button from '../../shared/components/FormElements/Button';
import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from '../../shared/util/validators';

const formReducer = (state, action) => {
    switch (action.type) {
        case 'INPUT_CHANGE':
            let formIsValid = true;
            for (const inputId in state.inputs) {
                if (inputId === action.inputId) {
                    formIsValid = formIsValid && action.isValid
                } else {
                    formIsValid = formIsValid && state.inputs[inputId].isValid;
                }
            }
            return {
                ...state,
                inputs: {
                    ...state.inputs,
                    [action.inputId]: { value: action.value, isValid: action.isValid }
                },
                isValid: formIsValid
            }
        default:
            return state
    }
};

const NewPlace = () => {
    const [formState, dispatch] = useReducer(formReducer, {
        inputs: {
            title: {
                value: '',
                isValid: false
            },
            description: {
                value: '',
                isValid: false
            }
        },
        isValid: false
    });

    const inputHandler = useCallback((id, value, isValid) => {
        dispatch({
            type: 'INPUT_CHANGE',
            value: value,
            isValid: isValid,
            inputId: id
        });
    }, [dispatch]);

    const placeSubmitHandler = event => {
        event.preventDefault();
        console.log(formState.inputs);
    }

    return (
        <form className='place-form' onSubmit={placeSubmitHandler}>
            <Input element='input'
                id='title'
                label='Title'
                validators={[VALIDATOR_REQUIRE()]}
                errorText="Please enter valid input"
                onInput={inputHandler} />

            <Input element='textarea'
                id='description'
                label='Description'
                validators={[VALIDATOR_MINLENGTH(5)]}
                errorText="Please enter valid description"
                onInput={inputHandler} />

            <Input element='input'
                id='address'
                label='Address'
                validators={[VALIDATOR_REQUIRE()]}
                errorText="Please enter valid address"
                onInput={inputHandler} />

            <Button type='submit' disabled={!formState.isValid} >Add Place</Button>
        </form>
    )
}

export default NewPlace;  