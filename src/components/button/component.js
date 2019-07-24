import React from 'react';
import styles from './component.module.css';

class Button extends React.Component {
	render() {
		return (
			<button className={styles.button} onClick={this.props.onClick}>{this.props.value}</button>
		);
	}
}

export default Button;