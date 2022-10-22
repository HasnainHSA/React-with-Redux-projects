const initailState = 0;

// Reducer tell us how to do?

//we are defining condition for the states
const changeNum = (state = initailState, action) =>{
    switch (action.type) {
        case 'INCREMENT': return state + 1;
        case 'DECREMENT': return state - 1;
        case 'REST': return 0 ;
        default : return state;
    }
}


export default changeNum;