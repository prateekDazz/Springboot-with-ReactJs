import React from "react";
import { Link } from "react-router-dom";
import { ListGroup,ListGroupItem } from "reactstrap";

const Menu = () =>
{
    return(
            <div>

<ListGroup>

<Link   className="list-group-item list-group-item-action"
      action
      to = "/"
      tag="a"
      style={{marginTop:"10px"}}
    >
Home    

</Link>
<Link  className="list-group-item list-group-item-action"
      action
      to = "/view-user"
      tag="a"
      style={{marginTop:"10px",textDecoration:"None"}}

    >
View    

</Link>

<Link className="list-group-item list-group-item-action"
      action
      to ="/add-user"
      tag="a"
      style={{marginTop:"10px",textDecoration:"None"}}

    >
Add User    

</Link>
</ListGroup>
            </div>

      
    );
}

export default Menu;