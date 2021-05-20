import React from 'react'
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'

import classes from './UploadFile.css'
import {uplFile, ifrequest, changeWindowTrain} from '../../../reducers/actions/trainParamActions'
import Axios from 'axios';

class UploadFile extends React.Component{
    state = {
        state_x_train: null,
        state_y_train: null,
        n_x_train: 'Файл не выбран',
        n_y_train: 'Файл не выбран',
        status: null,
        education: false,
        process: '0',
        hash: '',
        state_zip_file: null,
        n_zip_file: 'Файл не выбран',
        if_zip: false,
        if_fold: true
    }
    
    componentDidMount(){
        document.getElementById('123').checked = true;
        setTimeout(this.pass_gen.bind(this, 60), 100)
    }

    pass_gen(len) {
        var chrs = 'abdehkmnpswxzABDEFGHKMNPQRSTWXZ123456789';
        var str = '';
        for (var i = 0; i < len; i++) {
            var pos = Math.floor(Math.random() * chrs.length);
            str += chrs.substring(pos,pos+1);
        }
        str = str + '.txt'
        this.setState({hash: str})
    }

    qwerty = () =>{
        console.log(this.state.state_x_train)
        if (this.state.state_x_train == null){
            if (this.state.state_zip_file == null){
                this.setState({status: 'Сначала выберите файлы!'})
            } else{
                this.setState({status: 'Файлы загружены!'})
            }
        } else{
            this.setState({status: 'Файлы загружены!'})
        }
    }

    zxcvbn = (stop) =>{
        Axios.get('http://127.0.0.1:8000/data/dataset/Process/'+String(this.state.hash))
        .then(res=>{
            this.setState({process: res.data})
        })
        if (Number(this.state.process) < stop){
            setTimeout(this.zxcvbn.bind(this, stop), 2000)
        }
        else this.setState({process: '99'})
    }

    checkProcess = () =>{
        setTimeout(this.props.request.bind(this, 1, this.props.file, this.props.param, this.props.activeWindowTrain, this.state.hash), 200)
        this.setState({education: true});
        let r = 5
        let f = 2

        try{
            if (Number(document.getElementById('folds').value) > 1){
                f = Number(document.getElementById('folds').value)
            }
        } catch(e){
            f = 1
        }

        if (Number(document.getElementById('repeats').value) > 0){
            r = Number(document.getElementById('repeats').value)
        }

        let stop = r * f
        stop = Math.floor(((stop - 1)/stop) * 100) - 1
        setTimeout(this.zxcvbn.bind(this, stop), 3000)
    }

    fileUpload = () => {
        this.setState({status: 'Подождите...'})
        this.props.uFile(this.state.state_x_train, this.state.state_y_train, this.state.state_zip_file)
        setTimeout(this.qwerty, 2000)
    }

