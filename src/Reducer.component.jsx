import { useReducer } from "react";

const reducer=(state,action)=>{

  switch (action.type) {
    case "increment":
      return{...state, count:state.count+1}
      case "decrement":
        return{...state,count:state.count-1}
        case "userInput":
          return{...state,textInput:action.paylod}
    default:
      return state;
  }
}

const Reducer = () => {
  const [state,dispatch]=useReducer(reducer,{count:0,textInput:""})
  return (
    <>
      <main>
        <h1>{state.textInput}</h1>
        <h1>{state.count}</h1>
    <input onChange={(e)=>dispatch({type:"userInput",paylod:e.target.value})} type="text" />
    <button onClick={()=>dispatch({type:"increment"})}>+</button>
    <button onClick={()=>dispatch({type:"decrement"})}>-</button>

       
      </main>
    </>
  );
};
export default Reducer;









// import { useReducer } from "react";

// const ACTION = {
//   INCREAMENT: "increment",
//   DECREMENT: "dicrement",
//   USEINPUT: "useInput",
//   CHANEGCOLORE: "changeColor",
// };
// const reducer = (state, action) => {
//   switch (action.type) {
//     case ACTION.INCREAMENT:
//       return { ...state, count: state.count + 1 };

//     case ACTION.DECREMENT:
//       return { ...state, count: state.count - 1 };

//     case ACTION.USEINPUT:
//       return { ...state, useInput: action.payload };

//     case ACTION.CHANEGCOLORE:
//       return { ...state, color: !state.color };

//     default:
//    throw new Error();
//     ;
//   }
// };

// const Redu = () => {
//   const [state, dispach] = useReducer(reducer, {
//     count: 0,
//     useInput: "",
//     color: false,
//   });

//   return (
//     <>
//       <main style={{ color: state.color ? "#B22020" : "#09C812" }}>
//         {state.count}
//         {state.useInput}
//         <input
//           type="text"
//           onChange={(e) =>
//             dispach({ type: ACTION.USEINPUT, payload: e.target.value })
//           }
//           value={state.useInput}
//         />
//         <button onClick={() => dispach({ type: ACTION.INCREAMENT })}>+</button>
//         <button onClick={() => dispach({ type: ACTION.DECREMENT })}>-</button>
//         <button onClick={() => dispach({ type: ACTION.CHANEGCOLORE })}>
//           color
//         </button>
//         <button onClick={() => dispach({ type:"asdasd"})}>+</button>

//       </main>
//     </>
//   );
// };

// export default Redu;

// import { useReducer } from "react";

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "increment":
//       return { ...state, count: state.count + 1 };
// s
//     case "decreme nt":
//       return { ...state, count: state.count - 1 };

//     case "useInput":
//       return { ...state, ustInput: action.payload };

//     case "color1":
//       return { ...state, color: !state.color };

//     default:
//       return state;
//   }
// };
// const Test = () => {
//   const [state, dispatch] = useReducer(reducer, {
//     count: 0,
//     ustInput: "",
//     color: false,
//   });

//   return (
//     <>
//       <main style={{ color: state.color ? "#7FFFD4" : "#FFF952" }}>
//         <h1>{state.count}</h1>
//         <h1>{state.ustInput}</h1>
//         <input
//           type="text"
//           value={state.ustInput}
//           onChange={(e) =>
//             dispatch({ type: "useInput", payload: e.target.value })
//           }
//         />
//         <button onClick={() => dispatch({ type: "increment" })}>+</button>
//         <button onClick={() => dispatch({ type: "decrement" })}>-</button>
//         <button onClick={() => dispatch({ type: "color1" })}>color</button>
//       </main>
//     </>
//   );
// };

// export default Test;
