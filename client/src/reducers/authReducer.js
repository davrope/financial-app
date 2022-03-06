import { FETCH_USER } from '../actions/types';

export default function foo(state = null, action){
  switch (action.type) {
    case FETCH_USER:
      return action.payload || false;
    default:
      return state;
  }
}

// export default function (state= {}, action){
//   console.log(action);
//   switch(action.type){
//     default:
//       return state;
//   }
// }

// const INITIAL_STATE = {
//   isSignedIn:null
// }

// export default (state = INITIAL_STATE, action)=>{
//   switch(action.type){
//     case 'SIGN_IN':
//       return state
//     case 'SIGN_OUT':

//     default:
//       return state;
//   }
// }