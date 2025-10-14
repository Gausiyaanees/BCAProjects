import React from 'react'
import K1 from './SHOPPING/kids4.jpg'
import K2 from './SHOPPING/kids2.jpg'
import K3 from './SHOPPING/kids3.jpg'
import K4 from './SHOPPING/kids4.jpg'
import K5 from './SHOPPING/kids5.jpg'
import K6 from './SHOPPING/kids6.jpg'
import K7 from './SHOPPING/kids7.jpg'
import K8 from './SHOPPING/kids8.jpg'


export default function Kids() {
  return (
    <div className="green">
      <h1 align='center'>KIDS SECTION</h1>
      <div className='container'>
        <div className='row'>
          <div className='col-md-3'>
            <img src={K1} alt="..."></img>
          </div>
          <div className='col-md-3'>
            <img src={K2} alt="..."></img>
          </div>
          <div className='col-md-3'>
            <img src={K3} alt="..."></img>
          </div>
          <div className='col-md-3'>
            <img src={K4} alt="..."></img>
          </div>
            </div>
            </div>
            <div className='container'>
        <div className='row'>
          <div className='col-md-3'>
            <img src={K5} alt="..."></img>
          </div>
          <div className='col-md-3'>
            <img src={K6} alt="..."></img>
          </div>
          <div className='col-md-3'>
            <img src={K7} alt="..."></img>
          </div>
          <div className='col-md-3'>
            <img src={K8} alt="..."></img>
          </div>
            </div>
            </div>
      
                    
        </div>
  )
}
