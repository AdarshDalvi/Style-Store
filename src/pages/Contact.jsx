import {useState,useRef} from 'react'
import './page-CSS/Contact.scss'
import {useForm} from 'react-hook-form'
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';


export default function Contact() {
  const {register, handleSubmit, formState} = useForm({
    defaultValues: JSON.parse(localStorage.getItem('cus-contact')) || {}
  })
  const [loading, setLoading ] = useState(false)
  const {errors} = formState
  const formRef = useRef()

  const sendEmail = async() => {
    let noError = Object.keys(errors).every(key=>errors[key]==='')
    if(!noError){
      return
    }

    try {
      setLoading(true)
      await emailjs.sendForm('service_tnr4zul', 'template_o71kr8k', formRef.current, '2pp1Id4bFU8kDT_UP')
      setLoading(false)
      notify('Email sent successfully!','success')
    } catch (error) {
      setLoading(false)
      notify('Something went wrong !','error')
    }
  }

  const notify = (message, notifyMethod)=>{
    toast[notifyMethod](message, {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
  }

  return (
    <div className='contact-container'>
      <ToastContainer/>
      <h2>Contact Us</h2>
      <form ref={formRef} className='contact-form' noValidate onSubmit={handleSubmit(sendEmail)}>
        <div className='input-i'>
          <label htmlFor="name">Name</label>
          <input id='name' name='name' type="text" {...register('name',{
            required:{
              value:true,
              message: "Name is required!"
            },
            minLength:{
              value: 3,
              message: "Name should be atleast 3 characters or more!"
            }
          })}/>
          {errors.name?.message && <span>{errors.name.message}</span>}
        </div>
        <div className='input-i'>
          <label htmlFor="email">Email</label>
          <input id='email' name='email' type="email" {...register('email',{
            required:{
              value:true,
              message: "Email is required!"
            },
            pattern:{
              value: /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/gm,
              message: 'Email is not valid'
            }
          })}/>
          {errors.email?.message && <span>{errors.email.message}</span>}
        </div>
        <div className='input-i'>
          <label htmlFor="message">Message</label>
          <textarea rows='9' id='message' name='message' type="text" {...register('message',{
            required:{
              value:true,
              message: "Can't send an empty message!"
            }
          })}/>
          {errors.message?.message && <span>{errors.message.message}</span>}
        </div>
        <div className='input-i'>
          <button type='submit'>Send {loading && <img className='spinner' src="/general/spinner.svg" alt="" />} </button>
        </div>
      </form>
    </div>
  )
}
