import React from 'react'
import classes from './SectionRight.css'
import parentClasses from '../Advantages.css'

class SectionRight extends React.Component{
    render(){
        return(
            <section className={classes.SectionRight}>
                <ul className={parentClasses.UlAdvantages}>
                    <li className={parentClasses.HeadingAdvantages}>Поддержка всех языков</li>
                    <li className={parentClasses.ImgAdvantages}>
                    <svg width="47" height="47" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
							 viewBox="0 0 249.002 249.002" enable-background="new 0 0 249.002 249.002" xmlSpace="preserve">
						<path d="M185.496,83.545c-1.475,0-2.952,0.051-4.425,0.151c-4.725-11.404-12.63-21.543-22.705-28.993
							c-12.166-8.997-26.673-13.752-41.952-13.752c-38.455,0-69.74,30.658-69.74,68.343c0,0.365,0.003,0.732,0.01,1.101
							C20.669,111.989,0,133.26,0,159.176c0,26.95,22.35,48.875,49.822,48.875h135.674c35.017,0,63.506-27.927,63.506-62.253
							C249.002,111.471,220.513,83.545,185.496,83.545z M185.496,193.051H49.822C30.621,193.051,15,177.855,15,159.176
							c0-18.68,15.621-33.878,34.822-33.878c1.183,0,2.5,0.089,4.147,0.281c2.313,0.271,4.624-0.553,6.247-2.225
							c1.624-1.672,2.378-4.003,2.041-6.309c-0.387-2.65-0.583-5.258-0.583-7.752c0-29.413,24.556-53.343,54.74-53.343
							c24.021,0,45.589,15.657,52.449,38.076c1.102,3.6,4.696,5.832,8.415,5.201c2.696-0.453,5.461-0.683,8.217-0.683
							c26.746,0,48.506,21.198,48.506,47.254C234.002,171.854,212.242,193.051,185.496,193.051z"/>
						<g>
						</g>
						<g>
						</g>
						<g>
						</g>
						<g>
						</g>
						<g>
						</g>
						<g>
						</g>
						<g>
						</g>
						<g>
						</g>
						<g>
						</g>
						<g>
						</g>
						<g>
						</g>
						<g>
						</g>
						<g>
						</g>
						<g>
						</g>
						<g>
						</g>
						</svg>
                    </li>
                </ul>
                <h1 className={parentClasses.DescriptionAdvantages}>Определяй автора исходного кода независимо от языка программирования</h1>
            </section>
        )
    }
}

export default SectionRight