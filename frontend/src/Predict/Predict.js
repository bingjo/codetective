import React from 'react'
import {connect} from 'react-redux'
import classes from './Predict.css'
import axios from 'axios'


class Predict extends React.Component{
    state = {
        file: null,
        model: null,
        dowloand: null,
        dow_bool: false,
        proc_bool: false,
        zip: null,
        n_model: null,
        n_zip: null,
        n_file: null,
        win: null,
        if_id: true,
        if_model: false,
        if_zip: false
    }

    componentDidMount(){
        document.getElementById('123').checked = true;
    }

    qwer = () =>{
        var self = this
        this.setState({proc_bool: true})
        let formdata = new FormData()
        formdata.append('validata', this.state.file)
        if (this.state.model == null){
            //var fileModel = new File([''], 'none_user_model_11.h5')
            //console.log(fileModel)
            formdata.append('user_model', this.state.file)
        } else{
            formdata.append('user_model', this.state.model)
        }

        if (this.state.zip == null){
            //var fileModel = new File([''], 'none_user_model_11.h5')
            //console.log(fileModel)
            formdata.append('zip_file', this.state.file)
            formdata.append('only_zip', 'n')
        } else{
            formdata.append('zip_file', this.state.zip)
            formdata.append('only_zip', 'y')
        }
        
        try{
            formdata.append('hash_model', String(document.getElementById('id_model').value))
        } catch(e) {
            formdata.append('hash_model', 'none_id_model_11.h5')
        }
        axios({
            url: 'http://127.0.0.1:8000/api/predict/',
            method: 'POST',
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            data: formdata
        }).then(function(response){
            if (response.status == 201){
                self.setState({proc_bool: false, dowloand: String(response.data).split('\n').slice(0, String(response.data).split('\n').length - 1), dow_bool: true, win: String(response.data).split('\n')[String(response.data).split('\n').length - 1]});
            }
        })
    }

    render(){
        console.log(this.state)
        return(
            <div className={classes.Predict}>
                <ul className={classes.PredictUl}>

                    <li className={classes.PredictLiMain}>
                        <p className = {classes.DiskTitle}>Обученную модель можно загрузить одним из трех способов:</p>
                        <form>
                            <p className = {classes.DiskP}><input type="radio" name='varik' id = '123' onChange={(e)=>this.setState({if_id:true, if_model:false, if_zip:false})}/> 1. Использовать ID обученной на предыдущем этапе модели</p>
                            <p className = {classes.DiskP}><input type="radio" name='varik' onChange={(e)=>this.setState({if_id:false, if_model:false, if_zip:true})}/> 2. Использовать архив, сформированный по итогам обучения на предыдущем этапе</p>
                            <p className = {classes.DiskP}><input type="radio" name='varik' onChange={(e)=>this.setState({if_id:false, if_model:true, if_zip:false})}/> 3. Использовать собственную модель (.h5)</p>
                        </form>
                    </li>

                    <li className={classes.PredictLiMainLeft}>
                        {/* Указание ID */}
                        {this.state.if_id ?
                            <ul className={classes.PredictUlLeft}>
                                <li>
                                    <p className={classes.PredictPStyle}>ID модели:</p>
                                </li>
                                <li>
                                    <input className={classes.PredctInputStyle} type='text' id='id_model'/>
                                </li>
                            </ul>
                            : null
                        }
                        {/* Модель */}
                        {this.state.if_model ?
                            <ul className={classes.UlUploadFileStyle}>
                                <li>
                                    <p className={classes.PUlpoadFileStyle}>Обученная модель:</p>
                                </li>
                                <li>
                                    <input className={classes.InputFileStyle} type='file' name = 'model' id='model' onChange={(e)=>this.setState({model: e.target.files[0], n_model: 'Модель загружена'})}></input>
                                </li>
                                <li>
                                    <label className={classes.LabelStyle} for='model'>ВЫБЕРИТЕ ФАЙЛ</label> 
                                </li>
                                <li style={{paddingLeft: '15px'}}>
                                    <p style={{color: '#656565'}}>{this.state.n_model}</p>
                                </li>
                            </ul>
                            : null
                        }
                        {/* Архив */}
                        {this.state.if_zip ?
                            <ul className={classes.UlUploadFileStyle}>
                                <li>
                                    <p className={classes.PUlpoadFileStyle}>ZIP файл:</p>
                                </li>
                                <li>
                                    <input className={classes.InputFileStyle} type='file' name = 'zip' id='zip' onChange={(e)=>this.setState({zip: e.target.files[0], n_zip: 'Архив загружен'})}></input>
                                </li>
                                <li>
                                    <label className={classes.LabelStyle} for='zip'>ВЫБЕРИТЕ ФАЙЛ</label> 
                                </li>
                                <li style={{paddingLeft: '15px'}}>
                                    <p style={{color: '#656565'}}>{this.state.n_zip}</p>
                                </li>
                            </ul>
                            : null
                        }
                        <br/>
                        {/* Исходник */}
                        <ul className={classes.UlUploadFileStyle}>
                            <li>
                                <p className={classes.PUlpoadFileStyle}>Исходный код:</p>
                            </li>
                            <li>
                                <input className={classes.InputFileStyle} type='file' name = 'files' id='files' onChange={(e)=>this.setState({file: e.target.files[0], n_file: 'Файл загружен'})}></input>
                            </li>
                            <li>
                                <label className={classes.LabelStyle} for='files'>ВЫБЕРИТЕ ФАЙЛ</label> 
                            </li>
                            <li style={{paddingLeft: '15px'}}>
                                <p style={{color: '#656565'}}>{this.state.n_file}</p>
                            </li>
                        </ul>
                        <br/>
                        <label className={classes.MainButtonUploadFile} onClick={this.qwer.bind()}>ОТПРАВИТЬ</label>
                        <div style={{marginTop: '40px'}}>
                            {this.state.dow_bool ?
                                <div className={classes.Process}>
                                    <p className={classes.ProcessTitle}>Результат</p>
                                    {this.state.dowloand.map(author => (
                                        <div style={{textAlign: 'centre'}}>
                                            <p className={classes.ProcessAuthor}>{author}</p>
                                        </div>
                                    ))}
                                    <p className={classes.ProcessAuthorWin}>{this.state.win}</p>
                                </div>
                                : null
                            }
                            {this.state.proc_bool ?
                                <div className={classes.Process}>
                                    <p className={classes.ProcessTitle}>Результат</p>
                                    <p className={classes.ProcessAuthor}>Подождите, идет обработка данных...</p>
                                </div>
                                : null
                            }
                        </div>
                    </li>
                
                </ul> 
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

export default connect(mapStateToProps, mapDispatchToProps)(Predict)