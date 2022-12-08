import React from 'react';

import './PlaceItem.css'
import Card from '../../shared/components/UIElements/Card'

const PlaceItem = props => {
    return <li className='place-item'>
        <Card className='place-item__content'>
            <div className='place-item__image'>
                <img src={props.image} alt={props.title} />
            </div>
            <div className='place-item__info'>
                <h2>{props.title}</h2>
                <h2>{props.address}</h2>
                <h2>{props.description}</h2>
            </div>
            <div className='place-item__actions'>
                <button>View on map</button>
                <button>Edit</button>
                <button>Delete</button>
            </div>
        </Card>
    </li>
}

export default PlaceItem;  