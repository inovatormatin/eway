import React from 'react'
import './Categories.css'
import c1 from './category1.jpg'
import c2 from './category2.jpg'
import c3 from './category3.jpg'

const Categories = () => {
  const myData = [
      { image: c1, title: 'Women Collection', alt: 'category1' },
      { image: c2, title: 'Mens Collection', alt: 'category2' },
      { image: c3, title: 'Accessories', alt: 'category3' }
    ];  
  return (
    <section className='categories'>
        {myData.map((card , index) => 
            <div className='Card' key={index}>
                <img className='CardImg' src={card.image} alt={card.alt} />
                <div className='Cardtext'>
                    <h3>{card.title}</h3>
                    <button>Shop Now</button>
                </div>
            </div>
        )}
    </section>
  )
}

export default Categories;