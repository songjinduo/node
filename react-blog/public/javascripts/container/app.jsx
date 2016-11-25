"use strict";
import React, { Component, PropTypes } from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import Header from "../component/header.jsx";
import Content from "../component/content.jsx";
import Aside from "../component/aside.jsx";
import "../../stylesheets/style.css";

class Blog extends React.Component{
    render(){
        return(
            <div className="container-fluid">
                <div className="row">
                    <Header/>
                </div>
                <Content/>
                <Aside/>
            </div>
        );
    }
}


export default Blog;
















// ReactDOM.render(
//     <h1>Hello, world!</h1>,
//     document.getElementById('example')
// );
//
// ReactDOM.render(
//     <h1>Hello, world</h1>,
//     document.getElementById('example')
// );
//
//
// var names = ['Alice', 'Emily', 'Kate'];
//
// ReactDOM.render(
//     <div>
//         {
//             names.map(function (name) {
//                 return <div>Hello, {name}!</div>
//             })
//         }
//     </div>,
//     document.getElementById('example')
// );
//
//
// var names = ['1', '2', '3'];
//
// ReactDOM.render(
//   <div>
//       {
//           names.map(function (name) {
//               return <div>Hello, {name}!</div>
//           })
//       }
//   </div>,
//   document.getElementById('example')
// );
//
//
//
//
// var arr = [
//     <h1>Hello world!</h1>,
//     <h2>React is awesome</h2>,
// ];
// ReactDOM.render(
//     <div>{arr}</div>,
//     document.getElementById('example')
// );
//
// var arr = [
//     <h1>Hello world!</h1>,
//     <h2>React is awesome</h2>,
// ];
// ReactDOM.render(
//     <div>}{arr}</div>,
//     document.getElementById('example')
// );
//
//
// var HelloMessage = React.createClass({
//     render: function() {
//         return <h1>Hello {this.props.name}</h1>;
//     }
// });
//
// ReactDOM.render(
//     <HelloMessage name="John" />,
//     document.getElementById('example')
// );
//
// var HelloMessage = React.createClass({
//     render: function () {
//         return <h1>Hello {this.props.name}</h1>;
//     }
// });
//
// ReactDOM.render(
//     <HelloMessage name="John" />,
//     document.getElementById('example')
// );
//
//
//
// var NotesList = React.createClass({
//     render: function() {
//         return (
//             <ol>
//                 {
//                     React.Children.map(this.props.children, function (child) {
//                         return <li>{child}</li>;
//                     })
//                 }
//             </ol>
//         );
//     }
// });
//
// var NoteList = React.createClass({
//     render: function () {
//         return(
//             <ol>
//                 {
//                     React.Children.map(this.props.children,function (child) {
//                         return <li>{child}</li>;
//                     })
//                 }
//             </ol>
//         )
//     }
// });
//
// ReactDOM.render(
//     <NotesList>
//         <span>hello</span>
//         <span>world</span>
//     </NotesList>,
//     document.body
// );
//
// ReactDOM.render(
//     <NoteList>
//         <span>hello</span>
//         <span>world</span>
//     </NoteList>,
//     document.body
// );
//
//
//
// var MyTitle = React.createClass({
//     propTypes: {
//         title: React.PropTypes.string.isRequired,
//     },
//
//     render: function() {
//         return <h1> {this.props.title} </h1>;
//     }
// });
//
//
// var MyTitle = React.createClass({
//     prototype: {
//         title:React.PropTypes.string.isRequired
//     },
//     render: function () {
//         return<h1>{this.props.title}</h1>;
//     }
// });
//
// var data = 123;
//
// ReactDOM.render(
//     <MyTitle title={data} />,
//     document.body
// );
//
// var data = 123;
// ReactDOM.render(
//     <MyTitle title={data}/>,
//     document.body
// );
//
//
// var MyTitle = React.createClass({
//     getDefaultProps : function () {
//         return {
//             title : 'Hello World'
//         };
//     },
//
//     render: function() {
//         return <h1> {this.props.title} </h1>;
//     }
// });
//
// var MyTitle = React.createClass({
//     getDefaultProps: function () {
//         return {
//             title: 'hello world'
//         };
//     },
//
//     render: function () {
//         return <h1>{this.pros.title}</h1>;
//     }
// });
//
// ReactDOM.render(
//     <MyTitle />,
//     document.body
// );
//
// ReactDOM.render(
//     <MyTitle />,
//     document.body
// );
//
//
// var MyComponent = React.createClass({
//     handleClick: function() {
//         this.refs.myTextInput.focus();
//     },
//     render: function() {
//         return (
//             <div>
//                 <input type="text" ref="myTextInput" />
//                 <input type="button" value="Focus the text input" onClick={this.handleClick} />
//             </div>
//         );
//     }
// });
//
// var MyComponent = React.createClass({
//     handleClick: function () {
//         this.refs.myTextInput.focus();
//     },
//     render: function () {
//         return(
//             <div>
//                 <input type="text" ref="myTextInput"/>
//                 <input type="button" value="Focus the text input" onClick={this.handleClick}/>
//             </div>
//         )
//     }
// });
//
// ReactDOM.render(
//     <MyComponent />,
//     document.getElementById('example')
// );
//
//
// var Input = React.createClass({
//     getInitialState: function() {
//         return {value: 'Hello!'};
//     },
//     handleChange: function(event) {
//         this.setState({value: event.target.value});
//     },
//     render: function () {
//         var value = this.state.value;
//         return (
//             <div>
//                 <input type="text" value={value} onChange={this.handleChange} />
//                 <p>{value}</p>
//             </div>
//         );
//     }
// });
//
// var Input = React.createClass({
//     getInitialState: function () {
//         return {value: 'Hello!'};
//     },
//     handleChange: function (event) {
//         this.setState({value: event.target.value});
//     },
//     render: function () {
//         var value = this.state.value;
//         return(
//             <div>
//                 <input type="text" value={value} onChange={this.handleChange}/>
//                 <p>{value}</p>
//             </div>
//         )
//     }
// });
//
//
// ReactDOM.render(<Input/>, document.body);
//
//
//
// var Hello = React.createClass({
//     getInitialState: function () {
//         return {
//             opacity: 1.0
//         };
//     },
//
//     componentDidMount: function () {
//         this.timer = setInterval(function () {
//             var opacity = this.state.opacity;
//             opacity -= .05;
//             if (opacity < 0.1) {
//                 opacity = 1.0;
//             }
//             this.setState({
//                 opacity: opacity
//             });
//         }.bind(this), 100);
//     },
//
//     render: function () {
//         return (
//             <div style={{opacity: this.state.opacity}}>
//                 Hello {this.props.name}
//             </div>
//         );
//     }
// });
//
// var Hello = React.createClass({
//    getInitialState: function () {
//        return {
//            opacity: 1
//        }
//    },
//     componentDidMount: function () {
//         this.timer = setInterval(function () {
//             var opacity = this.state.opacity;
//             opacity -= .05;
//             if (opacity < 0.1) {
//                 opacity = 1;
//             }
//             this.setState({
//                 opacity: opacity
//             });
//         }.bind(this), 100);
//     },
//     render: function () {
//         return(
//             <div style={{opacity: this.state.opacity}}>
//                 Hello {this.props.name}
//             </div>
//         );
//     }
// });
//
//
// ReactDOM.render(
//     <Hello name="world"/>,
//     document.body
// );
//
//
// var UserGist = React.createClass({
//     getInitialState: function() {
//         return {
//             username: '',
//             lastGistUrl: ''
//         };
//     },
//
//     componentDidMount: function() {
//         $.get(this.props.source, function(result) {
//             var lastGist = result[0];
//             if (this.isMounted()) {
//                 this.setState({
//                     username: lastGist.owner.login,
//                     lastGistUrl: lastGist.html_url
//                 });
//             }
//         }.bind(this));
//     },
//
//     render: function() {
//         return (
//             <div>
//                 {this.state.username}'s last gist is
//                 <a href={this.state.lastGistUrl}>here</a>.
//             </div>
//         );
//     }
// });
//
//
//
// var Component = React.createClass({
//     getDefaultProps: function () {
//         console.log('getDefaultPro');
//         return {
//             title: "Basic Counter",
//             step: 1
//         }
//     },
//     getInitialState: function () {
//         console.log('getInitialState');
//         return {
//             count: (this.props.initialCount || 0)
//         };
//
//     },
//     render: function () {
//         console.log('render');
//         var step = this.props.step;
//
//         return (
//             <div>
//                 <h1>{this.props.title}</h1>
//                 <div>{this.state.count}</div>
//                 <input type="button" value="+" onClick={this.updateCounter.bind(this, step)}/>
//                 <input type="button" value="-" onClick={this.updateCounter.bind(this, -step)}/>
//             </div>
//         );
//     },
//     updateCounter: function () {
//         var newCounter = this.state.count + value;
//         this.setState({count: newCount});
//     },
//     propTypes: {
//         title: React.PropTypes.string,
//         initialCount: React.PropTypes.number,
//         step: React.PropTypes.number
//     }
// });
//
// ReactDOM.render(
//     React.createElement(Component, {
//         initialCount: 5,
//         step: 2
//     }),
//     document.getElementById('app-container')
// );
//
// ReactDOM.render(
//     <UserGist source="https://api.github.com/users/octocat/gists" />,
//     document.body
// );

