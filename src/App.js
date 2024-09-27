import React from 'react';
import './App.css';
import AppHeader from './components/header.js';
import Fact from './components/fact.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppFooter from './components/footer.js';
import Introduction from './components/introduction.js';

function App() {
  return (
    <div>
    <header>
      <AppHeader/> 
    </header>
    <main>
      <Introduction/>
      <Fact/>
    </main>
    <footer>
      <AppFooter/>
    </footer>
    </div>
  );
}

export default App;
