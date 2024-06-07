import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

import {
    Card,
    CardBody,
    CardTitle,
    CardText,
    CardSubtitle,
    CardFooter,
    Button,
    Container
}
from "reactstrap";
// const deleteUser = (user)=>
// {
//   alert("delete function call hua on user id "+user.id);

  

//   // axios.delete(`http://localhost:8080/users/${user.id}`);
// }

const User =({user,deleteUser}) =>
{

 
    return (
        <div>
          <Card className="text-center">
            <CardBody>
              {/* <CardTitle>Java</CardTitle> */}
              <CardSubtitle style = {{fontWeight:"bolder"}}>{user.firstName + " "+user.lastName}</CardSubtitle>
              <CardText >{user.email}</CardText>
              <Container className="text-center">

              <Button color="danger" onClick={()=>
              {
                
console.log("yuser id ki val h   "+user.id);
  axios.delete(`http://localhost:8080/users/${user.id}`).then(

  (response)=>
  {
toast.success("value deleted successfully");
deleteUser(user.id);
  },
  (error)=>
  {
toast.error("kuch error aaya");
  }
  )


              }}>Delete</Button>
              <Link color="warning m-3" to={`/updateuser/${user.id}`} onClick={()=>
              {
                alert("value of user id iis "+user.id);
              }}>Update</Link>

              </Container>
            </CardBody>
          </Card>
        </div>
      );
}
export default User;