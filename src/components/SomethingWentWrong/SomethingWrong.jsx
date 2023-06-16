import React from 'react'
import './SomethingWrong.scss' //updated

export default function SomethingWentWrong({buttonFunction}) {
  return (
    <div className='some-container'>
      <h2>Oops!</h2>
      <h3>Something Went Wrong!</h3>
      <button onClick={()=>buttonFunction()}>Retry</button>
    </div>
  )
}
