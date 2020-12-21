import React from 'react';

export default class Keypad extends React.Component {

    keyHandler = () => {
        console.log('Entering password...')
    }

    render() {
        return(
            <div>
                <input onKeyUp={this.keyHandler} type="password"></input>
            </div>
        )
    }


}
