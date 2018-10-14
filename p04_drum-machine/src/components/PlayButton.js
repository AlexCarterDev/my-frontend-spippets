import React, { Component } from 'react'

export default class PlayButton extends Component {
    constructor(props) {
        super(props);
        this.play = this.play.bind(this);
        this.simulatePressButton = this.simulatePressButton.bind(this);
        this.handleKeydown = this.handleKeydown.bind(this);
    }


    play() {
        console.log('PlayButton ' + this.props.description + ': play');
        this.audio.currentTime = 0;
        this.audio.play();
        this.props.onClick();
    }

    simulatePressButton() {
        var element = document.getElementById(this.props.description);
        element.classList.add('button-green-active');
        setTimeout(() => {
            element.classList.remove('button-green-active');
        }, 100);
    }

    handleKeydown(e) {
        if (e.keyCode === this.props.keyCode) {
            console.log('keydown ' + e.keyCode);
            this.simulatePressButton();
            this.play(e);
        }
    }

    componentDidMount() {
        this.audio = document.getElementById(this.props.text);
        document.addEventListener('keydown', this.handleKeydown);
        
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeydown);
    }

    render() {
        console.log('PlayButton ' + this.props.description + ': render');
        
        return (

            <button 
                id={this.props.description}
                className={'drum-pad button-green'}
                onClick={this.play}
            >
                <audio className='clip' id={this.props.text} src={this.props.src} ></audio>
                {this.props.text}
            </button>
        )
    }
}