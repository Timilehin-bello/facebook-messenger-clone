import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import './App.css';
import Message from './component/Message/Message';


function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([{username: 'Timmy', text: 'Hey whats up'}, {username: 'Bello', text: "How are you?"}]);
  const [username, setUsername] = useState('');


  useEffect(() => {
    setUsername(prompt('Please enter your name'))
    
  }, [])

  const sendMessage = event => {
    event.preventDefault()
    setMessages([...messages, {username: username, text: input}]);
    setInput('')
  }


  return (
    <div className="App">
      <h1>Hello Timmy Programmer </h1>
      <h2>Welcome {username}</h2>
      <form >

        <FormControl>
          <InputLabel >Enter a Message...</InputLabel>
          <Input value={input} onChange={event => setInput(event.target.value)}/>
          <Button disabled={!input} type='submit' onClick={sendMessage} >Send Message</Button>
        </FormControl>
        
          
      </form>
      {messages.map(message => (
         <Message username={username} message={message}/>
        ))
      }
    </div>
  );
}

export default App;
