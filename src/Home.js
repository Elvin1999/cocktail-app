import React, { Component } from 'react'
import {  Link } from "react-router-dom";

import './Home.css';
export default class Home extends Component {
  render() {
    return (
      <div className='frame'>
       <h1 className='intro'>It's time for Coctails</h1>
       <Link to="/products" className='spec-btn'>View Products</Link>
      </div>
    )
  }
}
