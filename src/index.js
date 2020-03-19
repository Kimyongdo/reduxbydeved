import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


import {createStore} from 'redux';
import allReducers from './reducers'; //index.js는 안써도 자동으로 index.js부터 찾음 
import {Provider} from 'react-redux';


//redux devtools extension을 설치할 것 (크롬) 
//https://github.com/zalmoxisus/redux-devtools-extension

//github 에 있는
//window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()을 추가한다.
const Mystore =createStore(allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
 
 

ReactDOM.render(
    //provider를 감싸고 provider에 원래 있는 store에다가 지정한 Mystore를 넣어준다. 
<Provider store={Mystore}> 
    <App />
</Provider>, 


document.getElementById('root'));
serviceWorker.unregister();






// import {createStore} from 'redux'; //create store;

// //STORE -> GLOBALIZED STATED(all infomation )

// //ACTION INCREMENT (naming what you want to do ) - 버튼을 누르면 숫자 1이 올라가게 하는 액션의 이름 
// // 모든 액션은 function이며 obejct를 return한다. 
// const increment = (()=>{
//     return{
//         type:'INCREMENT' //type이 지정할 이름 
//     }
// })

// const decrement = (()=>{
//     return{
//         type:'DECREMENT' 
//     }
// })


// //REDUCER -> chekcing
// const counter = (state=0, action) =>{ //count는 초기값을 0으로 다음 인자는 action
//     // eslint-disable-next-line default-case
//     switch(action.type){
//         case "INCREMENT" : 
//             return state+1;
//         case "DECREMENT" :
//             return state-1;
//     }
// };

// let store = createStore(counter);

// //Display it in the console
// store.subscribe(()=> console.log(store.getState()));
// //1
// //0
// //-1

// //DISPATCh -> 실제로 실행되는 곳 -> action -> reudcer -> store update 
// store.dispatch(increment());//1
// store.dispatch(decrement());//0 
// store.dispatch(decrement());//-1 


// ReactDOM.render(<App />, document.getElementById('root'));
// serviceWorker.unregister();
