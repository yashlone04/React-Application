import React from 'react'

 export const Hero = ({heroname}) => {
    if(heroname==='joker')
    {
        throw new Error("Not a Hero")
    }
  return (
    <div>
      <h4>{heroname}</h4>
    </div>
  )
}

export default Hero
