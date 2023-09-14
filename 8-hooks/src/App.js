import { useState } from "react";
const Button = ({text, click}) =>{
  return <button onClick={click}>{text}</button>
}

const App = () =>{
  const [counter, setCounter] = useState(0);
  const setCount = () => {
    setCounter(counter + 1);
};
const minusCount = () =>{
  setCounter(counter -1);
}
  return ( 
    <div>
        <h1>Total clicks: {counter}</h1>
        <Button text="+1" click={setCount}/>
        <Button text="-1" click={minusCount}/>
        {/*<button onClick={setCount}>+1</button>
        <button onClick={minusCount}>-1</button>*/}
    </div>
  );
} 

export default App;

