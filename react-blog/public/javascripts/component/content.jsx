import React, { Component } from "react";
import ReactDOM from "react-dom";
import { ListGroup, ListGroupItem } from 'react-bootstrap';
class Content extends React.Component{
    render() {
        return(
            <ListGroup>
                <ListGroupItem header="Heading 1">Some body text</ListGroupItem>
                <ListGroupItem header="Heading 2" href="#">Linked item</ListGroupItem>
                <ListGroupItem header="Heading 3" bsStyle="danger">Danger styling</ListGroupItem>
            </ListGroup>
        )
    }
}

export default Content



