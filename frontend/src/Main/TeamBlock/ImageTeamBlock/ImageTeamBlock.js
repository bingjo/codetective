import React from 'react'
import classes from './ImageTeamBlock.css'
import team from './images/team.png'

class ImageTeamBlock extends React.Component{
    render(){
        return(
            <div className={classes.ImageTeamBlock}>
                <img src={team} alt='team'></img>
            </div>
        )
    }
}

export default ImageTeamBlock