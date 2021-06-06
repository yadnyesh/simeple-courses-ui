import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        <ListGroup>
            <Link className="list-group-item list-group-item-action" tag="a" to="/" action>Home</Link>
            <Link className="list-group-item list-group-item-action" tag="a" to="/addcourse" action>Add Course</Link>
            <Link className="list-group-item list-group-item-action" tag="a" to="/viewcourse" action>View Courses</Link>
            <Link className="list-group-item list-group-item-action" tag="a" to="#!" action>About Us</Link>
            <Link className="list-group-item list-group-item-action" tag="a" to="#!" action>Contact</Link>
        </ListGroup>
    );
}

export default Menu;