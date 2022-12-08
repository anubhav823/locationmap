import React from 'react';

import PlaceList from '../components/PlaceList'
import {useParams} from 'react-router-dom'

const DUMMY_PLACES = [
    {
        id: 'p1',
        title: 'E1',
        description: 'Stuff',
        imageURL: 'https://picsum.photos/200/300?grayscale',
        address: 'Address',
        location: {
            latitude: 123,
            longitude: 123
        },
        creator:'u1'
    },
    {
        id: 'p2',
        title: 'E2',
        description: 'Stuff',
        imageURL: 'https://picsum.photos/seed/picsum/200/300',
        address: 'Address',
        location: {
            latitude: 123,
            longitude: 123
        },
        creator:'u2'
    }
]
const UserPlaces = props => {
    const userId = useParams().userId;
    const userPlaces = DUMMY_PLACES.filter(place=>place.creator === userId)
    return (
        <PlaceList items={userPlaces} />
    )
}

export default UserPlaces;  