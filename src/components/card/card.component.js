import React from 'react';

export const Card = props => {
    return(
        <div className='card my-2 bg-info border border-dark' key = {props.item.id} >
            <img className="p-2" alt="monster" src={`https://robohash.org/${props.item.id}?set=set2&size=180x180`}></img>
            <h5 className="pt-3">{props.item.name}</h5>
        </div>
    )
}