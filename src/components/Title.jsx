import React from 'react'

function Title({title, span}) {
  return (
    <div className='title'>
        
            <h2><span>{span}</span>{title}</h2>
        
    </div>
  )
}

export default Title
