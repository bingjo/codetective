import React from 'react';
import {NavLink} from 'react-router-dom'
import classes from './Header.css'
import logo from './images/logo.png'

import Burger from './Burger/Burger'

class Header extends React.Component {

  scrollPage = (n) =>{
    window.scrollTo(0,n)
  }

  render(){
    return ( 
      <header className={classes.Head}>
        {/* <h1><NavLink to="/"><img src={logo} alt="БИС-1702"/></NavLink></h1> */}
        <h1 className={classes.H1Style}>
          <NavLink to="/">
            <ul>
              <li className={classes.H1LiStyle} style={{color:'black'}}>co</li>
              <li className={classes.H1LiStyle} style={{color:'#704bd4'}}>DE</li>
              <li className={classes.H1LiStyle} style={{color:'black'}}>tective</li>
            </ul>
          </NavLink>
        </h1>
        <nav>
          <ul>
            <li><NavLink to='/'>Главная</NavLink></li>
            <li><NavLink to='/'onClick={this.scrollPage.bind(this, 765)}>Преимущества</NavLink></li>
            <li><NavLink to='/'onClick={this.scrollPage.bind(this, 1370)}>Как это работает</NavLink></li>
            <li><NavLink to='/'onClick={this.scrollPage.bind(this, 2100)}>О нас</NavLink></li>
            <li><NavLink to='/'onClick={this.scrollPage.bind(this, 3590)}>Контакты</NavLink></li>
          </ul>
        </nav>
        <Burger />
      </header>
    );
  }
}

export default Header;

