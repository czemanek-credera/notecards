import React from 'react';
import styles from './style.module.css';

import Card from '../card/component';

class Canvas extends React.Component {

    //  props: {
    //      active
    //      cards
    //  }

    constructor(props) {
        super(props);

        this.state = {
            drag: null
        }
    }

    onMouseNone(event) {
        if(event.target.id === 'canvas') {
            this.props.onSelect(null);
            this.setState(() => {
                return {
                    drag: null
                };
            });
        }
    }

    onMouseDown(card, note) {
        this.props.onSelect(note);
        this.setState(() => {
            return {
                drag: card
            }
        });
    }

    onMouseMove(event) {
        if(this.state.drag) {
            this.state.drag.move(event.clientX, event.clientY);
        }
    }

    onMouseUp() {
        this.setState(() => {
            return {
                drag: null
            }
        })
    }

    render() {
        const cards = this.props.notes.map((note) => {
            return <Card
                key={note.title}
                title={note.title}
                description={note.description}
                active={note === this.props.active}
                onMouseDown={(card) => { this.onMouseDown(card, note); } }
            />
        });

        return (
            <div id="canvas" className={styles.canvas}
                onMouseDown={(event) => this.onMouseNone(event)}
                onMouseMove={(event) => this.onMouseMove(event)}
                onMouseUp={() => this.onMouseUp()}
            >
                {cards}
            </div>
        );
    }

}

export default Canvas;