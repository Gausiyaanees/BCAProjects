import React from 'react'
import W1 from './SHOPPING/woman1.jpg'
import W2 from './SHOPPING/women2.jpg'
import W3 from './SHOPPING/women3.jpeg'
import W4 from './SHOPPING/women5.jpg'
import W5 from './SHOPPING/women6.jpg'
import W6 from './SHOPPING/women7.jpg'
import W7 from './SHOPPING/women8.jpg'
import W8 from './SHOPPING/women9.jpg'


export default function Women() {
  return (
    <div className="pink">
         <h1 align='center'>WOMEN SECTION</h1>
        <div className='container'>
                <div className='row'>
                  <div className='col-md-3'>
                    <img src={W1} alt="..."></img>
                  </div>
                  <div className='col-md-3'>
                    <img src={W2} alt="..."></img>
                  </div>
                  <div className='col-md-3'>
                    <img src={W3} alt="..."></img>
                  </div>
                  <div className='col-md-3'>
                    <img src={W4} alt="..."></img>
                  </div>
                   <div className='col-md-3'>
                    <img src={W5} alt="..."></img>
                  </div>
                   <div className='col-md-3'>
                    <img src={W6} alt="..."></img>
                  </div>
                   <div className='col-md-3'>
                    <img src={W7} alt="..."></img>
                  </div>
                   <div className='col-md-3'>
                    <img src={W8} alt="..."></img>
                  </div>
        
        
                </div>
              </div>
              
    </div>
  )
}
