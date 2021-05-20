import React from 'react'
import classes from './Advantages.css'

import SectionLeft from './SectionLeft/SectionLeft'
import SectionCenter from './SectionCenter/SectionCenter'
import SectionRight from './SectionRight/SectionRight'

class Advantages extends React.Component{
    render(){
        return(
            <div className={classes.Advantages}>
                <div className={classes.AdvantagesTitle}>
                    <p className={classes.AdvantagesTitleText}>Наши преимущества</p>
                    <SectionLeft/>
                    <SectionCenter />
                    <SectionRight />
                </div>
            </div>
        )
    }
}

export default Advantages