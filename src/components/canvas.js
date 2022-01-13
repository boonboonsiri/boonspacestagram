import React, {Component} from 'react';

import './canvas.css'

import { IconButton } from '@material-ui/core';
import { FavoriteRounded } from '@material-ui/icons'

class Canvas extends Component {

    constructor(props){
        super(props)
        this.state={button:""}
    }

    render() {
        return(
            <span className="flexContainer">
                <span className="vertContainer">
                    <div className='imgContainer'>
                        <img src={this.props.obj.img}></img>
                        <IconButton
                            className="iconButton" color={this.state.button}
                            onClick={() => { 
                                let buttonState = this.state.button
                                if(buttonState === ""){
                                    buttonState = "secondary"
                                }else{
                                    buttonState=""
                                }
                                this.setState({
                                    button: buttonState
                                });
                            }}
                        >
                            <FavoriteRounded/>
                        </IconButton>

                    </div>
                    <h3>{this.props.obj.title}</h3>
                    <p className="date">{this.props.obj.date}</p>
                    <p>{this.props.obj.data}</p>
                </span>
            </span>
        )
    }  

}

export default Canvas;