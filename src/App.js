import React from 'react';
import styles from './app.module.css';

import Note from './models/note';

import Canvas from './components/canvas/component';
import Toolbar from './components/toolbar/component';


class App extends React.Component {
	constructor(props) {
		super(props);

		const notes = [
			{
				title: "Note #1",
				description: "Note description goes here."
			},
			{
				title: "Note #2",
				description: "Another note description goes here."
			}
		];

		this.state = {
			active: notes[1],
			notes: notes
		}
	}

	createNote() {
		const note = {
			title: 'Note #' + (this.state.notes.length + 1),
			description: 'This is a new note'
		}

		const notes = this.state.notes.slice().concat(note);

		this.setState(() => {
			return {
				active: note,
				notes: notes
			}
		})
	}

	deleteNote(note) {
		let notes = this.state.notes.slice();
		let index = notes.findIndex((n) => { return n.title === note.title; });
		if(index > -1) {
			notes.splice(index, 1);
		}
		this.setState(() => {
			return {
				active: null,
				notes: notes
			};
		});
	}

	selectNote(note) {
		this.setState(() => {
			return {
				active: note,
				notes: this.state.notes
			}
		})
	}

	render() {
		return (
			<div>
				<div className={styles.header}>
					<Toolbar active={this.state.active}
						onCreate={() => this.createNote()}
						onDelete={() => this.deleteNote(this.state.active)}
					/>
				</div>
				<div className={styles.body}>
					<Canvas active={this.state.active} notes={this.state.notes}
						onSelect={(note) => this.selectNote(note)}
					/>
				</div>
			</div>
		);
	}
}

export default App;