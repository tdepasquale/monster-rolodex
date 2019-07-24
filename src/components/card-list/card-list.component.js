import React from 'react';
import { Card } from '../card/card.component'

export const CardList = (props) => {
    return(
        <div className='container'>
            <div className='row'>
            {
                props.monsters.map(monster =>
                    <div key={monster.id} className='col-md-3'> 
                        <Card item  = {monster}></Card>
                    </div>)
            }
            </div>
        </div>
    )
};