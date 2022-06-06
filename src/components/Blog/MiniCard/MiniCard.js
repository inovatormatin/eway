import React,{ useContext } from 'react'
import userContext from '../../../context/user/userContext';
import './MiniCard.css'

const MiniCard = ({img, title, date}) => {
    const a = useContext(userContext);
    return (
        <div className='miniCard'>
            <img src={img} alt={title} />
            <div>
                <h5>{title}</h5>
                <span>{date}</span>
                <span>{a.name}</span>
                <span>{a.class}</span>
            </div>
        </div>
    )
}
    
export default MiniCard; 