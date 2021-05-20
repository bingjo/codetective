import React from 'react';
import classes from './Development.css'

import Page from './images/Error.png'


class Development extends React.Component {
    render(){
        return ( 
            <div className={classes.Development}>
                <p className={classes.ErrorText}>Данная страница находится в разработке!</p>
                <img className={classes.ErrorImg} src={Page} alt="Error"/>
            </div>
        );
    }
}

export default Development;