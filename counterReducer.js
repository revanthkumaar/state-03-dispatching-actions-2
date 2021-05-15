//setting the initial state
const initialState = {
    counter:0
}

//redux implementation
const counterReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'INCREASE_COUNTER_ASYNC': {
        return {
          ...state,
          counter: state.counter + action.value,
        };
      }
      case 'DECREASE_COUNTER': {
        return {
          ...state,
          counter: state.counter - action.value,
        };
      }
      default: {
        return state;
      }
    }
  };
  
export default counterReducer;