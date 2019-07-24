import React from 'react';
import styles from './style.module.css';

import Card from '../card/component';

class Canvas extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            activeCard: null
        }
    }

    activateCard() {

    }

    
    grabCard(card) {    
        this.setState(() => {
            return {
                activeCard: card
            };
        });
    }
    
    moveCard(event) {
        if(this.state.activeCard) {
            event.persist();
            console.log(event);
            this.state.activeCard.setState(() => {
                return {
                    x: event.clientX,
                    y: event.clientY
                };
            })
        }
    }
    
    releaseCard() {
        this.setState(() => {
            return {
                activeCard: null
            };
        });
    }

    render() {
        return (
          <div className={styles.canvas} onMouseMove={(event) => this.moveCard(event)} onMouseUp={() => this.releaseCard()}>
              <Card title="Card #1" description="First card description." onMouseDown={(card) => this.grabCard(card)}/>
          </div>
        );
    }

}

export default Canvas;