"use strict";
import React from "react";
import ReactDOM from "react-dom";
import Blog from "./container/app.jsx";
import Header from "./component/header.jsx";
import { MenuItem } from 'react-bootstrap';


var rootElement = document.getElementById("app");
ReactDOM.render(
       <Blog/>
    , rootElement
);
