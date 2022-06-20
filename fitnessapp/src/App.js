import './App.css';
import React from "react";
import human from "./human.jpg";
import calfRaise from "./calfRaises.jpg";
import standingCR from "./standingCF.jpg";


class App extends React.Component {
  state = {
    popupActive: false,
    calves: false,
    chest: false,
    currImg: 0,
  };
  render() {
    const calfImages = [
      {title: "calves", subtitle: "seated weighted calf raise", img: calfRaise}, 
      {title: "standing calf raise", subtitle: "standing calf raise", img: standingCR},
    ]
  
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
                
                 <div className = "sliding">
                 </div>
 
                  </div>

                  <div  className = "info" style={{
              opacity: this.state.chest ? 1 : 0,
              visibility: this.state.chest ? "visible" : "hidden",
              display: this.state.chest ? "block" : "none",
              }}>
                  <p className = "workoutTitle">Chest Workouts</p>
                  <iframe className = "videoPos" width="400" height="200" src="https://www.youtube.com/embed/BkS1-El_WlE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>                 
                  <p className = "text"> Beneficial movements for bigger/stronger chest:<br/><br/>- Sprinting<br/><br/>  - Uphill walking <br/><br/> - Jumping rope</p>
                  </div>

                  <div className = "carousel">
                   <div className = "carouselInner" style={{backgroundImage:`url(${calfImages[this.state.currImg].img})`}}>
                     <div className = "left"></div>
                     <div className = "center"></div>
                     <div className = "right"></div>

                   </div>
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