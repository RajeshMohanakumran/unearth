import React from 'react';
import './ChatPage.css';
import Main from './Components/Main/Main'
import Sidebar from './Components/Sidebar/Sidebar'

function ChatPage() {
  return (
    <div className='combine'>
    <Main/>
      <Sidebar/>
    </div>
  );
}

export default ChatPage;