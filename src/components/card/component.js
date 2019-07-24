import React from 'react';
import styles from './style.module.css';

class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            x: 64,
            y: 64
        }
    }

    move(x, y) {
        this.setState(() => {
            return {
                x: x,
                y: y
            };
        });
    }

    render() {
        const className = styles['card'] + (this.props.active ? ' ' + styles['card-active'] : '');

        return (
            <a className={className} style={{left: this.state.x, top: this.state.y}}
                onMouseDown={() => this.props.onMouseDown(this)}
            >
                <div>{this.props.title} ({this.state.x}, {this.state.y})</div>
                <div>{this.props.description}</div>
            </a>
        );
    }
}

export default Card;