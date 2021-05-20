import './App.css';
import Form from './components/Form';
import Input from './components/Input';
import {useState} from 'react'

function App() {

  const [address, setAddress] = useState('')
  const [subject, setSubject] = useState('')
  const [body, setBody] = useState('')

  return (
    <div className="App">
      <Input 
        address={address}
        setAddress={setAddress}
        subject={subject}
        setSubject={setSubject}
        body={body}
        setBody={setBody}
      />
      <Form/>
    </div>
  );
}

export default App;
