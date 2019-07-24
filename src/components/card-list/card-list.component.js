import React from 'react';
import { Card } from '../card/card.component'
import './card-list.css';

export const CardList = (props) => {
    return(
        <div className='container'>
            <div className='row'>
            {
                props.monsters.map(monster =>
                    <div key={monster.id} className='col-md-3 card-effect'> 
                        <Card item  = {monster}></Card>
                    </div>)
            }
            </div>
        </div>
    )
};