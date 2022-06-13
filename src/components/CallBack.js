
import { useCallback, useEffect, useState } from 'react';
import './styles/App.css';

export const CallBack = () => {
  const [message]=useState('Hello')
  const [count, setCount]=useState(0)

  const greet = useCallback(text => {
    console.log(text);
  }, [])

  useEffect(()=> {
    greet(message)
  }, [message, greet])
  

  return (
    <div>
      <div>
        <p onClick = {() => setCount(count + 1)}>Press: {count}</p>
      </div>
    </div>
  );
}
