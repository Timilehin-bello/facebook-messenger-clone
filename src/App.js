import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import React, { useState } from 'react';
import './App.css';
import Message from './component/Message';

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState(['Hello', 'Yooo', 'Whatsup']);
 


  

  const sendMessage = event => {
    event.preventDefault()
    setMessages([...messages, input]);
    setInput('')
  }


  return (
    <div className="App">
      <h1>Hello Timmy Programmer </h1>
      <form >

        <FormControl>
          <InputLabel >Enter a Message...</InputLabel>
          <Input value={input} onChange={event => setInput(event.target.value)}/>
          <Button disabled={!input} type='submit' onClick={sendMessage} >Send Message</Button>
        </FormControl>
        
          
      </form>
      {messages.map(message => (
         <Message message={message}/>
        ))
      }
    </div>
  );
}

export default App;
