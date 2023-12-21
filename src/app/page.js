'use client'

import Image from 'next/image'
import styles from './page.module.css'
import { useState } from 'react';
import SuccessModal from './components/modal';

export default function Home() {
  let [formData, setFormData] = useState({})
  let [submitStatus, setSubmitStatus] = useState(false)

  function handleSubmit(e){
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    const formJson = Object.fromEntries(formData.entries());

    console.log(formJson)

    setFormData(formJson)
    setSubmitStatus(true)
  }

  return (
    <div className='main'>
      <h1>Watch Registration</h1>
      <p>On this website, you can register your newly purchased watch to either your right or your left hand.</p>
      <p>Warning! This can only be completed within the first 24 hours of you receiving the watch</p>
      <p>Failure to register prior to this means that your watch will become unauthorised and need to be discarded</p>
      <br/>

      <form method="get" onSubmit={handleSubmit}>

      <label>
        Watch ID: <input name='watchID'/>
      </label>

      <br/>
      <br/>

      <label>
        <input type='radio' name='handUsed' value='right'/>
        Right
      </label>

      <label>
        <input type='radio' name='handUsed' value='left'/>
        Left
      </label>

      <br/>
      <br/>

      <button type='submit'>Submit</button>

      </form>

      <br/>

      {submitStatus ? (
        <SuccessModal
          data = {formData}
        />
      ) : null}
    </div>
  )
}
