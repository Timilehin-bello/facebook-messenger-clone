import React, { useEffect, useState } from 'react';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import Message from './component/Message/Message';
import db from './firebase/firebase';
import firebase from 'firebase';
import './App.css';
import FlipMove from 'react-flip-move';


function App() {

  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState('');

  useEffect(() => {
    db.collection('messages')
    .orderBy('timestamp', 'desc')
    .onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc => ({id: doc.id, message: doc.data()})))
    });
    
  
  }, [])

  useEffect(() => {
    setUsername(prompt('Please enter your name'))
    
  }, [])

  const sendMessage = event => {
    event.preventDefault();

    db.collection('messages').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput('')
  }

  const imageUrl = 'https://facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=100&h=100';
  return (
    
    <div className="App">
      <img  src={imageUrl} alt='Messenger Logo' />
      <h1>Hello Timmy Programmer </h1>
      <h2>Welcome {username}</h2>

      <form className='app__form' >
        <FormControl>
          <InputLabel >Enter a Message...</InputLabel>
          <Input value={input} onChange={event => setInput(event.target.value)}/>
          <Button disabled={!input} type='submit' onClick={sendMessage} >Send Message</Button>
        </FormControl>
      </form>

      <FlipMove>
        {messages.map(({id, message}) => (
          <Message key={id} username={username} message={message}/>
          ))
        }
      </FlipMove>
      
    </div>
  );
}

export default App;
