import Sidebar from './Sidebar';
import ChatWindow from './ChatWindow';
import { MyContext } from './MyContext';
import './App.css';
import { useState } from 'react';

export default function App() {
  const [prompt,setPrompt] = useState("");
  const [reply, setReply] = useState(null);
   const providerValues = {
    prompt,setPrompt,
    reply,setReply
   };
  return (
   
    <div className="App">
      <MyContext.Provider value={providerValues}>
      <Sidebar />
      <ChatWindow />
      </MyContext.Provider>
    </div>
  );
}