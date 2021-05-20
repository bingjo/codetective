import React from 'react'
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'

import classes from './FirstWindowTrain.css'
import {ifrequest} from '../../reducers/actions/trainParamActions'
import person from './images/first-page-person.png'

class FirstWindowTrain extends React.Component{
    render(){
        return(
            <div className={classes.FirstWindowTrain}>
                <img className={classes.PersonImg} src={person} alt='person'></img>
                <div className={classes.TextAndButton}>
                    <p className={classes.TitleFirstPage}>Хотите пройти обучение?</p>
                    <p className={classes.TextFirstPage}>Для того чтобы работать с системой правильно и эффективно рекомендуется пройти обучение.</p>
                    <p className={classes.P_Style_ToGuide}><a className={classes.ToGuide} href="https://www.youtube.com/watch?v=jNQXAC9IVRw" target="_blank">ПРОЙТИ ОБУЧЕНИЕ</a></p>
                    <p className={classes.P_Style_NoGuide}><a onClick={this.props.request.bind(this, 1, this.props.activeWindowTrain)} className={classes.NoGuide}>ПРОДОЛЖИТЬ БЕЗ ОБУЧЕНИЯ</a></p>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return{
        activeWindowTrain: state.trainReducer.activeWindowTrain
    }
}

function mapDispatchToProps(dispatch) {
    return{
        request: (number, activePage) => dispatch(ifrequest(number, activePage))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FirstWindowTrain)
