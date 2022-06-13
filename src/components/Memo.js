
import { useState, useMemo } from 'react';
import './styles/App.css';

const createUser = (name, surname) => {
  const user = {name, surname}
  console.log(user)
  return user
}

export const Memo = () => {
  const [name, setName]=useState('')
  const [surName, setSurName]=useState('')
  const [count, setCount]=useState(0)
  const man = useMemo(() => createUser(name, surName), [name, surName]);
  return (
    <div>
      <p onClick = {() => setCount(count + 1)}>Press: {count}</p>
      <input type='text' value={name} onChange = {(e) => setName(e.target.value)}/>
      <input type='text' value={surName} onChange = {(e) => setSurName(e.target.value)}/>
      <button>Sent</button>
      <br/>
      <pre>{JSON.stringify(man, null, 2)}</pre>
    </div>
  );
}
