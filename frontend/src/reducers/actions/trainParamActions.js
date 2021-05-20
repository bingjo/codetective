import axios from 'axios'
import {ChangeWindowTrain, PostSuccess, ShowParameters, UploadFile} from './actionsTypes'

export function postSuccess(number, parameters){
    return{
        type: PostSuccess,
        payload: number,
        parameters
    }
}

export function changeWindowTrain(number){
    return{
        type: ChangeWindowTrain,
        payload: number,
    }
}

export function showParam(cond){
    return{
        type: ShowParameters,
        payload: cond
    }
}

export function uplFile(x_train, y_train, zip_file){
    return{
        type: UploadFile,
        payload: {x_train: x_train,
            y_train: y_train,
            zip_file: zip_file}
    }
}


export function ifrequest(number, file, param, activePage, hashName){
    return (dispatch) => {
        // На втором шаге добавляется запись в БД, с файлом пользователя и указанными им параметрами
        if (activePage === 2){
            let formdata = new FormData() // Объявление формы
            // Заполнение формы
            
            if (file.x_train == null){
                formdata.append('only_zip', 'y')
                formdata.append('x_train', file.zip_file)
                formdata.append('y_train', file.zip_file)
                formdata.append('z_file', file.zip_file)
            } else{
                formdata.append('only_zip', 'n')
                formdata.append('x_train', file.x_train)
                formdata.append('y_train', file.y_train)
                formdata.append('z_file', file.x_train)
            }

            try{
                if (Number(document.getElementById('repeats').value) > 0){
                formdata.append('repeats', Number(document.getElementById('repeats').value))
                } else{
                    formdata.append('repeats', 5)
                }
            } catch(e){
                formdata.append('repeats', 5)
            }
            try{
                if (Number(document.getElementById('epochs').value) > 0){
                    formdata.append('epochs', Number(document.getElementById('epochs').value))
                } else{
                    formdata.append('epochs', 10)
                }
            } catch(e){
                formdata.append('epochs', 10)
            }
            try{
                if (Number(document.getElementById('folds').value) > 1){
                    formdata.append('folds', Number(document.getElementById('folds').value))
                } else{
                    formdata.append('folds', 2)
                }
                
            } catch(e){
                formdata.append('folds', 2)
            }

            // formdata.append('predict', String(document.getElementById('predict').value))
            // formdata.append('read', String(document.getElementById('read').value))
            // formdata.append('train', String(document.getElementById('train').value))

            formdata.append('predict', 'y')
            formdata.append('read', 'y')
            formdata.append('train', 'y')


            if (document.getElementById('123').checked){
                formdata.append('only_train', 'n')
            } else{
                formdata.append('only_train', 'y')
            }

            formdata.append('train_active', 1)
            formdata.append('hash_name', hashName)
            // POST запрос к базе данных
            axios({
                url: 'http://127.0.0.1:8000/api/train/',
                method: 'POST',
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
                data: formdata
            }).then(res =>{
                axios.get('http://127.0.0.1:8000/api/train/'+String(res.data.id))
                .then(res =>{
                    axios.get('http://127.0.0.1:8000/api/train/'+String(res.data.id))
                    .then(parameters => dispatch(postSuccess(number, parameters)))
                })
             })
            
        
        // На третьем шаге пользователь вводит свой формат данных 
        }else if (activePage === 3){
            axios.delete('http://127.0.0.1:8000/api/train/' + String(param.data.id))
        }else{
            dispatch(changeWindowTrain(number))
        }
    }
}