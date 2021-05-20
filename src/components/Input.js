import React from 'react'

const Input = ({ address, setAddress, subject, setSubject, body, setBody }) => {


  const handleClick = () => {
    if (!address || !subject || !body){
      console.log('Please Fill Out Each Field')
      return
    }
    console.log('address: ' + address)
    console.log('subject: ' + subject)
    console.log('body: ' + body)
  }

  return (
    <div className="App">
      <form>
        <input 
          type='text' 
          placeholder='address'
          value={address}
          onChange={e => setAddress(e.target.value)}
          className='text-input'
        />
      </form>

      <form>
        <input 
          type='text' 
          placeholder='subject'
          value={subject}
          onChange={e => setSubject(e.target.value)}
          className='text-input'
        />
      </form>

      <form>
        <input 
          type='text' 
          placeholder='body'
          value={body}
          onChange={e => setBody(e.target.value)}
          className='text-input'
        />
      </form>

      <button  
        onClick={handleClick}
      >
        console log
      </button>

    </div>
  );
}

export default Input
