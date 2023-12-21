import { useState } from 'react';
import axios from 'axios';
import './App.css'
import desktop from './assets/pattern-divider-desktop.svg'
import mobile from './assets/pattern-divider-mobile.svg'

function App() {
  const [advice, setAdvice] = useState('');

  const fetchAdvice = async () => {
    try {
      const response = await axios.get('https://api.adviceslip.com/advice');
      const adviceData = response.data.slip.advice;
      setAdvice(adviceData);
    } catch (error) {
      console.error('Error fetching advice:', error);
    }
  };

  return (
    <div>
      <div className="container">
        <h1 className="title">Advice #<span>{advice}</span></h1>
        <p className="text"></p>

        <picture>
          <source
            media="(min-width: 768px)"
            src={desktop}
          />
          <img src={mobile} />
        </picture>

        <div>
          <button onClick={fetchAdvice}>
            <img src={mobile} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
