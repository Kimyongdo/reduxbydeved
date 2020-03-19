import counterReducer from './counter';
import loggedReducer from './isLogged';
import {combineReducers} from 'redux';
//combineReducers는 reducers 폴더의 .js를 하나로 묶어주기 위해서 사용한다. 

const allReducers = combineReducers({ //allReducers이름은 아무거나 자유
      //counter : counterReducer         //count 이름도 자유롭게 설정
      counter : counterReducer,                     //하나로 썼다면 counterReducer : counterReducer 뜻임 
      isLogged :  loggedReducer,
      

}) 

export default allReducers;
