import React from 'react';
import PlayButton from './PlayButton'

const DrumPad = ({bank, playButtonClicked}) => {
    console.log('DrumPad: render');
    console.log(bank);
    var texts = ['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C'];
    let buttons = [];
    for (let i = 0; i < texts.length; i++) {
        
        buttons.push(
            <PlayButton 
                key={i}
                text={texts[i]}
                id={'drum-pad-' + i}
                cls='button-green'
                src={bank.samples[i].url}
                onClick={() => playButtonClicked(bank.samples[i].description)}
            />
        );
    }


    return(
        <div id='drum-pad'>
            {buttons}
        </div>
    )
}

export default DrumPad