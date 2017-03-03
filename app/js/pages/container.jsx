import React from 'react';

//Components

export default class Container extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
            	{this.props.children}
            </div>
        );
    }
}