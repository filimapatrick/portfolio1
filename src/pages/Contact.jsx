import React from 'react'
import Title from '../components/Title'
import PrimaryButton from '../components/PrimaryButton'
// import ContactItem from '../components/ContactItem'
// import { FaPhone,FaEnvelope,FaPeriscope } from 'react-icons/fa';







function Contact() {
 
  return (
      <>
     <div className='page_layout'> 
         <Title span={'Co'} title={'ntact'}  />
     <hr style={{marginTop:'1rem',opacity:'0.3'}}/>

<div className='map_area'>
<div className="map-sect">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2519.700327595181!2d-0.13858868403737226!3d50.836714467337785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487585104ec1fe1b%3A0x28b5349b15ce0c4d!2sLondon%20Road%20(Brighton)%20Train%20Station%20-%20Southern%20Railway!5e0!3m2!1sen!2suk!4v1611468671158!5m2!1sen!2suk" width="600" height="450" frameBorder="0" style={{border:0}} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
                </div>
</div>
     
     <hr style={{marginTop:'1rem',opacity:'0.3'}}/>
     <Title span={'Contact'} title={'Form'}  />
 




     <form  className="form">
                        <div className="contact_input">

                           <div className='form-field'>  
                            <input type="text" id="name" placeholder='Full Name' />
                        </div>


                        <div className="form-field">
                           
                            <input type="email" id="email" placeholder='Email' />
                        </div>

                        </div>

                        
                        <div className="form-field">

                            <textarea name="textarea" id="textarea" cols="60" rows="10" placeholder='Your Message'></textarea>
                        </div>
                        <div className="form-field f-button">
                            <PrimaryButton title={'Send Message'} />
                        </div>
                    </form>

    
     </div>
    </>
  )
}


export default Contact
