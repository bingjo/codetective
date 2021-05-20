import React from 'react'
import classes from './HowWorking.css'


class HowWorking extends React.Component{
    render(){
        return(
            <div className={classes.HowWorking}>
                <p className={classes.HowWorkingTitleText}>Как это работает?</p>
                <ul className={classes.Top}>
                    <li className={classes.LeftLi}>
                        <p className={classes.StepNumber}>Шаг №1</p>
                        <hr color='black' size='1px' width='50px'/>
                        <p className={classes.StepDescription}>
                        Есть подозрительный исходный код? Проверь его авторство при помощи "CoDEtective". 
                        Загрузи исходные коды потенциальных авторов в нашу систему и получи готовый датасет для обучения нейронной сети.
                        </p>
                    </li>
                    <li className={classes.RightLi}>
                        <p className={classes.StepNumber}>Шаг №3</p>
                        <hr color='black' size='1px' width='50px'/>
                        <p className={classes.StepDescription}>
                        Получи результат обучения. "CoDEtective" примет решение об авторстве подозрительного исходного кода.
                        </p>
                    </li>
                </ul>
                <ul className={classes.Down}>
                    <li className={classes.LeftLi}>
                        <p className={classes.StepNumber}>Шаг №2</p>
                        <hr color='black' size='1px' width='50px'/>
                        <p className={classes.StepDescription}>
                        Загрузи полученный датасет и подозрительный исходный код в нашу систему - начнется обучение нейронной сети. 
                        Дождись завершения обучения нейронной сети.
                        </p>
                    </li>
                    <li className={classes.RightLi}>
                        <p className={classes.StepNumber}>Шаг №4</p>
                        <hr color='black' size='1px' width='50px'/>
                        <p className={classes.StepDescription}>
                        Понравился "CoDEtective"? Оформи платную подписку!
                        </p>
                    </li>
                </ul>
            </div>
        )
    }
}

export default HowWorking