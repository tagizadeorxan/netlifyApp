import React from 'react';
import './index';
import Timer from './Tuesday/Timer';
import Menu from './Tuesday/Menu';
import UserLogin from './Tuesday/UserLogin';
import Counter from './Counter';
import Dice from './Dice';
import Navigation from './Navigation'
import Slider from './Slider';

  

class App extends React.Component {
state = {active:"counter"} ;
 

  render() {
     
  
    return(
      <>
      <div className="exercises">
      <div onClick={()=>this.setState({active:"counter"})}  className="exercise">Counter</div>
      <div onClick={()=>this.setState({active:"dice"})}  className="exercise">Dice</div>
      <div onClick={()=>this.setState({active:"navigation"})}  className="exercise">Navigation</div>
      <div onClick={()=>this.setState({active:"slider"})}  className="exercise">Slider</div>
      <div onClick={()=>this.setState({active:"timer"})}  className="exercise">Timer</div>
      <div onClick={()=>this.setState({active:"menu"})}  className="exercise">Menu</div>
      <div onClick={()=>this.setState({active:"userlogin"})}  className="exercise">User Login</div>
      
       </div>
       
       <div className={this.state.active === 'counter' ? "visible" : "unvisible"}>
        <Counter/>
       </div>
      

       <div className={this.state.active === 'dice' ? "visible" : "unvisible"}>
        <Dice/>
       </div>

       <div className={this.state.active === 'navigation' ? "visible" : "unvisible"}>
        <Navigation/>
       </div>

       <div className={this.state.active === 'slider' ? "visible" : "unvisible"}>
        <Slider/>
       </div>

       <div className={this.state.active === 'timer' ? "visible" : "unvisible"}>
        <Timer/>
       </div>

       <div className={this.state.active === 'menu' ? "visible" : "unvisible"}>
        <Menu/>
       </div>

       <div className={this.state.active === 'userlogin' ? "visible" : "unvisible"}>
        <UserLogin/>
       </div>


     </>
    )
  }
}

export default App;
