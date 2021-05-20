import React from 'react'
import classes from './Main.css'


import TeamBlock from './TeamBlock/TeamBlock'
import Advantages from './Advantages/Advantages'
import HowWorking from './HowWorking/HowWorking'
import AboutUs from './AboutUs/AboutUs'
import Contacts from './Contacts/Contacts'
import Footer from './Footer/Footer'

class Main extends React.Component{
    render(){
        console.log(this.state)
        return(
            <div className={classes.Main}>
                <TeamBlock />
                <Advantages id='Advantages'/>
                <HowWorking />
                <AboutUs />
                <Contacts />
                <Footer />
            </div>
        )
    }
}

export default Main