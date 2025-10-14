import React from 'react'
import M1 from'./SHOPPING/men2.jfif'
import M2 from'./SHOPPING/men3.jfif'
import M3 from'./SHOPPING/men4.jpg'
import M4 from'./SHOPPING/men5.jpg'
import M5 from'./SHOPPING/men6.jpg'
import M6 from'./SHOPPING/men8.jpg'
import M7 from'./SHOPPING/men9.jpg'
import M8 from'./SHOPPING/men10.jpg'

export default function
() {
  return (
    <div className="red">
      <h1 align='center'>MEN SECTION</h1>
        <div className='container'>
                        <div className='row'>
                          <div className='col-md-3'>
                            <img src={M1} alt="..."></img>
                          </div>
                          <div className='col-md-3'>
                            <img src={M2} alt="..."></img>
                          </div>
                          <div className='col-md-3'>
                            <img src={M3} alt="..."></img>
                          </div>
                          <div className='col-md-3'>
                            <img src={M4} alt="..."></img>
                          </div>
                
                
                        </div>
                      </div>
                      <div className='container'>
                        <div className='row'>
                          <div className='col-md-3'>
                            <img src={M5} alt="..."></img>
                          </div>
                          <div className='col-md-3'>
                            <img src={M6} alt="..."></img>
                          </div>
                          <div className='col-md-3'>
                            <img src={M7} alt="..."></img>
                          </div>
                          <div className='col-md-3'>
                            <img src={M8} alt="..."></img>
                          </div>
                
                
                        </div>
                      </div>
                
    </div>
  )
}
