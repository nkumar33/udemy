// import React from 'react';  //react is defined
// import ReactDOM from 'react-dom'; //reactDOM is defined
// import './index.css';


// class App extends React.Component {
//     //   vbvbn
//     state = {
//       btn_color: "button-red",
  
//       ntn_color: "button-grey"
//     };
//     //
//     onClick = (event) => {
//       this.setState({
//         btn_color: "button-grey",
//         ntn_color: "button-black"
//       });
//     };
//     render() {
//       return (
//         <div>
//           <button onClick={this.onClick} className={this.state.btn_color}>
//             Click Me!
//           </button>
//           <div>nitin</div>
//           <button onClick={this.onClick} className={this.state.ntn_color}>
//             Click Me!
//           </button>
//         </div>
//       );
//     }
//   }
  
//   ReactDOM.render(<App />, document.querySelector("#root"));
  





import React from "react";
import ReactDOM  from "react-dom";

function getButtonText(){   //getbuttonTcxt function is defined here
  return 'Hi there!';
}
const App =() =>{

  return(
    <div>
      <label htmlFor="name" className='label'>Enter E-Mail</label>
       <input id="name" type="text" />
       <button style={{backgroundColor: 'red',color: 'white'}} > 
       {getButtonText()} {/* here getButtonText function is called */}
       </button>
    </div>
  )
}
ReactDOM.render (
  <App/>,
  document.querySelector('#root')
)