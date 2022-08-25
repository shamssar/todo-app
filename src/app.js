import React from 'react';
import ToDo from './components/todo';
import SettingsContext from './context/settings/settings';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from './context/settings/Form';
import Header from './components/Header';
import Footer from './components/Footer';
import './app.scss';

function App() {
    return (
      <>
     
        <Header />
          <SettingsContext>
            <ToDo />
            <Form />
          </SettingsContext>
        <Footer />
     
    </>
    );
  }
  
export default App;