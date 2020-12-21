import React from 'react';

export default class EyesOnMe extends React.Component {

    handleBlur = () => {
        console.log('Hey! Eyes on me!')
    }

    handleFocus = () => {
        console.log('Good!')
    }

    render() {
        return(
            <div>
                <button onFocus={this.handleFocus} onBlur={this.handleBlur}></button>
            </div>
        )
    }

}