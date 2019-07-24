import React from 'react';
import styles from './component.module.css';

import Button from '../button/component';

class Toolbar extends React.Component {

	render() {

		const canvasOptions = [
			{
				name: 'Create',
				action: this.props.onCreate
			}
		];

		const cardOptions = [
			{
				name: 'Edit',
				action: () => {}
			},
			{
				name: 'Delete',
				action: this.props.onDelete
			}
		];

		let canvasButtons = canvasOptions.map((option) => { return <Button key={option.name} value={option.name} onClick={() => option.action()}/> });
		let cardButtons = cardOptions.map((option) => { return <Button key={option.name} value={option.name} onClick={() => option.action()}/> });

		if(!this.props.active) {
			cardButtons = null;
		}

		return (
			<div className={styles.toolbar}>
				{canvasButtons}
				{cardButtons}
			</div>
		);
	}

}

export default Toolbar;