import './App.css';
import human from "./human.jpg";
import React from "react"; //imports react
import calfRaise from "./calfRaises.jpg";
import standingCR from "./standingCF.jpg";



class App extends React.Component {
  state = {
    popupActive: false,
    calves: false,
    chest: false,
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">

          <div className="popupMain "
          style={{
            opacity: this.state.popupActive ? 1 : 0,
            visibility: this.state.popupActive ? "visible" : "hidden",
          }}>
              <div className="popupWhiteSquare">
                  <div className="xDiv">
                    <span onClick={() => this.setState({ popupActive: false, calves: false, chest: false})} className="hoverGeneral xText">
                      X
                    </span>
                  </div>
                

                  <div className = "info" style={{
              opacity: this.state.calves ? 1 : 0,
              visibility: this.state.calves ? "visible" : "hidden",
              display: this.state.calves ? "block" : "none",
              }}>
                 <p className = "workoutTitle">Calf Workouts</p>
                  <iframe className = "videoPos" width="400" height="200" src="https://www.youtube.com/embed/MuD58rqj8SE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                 <p className = "text"> Beneficial movements for bigger/stronger calves: <br/><br/>- Sprinting<br/> <br/> - Uphill walking<br/> <br/> - Jumping rope</p>
                 <div className = "slideContainer">
                 <div className = "imageContainer">
                          <img src={calfRaise} className = "sliderImg" alt="calfraise"></img>
                          <img src={standingCR} className = "sliderImg" alt = "stanndingCF"></img>

                  </div>

                  </div>
                  
                  </div>





                  <div  className = "info" style={{
              opacity: this.state.chest ? 1 : 0,
              visibility: this.state.chest ? "visible" : "hidden",
              display: this.state.chest ? "block" : "none",
              }}>
                  <p className = "workoutTitle">Chest Workouts</p>
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/BkS1-El_WlE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>                 
                  <p>Sprinting <br/> Uphill walking <br/> Jumping rope</p>
                  </div>



            </div>


          </div>

          <div className = "humanMap">
            <img className = "humanPic" alt = "human body" src = {human}/>
            <p className = "calves hoverGeneral"  onClick={() => this.setState({popupActive: true, calves: true, }) }>calves</p>
            <p className = "chest hoverGeneral"  onClick={() => this.setState({popupActive: true, chest: true}) }>chest</p>

          </div>

        </header>
      </div>
    );
  }
}

export default App;
