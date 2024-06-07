import axios from "axios";
import React, { useEffect,Fragment,useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { Form,FormGroup, Label, Input,Container,Button} from "reactstrap";

const AddUser = ()=>
{
// in case of update id will be passed as parameter
  const { id } = useParams();

  useEffect(()=>
  {
    if(id)
    {
      document.title = "Update User";
      axios.get(`http://localhost:8080/users/${id}`).then(

      (response)=>
      {
    toast.success("value fetched successfully");
    console.log(response.data);
    console.log(`updating the id ${id}`);
    setSavedData(prevState => ({
      ...prevState,
      id: response.data.id,
      firstName: response.data.firstName,
      email: response.data.email,
      lastName:response.data.lastName
    }));
    
    console.log(`response ki email hai ${response.data.email}`);
    console.log(`saveed dats last name is ${savedData.lastName}`)
      },
      (error)=>
      {
    toast.error("kuch error aaya");
      }
      )
    }
    else{
      document.title = "Add User"

    }
  },[])

const [savedData,setSavedData] =  useState({id:'',firstName:'',lastName:'',email:''});


  const [user,setUser] = useState({});
  const handleForm = (e)=>
  {
console.log(user);
if(id)
{
  postDataToServer(savedData);

}
else{
  postDataToServer(user);
}

e.preventDefault();

  }

  const postDataToServer = (data)=>
  {
    if(id)
    {
      axios.put(`http://localhost:8080/users/${id}`,data).then(

      (response)=>
      {
toast.success("data updated successfully");
      },
      (error)=>
      {
toast.error("data uppdate nhi hua");
      }
      )
    }
    else
    {
      axios.post("http://localhost:8080/users",data).then(
        (response)=>
        {
          console.log(response);
          // document.getElementById("firstName").value=null;
          // document.getElementById("lastname").value=null;
          // document.getElementById("email").value=null;
          // document.getElementById("userId").value=null;
          console.log("the value of first name is "+document.getElementById("firstName").value );
          console.log("the value of last name is "+document.getElementById("lastName").value );
          console.log("the value of email  is "+document.getElementById("email").value );
          console.log("the value of userI name is "+document.getElementById("userId").value );
          toast.success("data saved ssuccessfully");
        },
        (error)=>
        {
          toast.error("error occured while saving data "+ error);
        }
        
            )
    }
    document.getElementById("firstName").value ='';
    document.getElementById("lastName").value = '';
    document.getElementById("email").value = '';
    document.getElementById("firstName").placeholder ='';
    document.getElementById("lastName").placeholder ='';
    document.getElementById("email").placeholder ='';
    document.getElementById("userId").placeholder ='';
    document.getElementById("userId").value ='';









  };
    return(

        <Fragment>
<h1 className="text-center my-3">Fill the form</h1>

            <Form onSubmit={handleForm}>

            <FormGroup>
    <Label for="userId">
      userId
    </Label>
    <Input
      id="userId"
      name="userId"
      placeholder={savedData.id} disabled={id?true:false} 
      type="number" onChange={

        (e)=>
        {
          setUser({...user,id:e.target.value});
        }
      }
    />
  </FormGroup>

  <FormGroup>
    <Label for="firstName">
      FirstName
    </Label>
    <Input
      id="firstName" 
      name="firstName"
      placeholder={id?savedData.firstName:"Enter first Name here"}
      type="text"
      onChange={

        (e)=>
        {
          if(id)
          {
            setSavedData({...savedData,firstName:e.target.value})

          }
          else{
            setUser({...user,firstName:e.target.value});

          }

        }
      }
    />
  </FormGroup>
  <FormGroup>

    <Label for = "lastName">LastName

        <Input type="text" placeholder={id?savedData.lastName:"Enter LastName here"} id="lastName" 
        
        onChange={

          (e)=>
          {

            if(id)
            {
              setSavedData({...savedData,lastName:e.target.value})
  
            }
            else{
              setUser({...user,lastName:e.target.value});
  
            }

          }
        }
        style={{width:"55vw"}} />
    </Label>
  </FormGroup>
  <FormGroup>

<Label for = "email">Email

    <Input type="email" placeholder={id?savedData.email:"Enter Email here"} id="email"  
    onChange={

      (e)=>
      {
        if(id)
        {
          setSavedData({...savedData,email:e.target.value})

        }
        else{
          setUser({...user,email:e.target.value});

        }
      }
    }
    style={{width:"55vw"}} ></Input>
</Label>
</FormGroup>

  <Container>
<Button color="success" type="submit">Submit</Button>
<Button color="warning"  type = "reset" style={{marginLeft:"20px"}}>Clear</Button>


  </Container>
            </Form>
        </Fragment>
    );
}
export default AddUser;