import React from 'react'
import {NavLink} from 'react-router-dom'
import classes from './Footer.css'

import footer_logo from './images/footer-logo.png'


class Footer extends React.Component{

    scrollPage = (n) => {
        var top = Math.max(document.body.scrollTop,document.documentElement.scrollTop);
        if(top > 0) {
            window.scrollBy(0, n);
            var t = setTimeout('up()',50);
        } else clearTimeout(t);
        return false;
    }

    render(){
        return(
            <div className={classes.FooterBg}>
                <ul className={classes.Footer}>
                    <li className={classes.Logo}>
                        {/* <img src={footer_logo} alt='logo' /> */}
                        <h1 className={classes.H1Style}>
                            <ul>
                                <li className={classes.H1LiStyle} style={{color:'white'}}>co</li>
                                <li className={classes.H1LiStyle} style={{color:'#704bd4'}}>DE</li>
                                <li className={classes.H1LiStyle} style={{color:'white'}}>tective</li>
                            </ul>
                        </h1>
                        <hr color='white' size='1px' width='170px'/>
                    </li>
                    <li className={classes.FirstСolumn}>
                        <p className={classes.P_Style_Footer}><a className={classes.A_Style_Footer} onClick={this.scrollPage.bind(this, -3591)}>Главная</a></p>
                        <p className={classes.P_Style_Footer}><a className={classes.A_Style_Footer} onClick={this.scrollPage.bind(this, -1901)}>Преимущества</a></p>
                        <p className={classes.P_Style_Footer}><a className={classes.A_Style_Footer} onClick={this.scrollPage.bind(this, -1431)}>Как это работает</a></p>
                        <p className={classes.P_Style_Footer}><a className={classes.A_Style_Footer} onClick={this.scrollPage.bind(this, -606)}>О нас</a></p>
                        <p className={classes.P_Style_Footer}><a className={classes.A_Style_Footer} >Контакты</a></p>
                    </li>
                    <li className={classes.SecondColumn}>
                        <p className={classes.P_Style_Footer}><NavLink className={classes.A_Style_Footer} to='/train'>Обучение</NavLink></p>
                        <p className={classes.P_Style_Footer}><NavLink className={classes.A_Style_Footer} to='/results'>Результаты</NavLink></p>
                        <p className={classes.P_Style_Footer}><NavLink className={classes.A_Style_Footer} to='/models'>Модели</NavLink></p>
                        <p className={classes.P_Style_Footer}><NavLink className={classes.A_Style_Footer} to='/guide'>Гайд</NavLink></p>
                    </li>
                    <li className={classes.ThirdСolumn}>
                        <p className={classes.ThirdTextFooter}>Обучи свою<br/>первую нейронную сеть</p>
                        <p><NavLink className={classes.Started} to="/train">ПОПРОБОВАТЬ</NavLink></p>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Footer