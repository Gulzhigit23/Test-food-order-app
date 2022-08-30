
import { useEffect } from 'react';
import { useRef } from 'react';
import './App.css';




function App() {
const ref = useRef('red')


useEffect(() => {
  const currentDiv = ref.current.style
  const timerColor = setInterval(() => {
   currentDiv.background === 'red' 
   ? (currentDiv.background = 'green')
   : (currentDiv.background = 'red')

  },1000)
  return () => clearInterval(timerColor)
},[])

  return (
    <div className='App'>
  
  <div className='container' ref={ref}>

  </div>
    </div>
  );
}


export default App;


