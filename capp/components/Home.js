// @flow
import React, { Component,Fragment } from 'react';
import { Link } from 'react-router-dom';
import routes from '../constants/routes';
import styles from './Home.css';
import Header from './Header';
import Content from './Content';

// import StickyFooter from 'react-sticky-footer';



export default class Home extends Component {
    constructor(props){
        super(props);
        this.state={
            condition:false
        }
        this.handler=this.handler.bind(this);
    }
  handler(value){
        this.setState({
            condition:value
        })
  }
  render() {
        const {condition} = this.state;
    return (
      <div style={!condition?{
         width:'100vw'
      }:{
          height:'100vh',
          overflowY:'scroll'
      }}>
          {!condition?<Header/>:<Fragment></Fragment>}
        <Content handler={this.handler}/>
        {!condition?
        <footer
    style={!condition?{
    backgroundColor: "#93a5cf",
    padding: "1rem",
    position: "absolute",
    bottom: 0,
    width: '100%',
    height:'8vh'
    }:{
        backgroundColor: "#93a5cf",
        padding: "1rem",
        width: '100%',
        height:'8vh'
    }}
>
  <span>Developed by: Sushil Ghimire, Alish Dahal and Ravi Pandit. </span>
  <span>Copyright © 2019 </span>
</footer>:<Fragment></Fragment>}
        
      </div>
    );
  }
}