// var http = require("http");
//
// http.createServer(function(request, response) {
//     response.writeHead(200, {"Content-Type": "text/plain"});
//     response.write("Hello World");
//     response.end();
// }).listen(8888);

// var http = require('http');
// http.createServer(function (request, response) {
//     response.writeHead(200, {'Content-Type': 'text/plain'});
//     response.write('Hello World');
//     response.end();
// }).listen(8888);

// function say(word) {
//     console.log(word);
// }
//
// function execute(someFunction, value) {
//     someFunction(value);
// }
//
// execute(say, "Hello");

// function say(word) {
//     console.log(word);
// }
// function execute(someFunction, value) {
//     someFunction(value);
// }
// execute(say, 'Hello');


// function execute(someFunction, value) {
//     someFunction(value);
// }
//
// execute(function(word){ console.log(word) }, "Hello");

// function execute(someFunction, value) {
//     someFunction(value);
// }
// execute(function (word){console.log(word)}, 'hello');

// function bubbleSort(arr) {
//     var len = arr.length;
//     for (var i = 0; i < len; i++) {
//         for (var j = 0; j < len - 1 - i; j++) {
//             if (arr[j] > arr[j+1]) {        //相邻元素两两对比
//                 var temp = arr[j+1];        //元素交换
//                 arr[j+1] = arr[j];
//                 arr[j] = temp;
//             }
//         }
//     }
//     return arr;
// }

