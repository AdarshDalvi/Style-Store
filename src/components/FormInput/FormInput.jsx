import React from 'react'
import './FormInput.scss'

export default function FormInput({name, register, rules,label, id, type,errors}) {


    return (
    <div className='input-container'>
        <label htmlFor={id}>{label}</label>
        <input 
          id={id}
          type={type} 
          name={name}
          {...register(name, rules)}
        />
        {errors && <span>{errors}</span>}
    </div>
  )
}
