import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {increment} from './actions'
import {decrement} from './actions'



function App() {
  //크롬에서 볼 수 있듯이 state안에 counter와 islogged가 있음. 
  //state => 의 state는 크롬에서 볼 수 있는 state임. 
  const counter = useSelector(state => state.counter);
  const islogged = useSelector(state => state.islogged);
  const dispatch = useDispatch(); //action 폴더와 

  return (
    <div className="App">
      <header className="App-header">
         <h1>Counter {counter}</h1>
         <button onClick={()=> dispatch(increment(5))}> + </button>
         <button onClick={()=> dispatch(decrement())}> - </button>

        {islogged ? <h3>Valuable Information i shouldn't see </h3> : '' }
         
      </header>
    </div>
  );
}

export default App;
