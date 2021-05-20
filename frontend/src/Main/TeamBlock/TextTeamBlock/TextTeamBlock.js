import React from 'react'
import {NavLink} from 'react-router-dom'
import classes from './TextTeamBlock.css'

class TextTeamBlock extends React.Component{
    render(){
        return(
            <div className={classes.TextTeamBlock}>
                <p className={classes.FontMedium}>Определение</p>
                <p className={classes.FontBold}>автора</p>
                <p className={classes.FontBold}>исходного</p>
                <p className={classes.FontMedium}>кода</p>
                <p className={classes.Delimiter}/>
                <NavLink className={classes.Started} to="/train">ПОПРОБОВАТЬ</NavLink>
            </div>
        )
    }
}

export default TextTeamBlock