import React from 'react';
import Input from '../../shared/components/FormElements/Input';

import './PlaceForm.css'
import Button from '../../shared/components/FormElements/Button';
import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from '../../shared/util/validators';
import { useForm } from '../../shared/hooks/form-hook';

const NewPlace = () => {
    const [formState, inputHandler] = useForm({
        title:{
            value:'',
            isValid:false
        },
        description:{
            value:'',
            isValid:false
        },
        address:{
            value:'',
            isValid:false
        }
    });
    

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