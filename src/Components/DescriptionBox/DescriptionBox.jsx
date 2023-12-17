import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">
            Description
        </div>
        <div className="descriptionbox-nav-box fade">
            Reviews (122)
        </div>
      </div>
      <div className='descriptionbox-description'>
        <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur eligendi perspiciatis, modi fugiat reiciendis aliquam unde quidem pariatur deleniti quam debitis ipsa, quasi quibusdam, repellat aut facere eos facilis quaerat et ducimus quis consequuntur inventore? Sit, accusantium a ratione blanditiis at nemo necessitatibus illo, iste, quas optio autem labore ipsa.
        </p>
      </div>

    </div>
  )
}

export default DescriptionBox
