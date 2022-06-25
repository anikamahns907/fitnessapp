import './App.css';
import React from "react";
import human from "./human.jpg";
import calfRaise from "./calfImages/calfRaises.jpg";
import standingCR from "./calfImages/standingCF.jpg";
import peckdeck from "./chestImages/peckdeck.jpg";
import benchPress from "./chestImages/benchPress.jpg";
import arrow from "./arrow.png";


class App extends React.Component {
  state = {
    popupActive: false,
    calves: false,
    chest: false,
    currImg: 0,
    imagesArray: [{title: "calves", subtitle: "seated weighted calf raise", img: calfRaise}, 
    {title: "standing calf raise", subtitle: "standing calf raise", img: standingCR},],
  };
  render() {
    const calfImages = [
      {title: " Weighted seated calf raises", subtitle: "seated weighted calf raise", img: calfRaise}, 
      {title: "standing calf raise", subtitle: "standing calf raise", img: standingCR},
    ]

    const chestImages = [
      {title: "peckdeck fly", subtitle: "Press your arms together in front of your chest with a slow, controlled movement. ", img: peckdeck},
      {title: "bench press", subtitle: " Grip the bar with hands slightly wider than shoulder-width apart, so when you’re at the bottom of your move your hands are directly above your elbows.", img: benchPress},

    ]

    const tricepImages = []
    const bicepsImages = []
    const deltsImages = []




    
  
    return (
      <div className="App">

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
                  <h6 >{this.state.imagesArray[this.state.currImg].title}</h6>

                   <div className = "carouselInner" style={{backgroundImage:`url(${this.state.imagesArray[this.state.currImg].img})`}}>
                      
                     <div className = "left" onClick={()=>  { this.state.currImg > 0 && this.setState({currImg: this.state.currImg - 1})}}>
                     <span>&#8249;</span>

                     </div>

                     <div className = "center">
                     </div>
                     <div className = "right" onClick={()=> {this.state.currImg < calfImages.length - 1 &&this.setState({currImg: this.state.currImg + 1})}}>
                     <span>&#8250;</span>

                     </div>

                   </div>
                   </div>

            </div>


          </div>

          <div className = "humanMap">
            <img className = "humanPic" alt = "human body" src = {human}/>
            <p className = "calves hoverGeneral"  onClick={() => this.setState({popupActive: true, calves: true,  imagesArray: calfImages}) }>calves</p>
            <p className = "chest hoverGeneral"  onClick={() => this.setState({popupActive: true, chest: true, imagesArray: chestImages}) }>chest</p>
         <img src= {arrow} className = "tri1Rotateimg180"></img>
         <img src= {arrow} className = "bic1Rotateimg180"></img>
         <img src= {arrow} className = "del1Rotateimg180"></img>


            <p className = "triceps hoverGeneral"  onClick={() => this.setState({popupActive: true, chest: true, imagesArray: tricepImages}) }>triceps </p>
            <p className = "biceps hoverGeneral"  onClick={() => this.setState({popupActive: true, chest: true, imagesArray: bicepsImages}) }>biceps</p>
            <p className = "delts hoverGeneral"  onClick={() => this.setState({popupActive: true, chest: true, imagesArray: deltsImages}) }>delts</p>


          </div>

      </div>
    );
  }
}

export default App;