    render(){
        console.log(this.state)
        return(
            <div className={classes.UploadFile}>

                {/* Заголовок и описание */}

                <p className={classes.TitleUploadFile}>Обучение модели</p>
                <hr color='#704bd4' size='1px' width='160px'/>
                <p className={classes.DescriptionUploadFile}>
                    Оптимальные параметры обучения уже настроены для получения наилучшего результата.<br/>
                    Следует выбрать один из вариантов, представленных ниже, или сразу начать обучение.
                </p>

                <p className={classes.OneFot}><NavLink to='/onehot'>У мене нет подготовленных данных</NavLink></p>
                <p className={classes.OneFot}><NavLink to='/predict'>У меня есть обученная модель</NavLink></p>
                <p className={classes.OneFot} style={{'marginBottom': '40px'}}>
                    <p className={classes.UploadFileName}>Использовать кросс-валидацию (<label style={{textDecoration: 'underline', color: '#656565'}} title='Кросс-валидация увеличит время обучения, но позволит корректно оценить точность модели.'>?</label>) <input id='123' style={{verticalAlign: 'center'}} type='checkbox' onChange={(e) => this.setState({if_fold: !this.state.if_fold})}/></p>
                </p>

                {/* Основная часть */}

                <ul className={classes.MainUploadFile}>
                    {/* Левая часть страницы */}
                    <li className={classes.Left}>
                        {/* Верхние строки ввода */}
                        <ul className={classes.UlTopStyle}>
                            <li>
                                <p className={classes.TopPStype}>Количество повторов:</p>
                            </li>
                            <li>
                                <input className={classes.TopInputStyle} id='repeats' placeholder='Ввод' type='number' min='1' required placeholder='5'/>
                            </li>
                        </ul>

                        <ul className={classes.UlTopStyle}>
                            <li>
                                <p className={classes.TopPStype}>Количество эпох:</p>
                            </li>
                            <li>
                                <input className={classes.TopInputStyle} id='epochs' placeholder='Ввод' type='number' min='1' required placeholder='10'/>
                            </li>
                        </ul>
                        {this.state.if_fold ?
                            <ul className={classes.UlTopStyle}>
                                <li>
                                    <p className={classes.TopPStype}>Количество фолдов:</p>
                                </li>
                                <li>
                                    <input className={classes.TopInputStyle} id='folds' placeholder='Ввод' type='number' min='2' required placeholder='2'/>
                                </li>
                            </ul>
                            : null
                        }
                        {/* Нижние строки ввода */}
                        {/* <ul className={classes.UlDownStyle}>
                            <li>
                                <p className={classes.DownPStype}>Прогноз:</p>
                            </li>
                            <li>
                                <select className={classes.DownSelectStyle} id='predict'>
                                    <option value='y'>Да</option>
                                    <option value='n'>Нет</option>
                                </select>
                            </li>
                        </ul>

                        <ul className={classes.UlDownStyle}>
                            <li>
                                <p className={classes.DownPStype}>Чтение:</p>
                            </li>
                            <li>
                                <select className={classes.DownSelectStyle} id='read'>
                                    <option value='y'>Да</option>
                                    <option value='n'>Нет</option>
                                </select>
                            </li>
                        </ul>

                        <ul className={classes.UlDownStyle}>
                            <li>
                                <p className={classes.DownPStype}>Тренировка:</p>
                            </li>
                            <li>
                                <select className={classes.DownSelectStyle} id='train'>
                                    <option value='y'>Да</option>
                                    <option value='n'>Нет</option>
                                </select>
                            </li>
                        </ul> */}
                    {/* Конец левой части страницы */}
                    </li>
                    <li className={classes.Right}>
                        {/* Правая часть страницы */}

                        <ul className={classes.UlUploadFileStyle}>
                            <li className={classes.LiRightUploadFileStyle}>
                                <p className={classes.PUlpoadFileStyle}>ZIP файл:</p>
                            </li>
                            <li className={classes.LiRightUploadFileStyle}>
                                <input className={classes.InputStyle} type='file' name='x_test' id='x_test' onChange={(e)=>
                                    this.setState({state_zip_file: e.target.files[0],
                                                n_zip_file: e.target.files[0].name})}/>                 
                            </li>
                            <li className={classes.LiRightUploadFileStyle}>
                                <label className={classes.LabelStyle} for='x_test'>ВЫБЕРИТЕ ФАЙЛ</label> 
                            </li>
                            <li className={classes.LiRightUploadFileStyle}>
                                <p className={classes.UploadFileName}>{this.state.n_zip_file}</p>
                            </li>
                        </ul>
                        <p className={classes.UploadFileName}>Или можете загрузить свои данные (<label style={{textDecoration: 'underline'}} title='Данные разделяются на тренировочный и тестовый датасеты автоматически.'>?</label>) <input style={{verticalAlign: 'center'}} type='checkbox' onChange={(e) => this.setState({if_zip: !this.state.if_zip})}/></p>
                        <br/>
                        
                        {/* Загрузка третьего файла */}
                        {this.state.if_zip ?
                            <div>
                                {/* Загрузка первого файла */}
                                <ul className={classes.UlUploadFileStyle}>
                                    <li className={classes.LiRightUploadFileStyle}>
                                        <p className={classes.PUlpoadFileStyle}>Данные:</p>
                                    </li>
                                    <li className={classes.LiRightUploadFileStyle}>
                                        <input className={classes.InputStyle} required type='file' name='x_train' id='x_train' onChange={(e)=>
                                            this.setState({state_x_train: e.target.files[0],
                                                        n_x_train: e.target.files[0].name})}/>                 
                                    </li>
                                    <li className={classes.LiRightUploadFileStyle}>
                                        <label className={classes.LabelStyle} for='x_train'>ВЫБЕРИТЕ ФАЙЛ</label> 
                                    </li>
                                    <li className={classes.LiRightUploadFileStyle}>
                                        <p className={classes.UploadFileName}>{this.state.n_x_train}</p>
                                    </li>
                                </ul>

                                {/* Загрузка второго файла */}
                                <ul className={classes.UlUploadFileStyle}>
                                    <li className={classes.LiRightUploadFileStyle}>
                                        <p className={classes.PUlpoadFileStyle}>Метки:</p>
                                    </li>
                                    <li className={classes.LiRightUploadFileStyle}>
                                        <input className={classes.InputStyle} required type='file' name='y_train' id='y_train' onChange={(e)=>
                                            this.setState({state_y_train: e.target.files[0],
                                                        n_y_train: e.target.files[0].name})}/>                 
                                    </li>
                                    <li className={classes.LiRightUploadFileStyle}>
                                        <label className={classes.LabelStyle} for='y_train'>ВЫБЕРИТЕ ФАЙЛ</label> 
                                    </li>
                                    <li className={classes.LiRightUploadFileStyle}>
                                        <p className={classes.UploadFileName}>{this.state.n_y_train}</p>
                                    </li>
                                </ul>
                            </div>
                            : null
                        }

                        {/* Загрузка четвертого файла */}
                        {/* <ul className={classes.UlUploadFileStyle}>
                            <li className={classes.LiRightUploadFileStyle}>
                                <p className={classes.PUlpoadFileStyle}>y_test:</p>
                            </li>
                            <li className={classes.LiRightUploadFileStyle}>
                                <input className={classes.InputStyle} type='file' name='y_test' id='y_test' onChange={(e)=>
                                    this.setState({state_y_test: e.target.files[0],
                                                   n_y_test: e.target.files[0].name})}/>                 
                            </li>
                            <li className={classes.LiRightUploadFileStyle}>
                                <label className={classes.LabelStyle} for='y_test'>ВЫБЕРИТЕ ФАЙЛ</label> 
                            </li>
                            <li className={classes.LiRightUploadFileStyle}>
                                <p className={classes.UploadFileName}>{this.state.n_y_test}</p>
                            </li>
                        </ul> */}

                        {/* Кнопака загрузить файлы */}
                        <div style={{width:'351px'}}>
                            <label className={classes.MainButtonUploadFile} onClick={this.fileUpload}>ЗАГРУЗИТЬ ФАЙЛЫ</label>
                            <p className={classes.UploadFileStatus}>{this.state.status}</p>
                        </div>
                        {/* Конец правой части страницы */}
                    </li>
                </ul>
                
                {/* Прогресс обучения */}

                { this.state.education ?
                    <div className={classes.Process}>
                        <p>Подождите идет процесс обучения НС...</p>
                        <p>Прогресс: {this.state.process}%</p>
                    </div>
                    : null
                }
                {/* Конец основной части */}

                {/* Кнопки навигации */}
                <div className={classes.NavigationButtons}>
                    <ul>
                        <li style={{width: '128px'}}></li>
                        <li>
                            <label className={classes.ButtonNext} onClick={this.checkProcess}>ОБУЧАТЬ</label>
                        </li>
                    </ul>
                </div>
                {/* Конец кнопок навигации */}
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
        uFile: (x_train, y_train, zip_file) => dispatch(uplFile(x_train, y_train, zip_file)),
        request: (number, e, param, activePage, hashName) => dispatch(ifrequest(number, e, param, activePage, hashName)),
        changeWindowTrain: (number) => dispatch(changeWindowTrain(number))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UploadFile)