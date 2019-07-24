import React from 'react';
import styles from './style.module.css';

class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            x: 100,
            y: 100
        }
    }

    onMouseDown() {
        this.props.onMouseDown(this);
    }

    render() {
        return (
            <a className={styles.card} style={{left: this.state.x, top: this.state.y}} onMouseDown={() => this.onMouseDown()}>
                <div>{this.props.title} ({this.state.x}, {this.state.y})</div>
                <div>{this.props.description}</div>
            </a>
        );
    }
}

export default Card;