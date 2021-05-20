import {ChangeWindowTrain, PostSuccess, ShowParameters, UploadFile} from '../actions/actionsTypes'

const initialState = {
    showParameters: false,
    activeWindowTrain: 1,
    postId: -1,
    parameters: {},
    file: null
}

export default function trainReducer(state = initialState, action) {
    
    switch(action.type){
        case ChangeWindowTrain:
            return {
                activeWindowTrain: state.activeWindowTrain + action.payload,
                showParameters: false,
                file: state.file

            }
        case PostSuccess:
            return{
                activeWindowTrain: state.activeWindowTrain + action.payload,
                parameters: action.parameters,
                showParameters: false,
                file: state.file
            }
        case ShowParameters:
            return{
                activeWindowTrain: state.activeWindowTrain,
                showParameters: action.payload,
                file: state.file
            }
        case UploadFile:
            return{
                activeWindowTrain: state.activeWindowTrain,
                file: action.payload,
                showParameters: state.showParameters
            }
        default:
            return state
    } 
}