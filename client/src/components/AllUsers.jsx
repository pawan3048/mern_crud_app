import { useEffect, useState } from 'react';
import { Table, TableRow, TableHead, TableBody, TableCell,Button, styled } from '@mui/material';
import { getUsers, deleteUser } from '../service/api';
import { Link } from 'react-router-dom';

const StyledTable = styled(Table)`
  width: 90%;
  margin: 50px auto 0 auto;
  border: 2px solid lightgray;
`
const HeadRow = styled(TableRow)`
  background-color: #124fb3;
  & > th {
    font-size: 20px;
    color : #ffffff;
  }
`
const BodyRow = styled(TableRow)`
  & > td{
    font-size: 17px;
  }
  & > td > button{
    margin-left: 5px;
  }
`

const AllUsers = () => {

  useEffect(()=>{
    getAllUsers();
  }, [])

  const [users, setUsers] = useState([]);

  const getAllUsers = async () => {
    let response = await getUsers();
    setUsers(response.data);
  }

  const deleteUserDetails = async (id) => {
    await deleteUser(id);
    getAllUsers();
  }

  return (
    <div>
     <StyledTable>
      <TableHead>
        <HeadRow>
          <TableCell>ID</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Username</TableCell>
          <TableCell>Email ID</TableCell>
          <TableCell>Phone</TableCell>
          <TableCell>CRUD</TableCell>
        </HeadRow>
      </TableHead>

      <TableBody>
       {
         users.map(user => (
        <BodyRow key={user._id}>
          <TableCell>{user._id}</TableCell>
          <TableCell>{user.name}</TableCell>
          <TableCell>{user.username}</TableCell>
          <TableCell>{user.email}</TableCell>
          <TableCell>{user.phone}</TableCell>
          <TableCell>
            <Button variant="contained" component={ Link } to={`/edit/${user._id}`}>Edit</Button>
            <Button variant="contained" color='secondary' onClick={() => deleteUserDetails(user._id) }>Delete</Button>
          </TableCell>

        </BodyRow>
         ))
       }
      </TableBody>
     </StyledTable>
    </div>
  );
}

export default AllUsers;
