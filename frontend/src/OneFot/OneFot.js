import React from 'react'
import {connect} from 'react-redux'
import classes from './OneFot.css'
import axios from 'axios'

import rez_img from './images/Res.png'


class OneFot extends React.Component{

    state = {
        file: null,
        dowloand: null,
        dow_bool: false,
        n_zip: null,
        proc_bool: false
    }

    qwer = () =>{
        var self = this
        this.setState({proc_bool:true})
        let formdata = new FormData()
        formdata.append('zipfile1', this.state.file)
        try{
            if (Number(document.getElementById('source_code').value) == 0){
                formdata.append('number', 20)
            } else{
                formdata.append('number', Number(document.getElementById('source_code').value))
            }
        } catch(e){
            formdata.append('number', 20)
        }
        axios({
            url: 'http://127.0.0.1:8000/api/onehot/',
            method: 'POST',
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            data: formdata
        }).then(function(response){
            if (response.status == 201){
                self.setState({dowloand: response.data, dow_bool: true, proc_bool:false});
                console.log(response.data)
            }
        })
    }

    render(){
        console.log(this.state)
        return(
            <div className={classes.OneFot}>
                <ul className={classes.OneHotUlMain}>
                    <li className={classes.OneFotLiMainLeft}>
                        <ul className={classes.PredictUlLeft}>
                            <li>
                                <p className={classes.PredictPStyle}>Кол-во файлов: (<label style={{textDecoration: 'underline'}} title='Количество исходных кодов определяет предельное число кодов на одного автора. Рекомендуется не устанавливать значение менее 5.'>?</label>)</p>
                            </li>
                            <li>
                                <input className={classes.PredctInputStyle} type='number' id='source_code' min='2' placeholder='20'/>
                            </li>
                        </ul>
                        <br/>
                        <ul className={classes.UlUploadFileStyle}>
                            <li>
                                <p className={classes.PUlpoadFileStyle}>ZIP файл:</p>
                            </li>
                            <li>
                                <input className={classes.InputFileStyle} type='file' name = 'files' id='files' onChange={(e)=>this.setState({file: e.target.files[0], n_zip: 'Архив загружен'})}></input>
                            </li>
                            <li>
                                <label className={classes.LabelStyle} for='files'>ВЫБЕРИТЕ ФАЙЛ</label> 
                            </li>
                            <li style={{paddingLeft: '15px'}}>
                                <p style={{color: '#656565'}}>{this.state.n_zip}</p>
                            </li>
                        </ul>
                        <br/>
                        <label className={classes.MainButtonUploadFile} onClick={this.qwer.bind()}>ОТПРАВИТЬ</label>  
                        {this.state.proc_bool ?
                            <div>
                                <br/>
                                <p style={{fontWeight: 'bold'}}>Подождите, идет обработка данных...</p>
                            </div>
                            : null
                        }
                        {this.state.dow_bool ?
                            <div className={classes.Process}>
                                <br/>
                                <br/>
                                <p style={{fontWeight: 'bold'}}>Набор данных для обучения:&nbsp;<a style={{fontWeight: 'bold'}} href={this.state.dowloand[0]} target="_blank">Скачать</a></p>
                            </div>
                            : null
                        }
                            
                    </li>

                    
                    <li className={classes.OneFotLiMainRight}>
                        <img src={rez_img} alt='logo' />
                    </li>

                </ul>
                {/* <p>ZIP файл:&nbsp;<input type='file' id='files' onChange={(e)=>this.setState({file: e.target.files[0]})}></input></p>
                <br/>
                <p>Кол-во исходников:&nbsp;<input type='number' id='source_code'/></p>
                <br/>
                <button onClick={this.qwer.bind()}>Отправить</button>
                <br/>
                {this.state.dow_bool ?
                    <div className={classes.Process}>
                        <br/>
                        <p>Набор данных для обучения&nbsp;<a href={this.state.dowloand[0]} target="_blank">Скачать</a></p>
                    </div>
                    : null
                } */}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return{
    }
}

function mapDispatchToProps(dispatch) {
    return{
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(OneFot)