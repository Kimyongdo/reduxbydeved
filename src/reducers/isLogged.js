const loggedReducer = (state=false, action) =>{

    switch(action.type){
        case 'SIGN_IN':
            return !state //로그인을 했다면 
        default :
            return state;//false    
    }
};

export default loggedReducer;
