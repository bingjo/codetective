import React from 'react'
import classes from './AboutUs.css'
import abous_us_team from './images/about-us-team.png'
import abous_us_logo from './images/about-us-logo.png'

class AboutUs extends React.Component{
    render(){
        return(
            <div className={classes.AboutUsBg}>
                <div className={classes.AboutUs}>
                    <p className={classes.AboutUsTitleText}>О нас</p>
                    <ul>
                        <li className={classes.LeftLi}><img src={abous_us_team} alt='team'/></li>
                        <li className={classes.RightLi}>
                            {/* <img src={abous_us_logo} alt='logo'/> */}
                            <h1 className={classes.H1Style}>
                                <ul>
                                <li className={classes.H1LiStyle} style={{color:'white'}}>co</li>
                                <li className={classes.H1LiStyle} style={{color:'#704bd4'}}>DE</li>
                                <li className={classes.H1LiStyle} style={{color:'white'}}>tective</li>
                                </ul>
                            </h1>
                            <hr color='white' size='1px' width='190px'/>
                            <p className={classes.AboutUSDescription}>
                            Мы - команда высококвалифицированных специалистов в области NLP. 
                            Нами разработано множество решений в области интеллектуального анализа текста, в том числе:
                            <br/>
                            - интеллектуальная система "CoDEtective" для определения автора исходного кода;
                            <br/>
                            - программная система "Авторовед" для определения автора естественного текста на русском языке;
                            <br/>
                            - веб-сервис "MoodOrRude" для определения тональности текста;
                            <br/>
                            - telegram чат-бот "PedophileDetector" для определения пола и возраста автора.
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default AboutUs