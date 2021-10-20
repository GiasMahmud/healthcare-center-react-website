import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './Componants/Home/Home';
import Header from './Componants/Header/Header';
import AuthProvider from './context/AuthProvider';
import SigningUp from './Componants/SigningUp/SigningUp';
import Details from './Componants/Details/Details';
import PrivateRoute from './Componants/PrivateRoute/PrivateRoute';
import Doctors from './Componants/Doctors/Doctors';
import Services from './Componants/Services/Services';
import AboutUs from './Componants/AboutUs/AboutUs';
import Footer from './Componants/Footer/Footer';
import NotFound from './Componants/NotFound/NotFound';

function App() {
  return (
    <div className="App bg-info">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute path="/doctors">
              <Doctors></Doctors>
            </PrivateRoute>
            <PrivateRoute path="/services">
              <Services></Services>
            </PrivateRoute>
            <Route path='/signup'>
              <SigningUp></SigningUp>
            </Route>
            <Route path='/aboutus'>
              <AboutUs></AboutUs>
            </Route>
            <PrivateRoute path='/details/:id'>
              <Details></Details>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;