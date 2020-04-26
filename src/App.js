import React from 'react';
import './index';
import Counter from './Counter';
import Dice from './Dice';
import Navigation from './Navigation'
import Slider from './Slider';
import Users from './Pages/Users';
import MultiplePages from './MultiplePages';

class App extends React.Component {
  state = { active: "" };

  finder = (e) => {
    this.setState({ active: e.target.innerText });
  }
  render() {

    let data = {
      Counter: <Counter />,
      Dice: <Dice />,
      Navigation: <Navigation />,
      Slider: <Slider />,
      Users: <Users/>,
      Pages: <MultiplePages/>
    }

    return (
      <>
        <div onClick={this.finder} className="exercises">
          <div className="exercise">Counter</div>
          <div className="exercise">Dice</div>
          <div className="exercise">Navigation</div>
          <div className="exercise">Slider</div>
          <div className="exercise">Users</div>
          <div className="exercise">Pages</div>
        </div>

        <div >
          {data[this.state.active]}
        </div>

      </>
    )
  }
}

export default App;