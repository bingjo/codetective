import React from 'react'
import {connect} from 'react-redux'

import classes from './Train.css'

import FirstWindowTrain from './FirstWindowTrain/FirstWindowTrain'
import NavigationButtons from './NavigationButtons/NavigationButtons'
import ModelOfAnnaUploadFile from './ModelOfAnna/UploadFile/UploadFile'
import ModelOfAnnaEducation from './ModelOfAnna/Education/Education'
import Development from '../Development/Development'


class Train extends React.Component{
    // Функция возращающая html активной страницы
    viewActiveWindow(numberWindow){
        switch(numberWindow){
            case 1:
                return(
                    <div className={classes.Train}>
                        <FirstWindowTrain/>
                    </div> 
                )
            case 2:
                return(
                    <div className={classes.Train}>
                        <ModelOfAnnaUploadFile/>
                    </div> 
                )
            case 3:
                return(
                    <div className={classes.Train}>
                        <ModelOfAnnaEducation/>
                     </div> 
                )
            default:
                return(
                    <div className={classes.Train}>
                        <Development/>
                    </div> 
                )
        }
    }
    
    render(){
        return this.viewActiveWindow(this.props.activeWindowTrain)
    }
}


function mapStateToProps(state) {
    return{
        activeWindowTrain: state.trainReducer.activeWindowTrain
    }
}

export default connect(mapStateToProps)(Train)
