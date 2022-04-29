import React, {useState} from 'react';
import './App.css';
import Account from './pages/accountPage/accountPage';
import Admin from'./pages/admin/admin';
import Counsellors from './pages/counsellors/counsellors';
import Landing from './pages/landing/landing';
import Login from './pages/login/login';
import PostForm from './pages/postForm/postForm'; 
import SignUp from './pages/signup/signup';
import InboxComponent from './InboxComponent';
import Stories from './pages/stories/stories';
import FullStory from './pages/fullStory/fullStory';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route exact path="/login" element={<Login   />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/home" element={<Stories />} />
          <Route exact path="/admin" element={<Admin />} />
          <Route exact path="/counsellors" element={<Counsellors />} />
          <Route exact path="/postform" element={<PostForm />} />
          <Route exact path="/profile" element={<Account />} />
          <Route exact path="/chat" element={<InboxComponent />} />
          <Route exact path="/fullstory" element={<FullStory />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
