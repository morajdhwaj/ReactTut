import React from 'react'

const Name = (props) => {
  return (
    <div>
       Name=  {props.name}
        <br/>
       Class=  {props.class}
        <br/>
        Weight = {props.weight}
    </div>
  )
}

export default Name