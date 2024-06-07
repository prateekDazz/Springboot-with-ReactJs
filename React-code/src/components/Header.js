import React from "react";
import { Card,CardBody } from "reactstrap";

function Header({name,title})
{
    return (


        <div style={{textAlign:"center",marginTop:"10px"}}>
            <Card className="bg-warning">

                <CardBody>

                <h1>Welcome to courses Application</h1>

                </CardBody>
            </Card>
        </div>
    );
}
export default Header;