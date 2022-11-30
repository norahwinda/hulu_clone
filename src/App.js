import React from 'react';
import './App.css';
import Header from './Header'
import Nav from './Nav';
import Requests from './Requests';
import Result from './Result';

function App() {

  const [selectedOption, setSelectedOption] = React.useState(Requests.fetchTrending)
  return (
    <div className="app">
      <Header />

      <Nav setSelectedOption={setSelectedOption} />

      <Result selectedOption={selectedOption} />
    </div>
  );
}

export default App;
