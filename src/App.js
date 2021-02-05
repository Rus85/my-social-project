import React, { Component, Suspense } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Friend from './components/Navbar/Friends'
import { BrowserRouter, Route, withRouter } from 'react-router-dom';
// import DialogsContainer from './components/Dialogs/Dialogs-container';
import UsersContainer from './components/Users/UsersContainer';
// import ProfileContainer from './components/Profile/ProfileInfo/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import { connect, Provider } from 'react-redux';
import { initializeApp } from '../src/redux/app-reducer'
import { compose } from 'redux';
import Preloader from './components/common/Preloader/Preloader';
import store from './redux/redux-store';

const DialogsContainer = React.lazy(() => import('./components/Dialogs/Dialogs-container'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileInfo/ProfileContainer'));






class App extends Component {

  componentDidMount() {

    this.props.initializeApp()
  }

  render() {
    if (!this.props.initialized) {

    return <Preloader />
    }
    return (

      <div className='app-wrapper' >
        <HeaderContainer />
        <Navbar />

        {/* persons={props.state.friendsPage.persons} */}


        <div className='app-wrapper-content' >
        <Suspense fallback={<div><Preloader /></div>}>
        <section>
          <Route path='/dialogs'
            render={() => <DialogsContainer />} />
      

          <Route path='/profile/:userId?'
            render={() => <ProfileContainer />} />
                  </section>
      </Suspense>

          <Route path='/users'
            render={() => <UsersContainer />} />

          <Route path='/login'
            render={() => <Login />} />

          <Route path='/news' component={News} />


        </div>

      </div >

    )
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

let AppContainer = compose(
  withRouter,
  connect(mapStateToProps, { initializeApp }))(App)

  const SamuraiJSApp = (props) => {
    return <BrowserRouter>
    <Provider store={store}>
        <AppContainer />
    </Provider>
</BrowserRouter>
  }

  export default SamuraiJSApp