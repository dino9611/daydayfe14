const INITIAL_STATE={
    id:0,
    username:'',
    password:'',
    role:''
}
const reducers=(state=INITIAL_STATE,action)=>{
    switch (action.type) {
        case 'LOGIN':
            return {...state,...action.payload}
        case 'LOGOUT':
            return INITIAL_STATE
        default:
            return state
    }
    // if(action.type=== 'LOGIN'){
        // return {...state,...action.payload}    
    // }else if(action.type==='LOGOUT'){
    //     return INITIAL_STATE
    // }else{
    //     return state
    // }
}

export default reducers