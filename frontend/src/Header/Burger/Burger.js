import React from 'react';
import {NavLink} from 'react-router-dom'
import classes from './Burger.css'

import onClickOutside from 'react-onclickoutside'

class Burger extends React.Component {

    state = {
        hasBurger: false,
    }
    

    qwer = (e) => {
        this.setState({hasBurger: e})
    }

    handleClickOutside(e){
        this.setState({hasBurger: false})
    }

    render(){
        return ( 
            <div className={classes.Burger}>
                <input type='checkbox' id={'CheckMenu'} onClick={this.qwer.bind(this, !this.state.hasBurger)}/>
                <label className={classes.BurgerLine} htmlFor={'CheckMenu'} />
                <div className={classes.B1}></div>
                <div className={classes.B2}></div>
                <div className={classes.B3}></div>
                <div className={classes.B4}></div>
                {
                    this.state.hasBurger ?
                        <div className={classes.BurgerMenu}>
                            <p className={classes.P_Style_Burger}>Меню:</p>
                            <NavLink className={classes.A_Style_Burger} to='/train' onClick={this.qwer.bind(this, false)}>Обучение</NavLink>
                            <NavLink className={classes.A_Style_Burger} to='/results' onClick={this.qwer.bind(this, false)}>Результаты</NavLink>
                            <NavLink className={classes.A_Style_Burger} to='/models' onClick={this.qwer.bind(this, false)}>Модели</NavLink>
                            <NavLink className={classes.A_Style_Burger} to='/guide' onClick={this.qwer.bind(this, false)}>Гайд</NavLink>
                        </div>
                    : null
                }

            </div>
        );
    }
}

export default onClickOutside(Burger);