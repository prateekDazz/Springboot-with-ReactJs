import React, { useEffect, useState } from "react";
import User from "./User";
import base_url from "./../api/bootapi"
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';

const AllUser = ()=>
{

    useEffect(()=>{
document.title = "All Users";

},[])


const deleteUserById = (id)=>
{
setUsers(users.filter((u)=>u.id!=id));
}


// const getAllUsers = ()=>
// {
//     axios.get(`${base_url}/users`).then(
//     (response)=>{
//         console.log(response)
//     },
//     (error)=>
//     {
//         console.log(error);
//     }
//     );
// };
useEffect(()=>
{
    fetch('http://localhost:8080/users')
      .then(response => {
        if (!response.ok) {
            console.log("Not Ok ")
            toast.error("Exception in fetching data",{position:"top-left"})

          throw new Error('Network response was not ok');
        }
        toast.success("data successfully retrieved",{position:"top-left"})

        return response.json(); // Parse JSON data from the response
      })
      .then(data => {
        console.log("data set hua users me")
        setUsers(data); // Set the state with the fetched users
      })
      .catch(error => {
        console.error('Error fetching users:', error);
      });
},[]);
const [users, setUsers] = useState([]);
    // const[users,setUsers] = useState([
    //     {name:"Thomas",email:"thomas@xyz.com"},
    //     {name:"David",email:"David@xyz.com"},
    //     {name:"Garret",email:"Garret@xyz.com"},
    //     {name:"Melinda",email:"Melinda@xyz.com"}


    // ])
    return(
        <div>

            <h2>All Users</h2>
            <p>List of all Users are as follows</p>

            {

                users.length>0?users.map((item)=><User key = {item.id} user = {item} deleteUser={deleteUserById}/>):"No Item Found"
            }
        </div>
    )
}
export default AllUser;