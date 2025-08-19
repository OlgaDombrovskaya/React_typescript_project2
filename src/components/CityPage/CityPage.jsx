import React from 'react'
import './CityPage.css'
import Berlin2 from "'./img/ber2.jpg'"

export default function CityPage() {
  return (
    <div className='cityClass'>
        <h1>Все о городе</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Explicabo omnis, magni fuga voluptatem alias perferendis
        accusantium quam numquam animi. Odit?</p>
      <img src="/ber.jpg" alt="" />
      <img src={Berlin2} alt="" />
    </div>
  )
}
