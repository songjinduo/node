import React, { Component, PropTypes, cloneElement } from 'react';
import ReactDOM from "react-dom";

import classnames from 'classnames';
import App from '../javascripts/container/app.jsx';

var rootElement = document.getElementById("app");
ReactDOM.render(
    <div>
        <App/>
    </div>,
    rootElement
);