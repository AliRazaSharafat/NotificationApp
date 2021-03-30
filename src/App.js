import React from 'react'
import './App.css';
import { configureNotification } from './services/firebase-messaging-sw'

function App() {
  return (
    <div className="App">
      PWA Push Notifications <br />
      <button onClick={configureNotification}>Configure Notification</button>
    </div>
  );
}

export default App;
