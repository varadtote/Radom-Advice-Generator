import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import './MediaStyles.css';

import dividerSVG from './assets/pattern.svg';
import dice from './assets/dice.svg';

export default function App() {
    const [id, setid] = useState(1);
    const [advice, setadvice] = useState(
        'Do not compare yourself with others.',
    );

    function fetchAdvice() {
        try {
            const data = axios
                .get('https://api.adviceslip.com/advice')
                .then((data) => {
                    setid(data.data.slip.id);
                    setadvice(data.data.slip.advice);
                });
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <>
            <div className="App">
                <div className="quoteCard">
                    <p className="advice"># ADVICE {id}</p>
                    <div className="quote">"{advice}"</div>
                    <img src={dividerSVG} />
                    <button onClick={fetchAdvice}>
                        <img src={dice} alt="" />
                    </button>
                </div>
            </div>
        </>
    );
}
