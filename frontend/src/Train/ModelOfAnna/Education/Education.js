import React from 'react'
import {connect} from 'react-redux'
import classes from './Education.css'

import rez_img from './images/Res.png'

import Axios from 'axios';

class Education extends React.Component{

    state = {
        res_acc: 'None',
        if_res_acc: false
    }

    componentDidMount(){
        Axios.get(this.props.acc)
        .then(res=>{
            if (res.data == -1){
                this.setState({res_acc: 'None'})
            } else{
                this.setState({res_acc: res.data, if_res_acc: true})
            }
        })
    }

    qwer = () =>{
        var copyText = this.props.hash_name;
        navigator.clipboard.writeText(copyText)
        alert("Copied the id: " + copyText);
    }

    render(){
        return(
            <div className={classes.Education}>
                <img className={classes.resImage} src={rez_img} alt='logo' />
                <div className={classes.Dowloand}>
                    <p className={classes.Title}>Результаты</p>
                    <p className={classes.Discription}>Обучение НС завершено, модель доступна для скачивания</p>
                    <p className={classes.idModel}>Сохраните модль или id модели, чтобы проверять анонимные "исходники"</p>
                    <p className={classes.idModel}><a onClick={this.qwer.bind()}>Скопировать ID</a></p>
                    {this.state.if_res_acc ?
                        <p className={classes.idModel}>Точность {this.state.res_acc}%</p>
                        :null
                    }
                    <p style={{marginLeft:'31.21px', marginTop:'90px'}}>
                        <a className={classes.DowloandButton} href={this.props.link} target="_blank">CКАЧАТЬ</a>
                    </p>
                    <p className={classes.idModel1}><a href='/predict'>Проверить исходный код</a></p>
                    <p className = {classes.DowloandP}>Обновите страницу или нажмите F5, чтобы начать обучение НС заново</p>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return{
        link: 'http://127.0.0.1:8000/data/dataset/Process/' + String(state.trainReducer.parameters.data.hash_name).split('.')[0] + '/nnmodel_' + String(state.trainReducer.parameters.data.hash_name).split('.')[0] + '.zip',
        hash_name: String(state.trainReducer.parameters.data.hash_name).split('.')[0],
        acc: 'http://127.0.0.1:8000/data/dataset/Rezult/' + String(state.trainReducer.parameters.data.hash_name)
    }
}

function mapDispatchToProps(dispatch) {
    return{
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Education)