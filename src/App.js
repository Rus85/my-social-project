import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Dialogs from './components/Dialogs/Dialogs';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import Friend from './components/Navbar/Friends'
import { BrowserRouter, Route } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/Dialogs-container';





const App = (props) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        
        {/* persons={props.state.friendsPage.persons} */}
      

        <div className='app-wrapper-content'>
          <Route path='/dialogs'
            render={() => <DialogsContainer
               />} />

          <Route path='/profile'
            render={() => <Profile
               />} />

          <Route path='/news' component={News} />


        </div>

      </div>
    </BrowserRouter>
  )
}

export default App;