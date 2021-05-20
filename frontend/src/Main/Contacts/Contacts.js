import React from 'react'
import classes from './Contacts.css'

import Svg from './Svg/Svg'

class Contacts extends React.Component{
    render(){
        return(
            <div className={classes.Contacts}>
                <p className={classes.ContactsTitleText}>Наши контакты</p>
                <ul>
                    <li className={classes.PhoneNumber}>
                        <p className={classes.ViewContacts}>Телефон:</p>
                        <hr className={classes.HR} color='#6c46d3' size='1px' width='70px'/>
                        <p className={classes.ContactsDescription}><a href='tel:+79059916713'>+7 (905) 991-67-13</a></p>
                    </li>
                    <li className={classes.Email}>
                        <p className={classes.ViewContacts}>E-mail:</p>
                        <hr className={classes.HR} color='#6c46d3' size='1px' width='70px'/>
                        <p className={classes.ContactsDescription}><a href='mailto:av.kurtukova@gmail.com'>av.kurtukova@gmail.com</a></p>
                    </li>
                    <li className={classes.Adress}>
                        <p className={classes.ViewContacts}>Адрес:</p>
                        <hr className={classes.HR} color='#6c46d3' size='1px' width='70px'/>
                        <p className={classes.ContactsDescription}>Ул. Красноармейская 146,<br/>г. Томск</p>
                    </li>
                    <li className={classes.SocialNetworks}>
                        <p className={classes.ViewContacts}>Cоц. сети:</p>
                        <hr className={classes.HR} color='#6c46d3' size='1px' width='70px'/>
                        <Svg />
                    </li>
                </ul>
            </div>
        )
    }
}

export default Contacts