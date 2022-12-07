import React from "react";
import UsersList from './../components/UsersList'
const Users = () => {
  const USERS = [
    {
    'id': "u1",
    'name': 'Anubhav Jain',
    'places': 10,
    'image': "https://picsum.photos/id/237/200/300"
  }
];
  return (
    <UsersList items={USERS} />
  )
}
export default Users;