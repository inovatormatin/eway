import React from 'react'
import './MiniCard.css'

const MiniCard = ({img, title, date}) => {
    return (
        <div className='miniCard'>
            <img src={img} alt={title} />
            <div>
                <h5>{title}</h5>
                <span>{date}</span>
            </div>
        </div>
    )
}
    
export default MiniCard; 