import React from 'react'
import A1 from './SHOPPING/bgimage.jpg'
import A2 from './SHOPPING/bgimage.jpg'
import A3 from './SHOPPING/bgimage.jpg'

export default function Silder() {
  return (
    <div>
      <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={A1} className="d-block w-100" alt="..."></img>
    </div>
    <div class="carousel-item">
      <img src={A2} className="d-block w-100" alt="..."></img>
    </div>
    <div class="carousel-item">
      <img src={A3} className="d-block w-100" alt="..."></img>
    </div>
  </div>
</div>
    </div>
  )
}