// function bubbleSort(arr) {
//     for (var i = 0; i < arr.length; i++) {
//         for (var j = 0; j < arr.length - 1 - i; j++) {
//             if (arr[j] > arr[j+1]) {
//                 var temp = arr[j+1];
//                 arr[j+1] = arr[j];
//                 arr[j] = temp;
//             }
//         }
//     }
//     return arr;
// }
//
//
//
// Vue.component('child',{
//     template: '<div>{{title}}hello component.</div>',
//     props: ['message'],
// })
// var father=new Vue({
//     el:"#example",
//     data:{
//         "component_name":'child'
//     },
//     methods:{
//         ccl:function(){
//             /**/
//         }
//     }
// });
//
// Vue.component('child', {
//     template: '<div>{{title}}hello component.</div>',
//     props: ['message'],
// })
// var father = new Vue({
//     el:'#example',
//     data: {
//         'component_name':'child'
//     },
//     methods:{
//         ccl:function () {
//         }
//     }
// });
//
// Vue.component('child', {
//     template: '<div>{{title}}hello component.</div>',
//     props: ['message']
// })
// var father = new Vue({
//     el:'#example',
//     data: {
//         'component_name': 'child'
//     },
//     methods: {
//         ccl: function () {
//
//         }
//     }
// })
//
// Vue.component('child', {
//     template: '<div>{{title}}hello component.</div>',
//     props: ['message']
// })
// var father = new Vue({
//     el:'#example',
//     data: {
//         'component_name': 'child'
//     },
//     methods: {
//         ccl: function () {
//
//         }
//     }
// })






