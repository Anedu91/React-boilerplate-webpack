import {useState} from 'react';



const App = () => {
 
  const [counter, setCounter] = useState(0)

  const handleClick = () => {
    setCounter(counter + 1);
  }
  


  return (
    <div className="container">
      <h1>Hello, Angel from react and webpack</h1>
      <button onClick={handleClick}>Press this!</button>
      <div className="">{counter}</div>
      
    </div>
  )
}




export default App