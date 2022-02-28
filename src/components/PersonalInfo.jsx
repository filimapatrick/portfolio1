import React from 'react'

function PersonalInfo() {
  return (
    <div>
        <h4>I am <span>Lorem Ipsum</span></h4>
      <div className="right-content">
                
                
                <p className="paragraph">
                    Lorem ipsum dolor sit amet, consectetur<br/>
                     adipisicing elit. Voluptatem, natus quas vero <br/>
                     enim praesentium delectus est id fugiat<br/>
                    adipisci recusandae at maxime veritatis! <br/>
                    Lorem ipsum, dolor sit amet consectetur .<br/>
                     Excepturi, nesciunt.
                    
                </p>
                <div className="about-info">
                    <div className="info-title">
                        <p className='info_background'>Full Name:</p>
                        <p className='info_background'>Nationality: </p>
                        <p className='info_background'>Languages: </p>
                        <p className='info_background'>Location:</p>
                        <p className='info_background'>Service:</p>
                    </div>

                    <div className="info">
                        <p> Lorem Ipsum</p>
                        <p style={{paddingTop:'8px'}}> Spainsh </p>
                        <p style={{paddingTop:'8px'}}>  English </p>
                        <p style={{paddingTop:'4px'}}> London</p>
                        <p style={{paddingTop:'4px'}}> Freelance</p>
                    </div>
                    
                </div>
              
            </div>
    </div>
  )
}

export default PersonalInfo
