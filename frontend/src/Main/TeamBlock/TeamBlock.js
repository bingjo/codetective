import React from 'react'
import classes from './TeamBlock.css'
import TextTeamBlock from './TextTeamBlock/TextTeamBlock'
import ImageTeamBlock from './ImageTeamBlock/ImageTeamBlock'

class TeamBlock extends React.Component{
    render(){
        return(
            <div className={classes.TeamBlock}>
                <TextTeamBlock />
                <ImageTeamBlock />
            </div>
        )
    }
}

export default TeamBlock