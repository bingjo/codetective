import React from 'react'
import {connect} from 'react-redux'
import classes from './NavigationButtons.css'
import {ifrequest, changeWindowTrain} from '../../reducers/actions/trainParamActions'

class NavigationButtons extends React.Component{
    render(){
        return(
            <div className={classes.NavigationButtons}>
                <ul>
                    <li style={{paddingRight:'50px'}}>
                        <label className={classes.ButtonBack} onClick={this.props.changeWindowTrain.bind(this, -1)}>НАЗАД</label>
                    </li>
                    <li>
                        <label className={classes.ButtonNext} onClick={this.props.request.bind(this, 1, this.props.file, this.props.param, this.props.activeWindowTrain)}>ВПЕРЕД</label>
                    </li>
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return{
        activeWindowTrain: state.trainReducer.activeWindowTrain,
        file: state.trainReducer.file,
        param: state.trainReducer.parameters
    }
}

function mapDispatchToProps(dispatch) {
    return{
        request: (number, e, param, activePage) => dispatch(ifrequest(number, e, param, activePage)),
        changeWindowTrain: (number) => dispatch(changeWindowTrain(number))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavigationButtons)