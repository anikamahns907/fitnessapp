import React from "react";
import "./App.css";
import human from "./human.jpg";
import calfRaise from "./calfImages/calfRaises.jpg";
import standingCR from "./calfImages/standingCF.jpg";
import peckdeck from "./chestImages/peckdeck.jpg";
import benchPress from "./chestImages/benchPress.jpg";
import arrow from "./arrow.png";
import benchDips from "./tricepsImages/benchDips.jpg";
import cgBenchPrs from "./tricepsImages/closeGripBenchPress.png";
import diamondPU from "./tricepsImages/diamondPushup.png";
import incDumbellPB from "./tricepsImages/inclineDumbellPowerbombs.png";
import lyingTriExt from "./tricepsImages/lyingTriExtensions.png";
import ropePushAway from "./tricepsImages/ropePushaways.png";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      popupActive: false,
      bodyPart: "calves",
      currImg: 0,
      imagesArray: [
        {
          title: "calves",
          subtitle: "seated weighted calf raise",
          img: calfRaise,
        },
        {
          title: "standing calf raise",
          subtitle: "standing calf raise",
          img: standingCR,
        },
      ],
      workoutTitle: "",
      videoLink: "",
      activities: ["sprinting", "inclined sprints/walks", "jumping rope"],
    };
  }

  changingImages(direction) {
    if (direction === "left") {
      if (this.state.currImg === 0) {
        this.setState({ currImg: this.state.imagesArray.length - 1 });
      } else {
        this.setState({ currImg: this.state.currImg - 1 });
      }
    } else if (direction === "right") {
      if (this.state.currImg === this.state.imagesArray.length - 1) {
        this.setState({ currImg: 0 });
      } else {
        this.setState({ currImg: this.state.currImg + 1 });
      }
    }
  }

  render() {
    const calfImages = [
      {
        title: " Weighted seated calf raises",
        subtitle: "seated weighted calf raise",
        img: calfRaise,
      },
      {
        title: "standing calf raise",
        subtitle: "standing calf raise",
        img: standingCR,
      },
    ];

    const chestImages = [
      {
        title: "peckdeck fly",
        subtitle:
          "Press your arms together in front of your chest with a slow, controlled movement. ",
        img: peckdeck,
      },
      {
        title: "bench press",
        subtitle:
          " Grip the bar with hands slightly wider than shoulder-width apart, so when you’re at the bottom of your move your hands are directly above your elbows.",
        img: benchPress,
      },
    ];

    const tricepImages = [
      {
        title: "Bench Dips",
        subtitle:
          "Walk your feet out and extend your legs, lifting your bottom off the bench and holding there with extended arms. Hinging at the elbow, lower your body down as far as you can go, or until your arms form a 90-degree angle. Push up through your palms back to start.",
        img: benchDips,
      },
      {
        title: "Close Grip Bench Press",
        subtitle:
          "Lie back on a flat bench holding a barbell with a narrow, overhand grip. From the starting position, breathe in and lower the bar slowly until it skims the middle of your chest. Push the bar back to the starting position explosively as you breathe out. Focus on pushing the bar using your chest muscles.",
        img: cgBenchPrs,
      },
      {
        title: "Diamond Pushups",
        subtitle:
          "Get on all fours with your hands together under your chest. Position your index fingers and thumbs so they’re touching, forming a diamond shape, and extend your arms so that your body is elevated and forms a straight s from your head to your feet.",
        img: diamondPU,
      },
      {
        title: "Incline Dumbell Powerbombs",
        subtitle:
          "Once seated, you are going to pick up your dumbbell and hold it over your head with your hands together.  From here you are going to lower the dumbbell behind your head as far as you can only bending at the elbows.  Once fully descended, return to the starting position and repeat.",
        img: incDumbellPB,
      },
      {
        title: "Lying Tricep Extensions",
        subtitle:
          "Lie back and raise the dumbbells above your head using a neutral grip, palms facing each other. Bending at the elbows and keeping your upper arms set, lower the dumbbells until they are about level with your ears. Squeeze your triceps and raise the dumbbells back to the starting position.",
        img: lyingTriExt,
      },
      {
        title: "Rope Pushaways",
        subtitle:
          ". When executing these, you’ll want to focus on keeping your elbows tucked in close beside your ears. Additionally, when you release the weight back, allow your elbows to move back slightly to really accentuate that stretch – just don’t let them flare out.",
        img: ropePushAway,
      },
    ];
    const bicepsImages = [];
    const deltsImages = [];

    const calfActivities = [
      "sprinting",
      "inclined sprints/walks",
      "jumping rope",
    ];
    const chestActivities = [
      "single-leg/incline/elevated/weighted push-ups",
      "moutain climbers",
      "football, baseball, swimming",
    ];
    return (
      <div className="App">
        <div
          className="popupMain "
          style={{
            opacity: this.state.popupActive ? 1 : 0,
            visibility: this.state.popupActive ? "visible" : "hidden",
          }}
        >
          <div className="popupWhiteSquare">
            <div className="xDiv">
              <span
                onClick={() =>
                  this.setState({
                    popupActive: false,
                    calves: false,
                    chest: false,
                  })
                }
                className="hoverGeneral xText"
              >
                X
              </span>
            </div>

            <div className="info">
              <p className="workoutTitle">{this.state.workoutTitle}</p>

              <iframe
                className="videoPos"
                width="400"
                height="200"
                src={this.state.videoLink}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
              <p className="text">
                Additional beneficial movements for bigger/stronger{" "}
                {this.state.bodyPart} :
                <br /> &nbsp;&nbsp;&nbsp;&nbsp;- {this.state.activities[0]}
                <br /> &nbsp;&nbsp;&nbsp;&nbsp;- {this.state.activities[1]}
                <br /> &nbsp;&nbsp;&nbsp;&nbsp;- {this.state.activities[2]}
              </p>

              <div className="sliding"></div>
            </div>

            <div className="carousel">
              <p className="carouselTitle">
                {this.state.imagesArray[this.state.currImg].title}
              </p>

              <div
                className="carouselInner"
                style={{
                  backgroundImage: `url(${
                    this.state.imagesArray[this.state.currImg].img
                  })`,
                }}
              >
                <div
                  className="left"
                  onClick={() => this.changingImages("left")}
                >
                  <span>&#8249;</span>
                </div>

                <div className="center"></div>
                <div
                  className="right"
                  onClick={() => this.changingImages("right")}
                >
                  <span>&#8250;</span>
                </div>
              </div>
              <br></br>
              <p className="description">
                {this.state.imagesArray[this.state.currImg].subtitle}
              </p>
            </div>
          </div>
        </div>

        <div className="humanMap">
          <img className="humanPic" alt="human body" src={human} />
          <p
            className="calves hoverGeneral"
            onClick={() =>
              this.setState({
                popupActive: true,
                calves: true,
                imagesArray: calfImages,
                workoutTitle: "Calf Workouts",
                videoLink: "https://www.youtube.com/embed/MuD58rqj8SE",
              })
            }
          >
            calves
          </p>
          <p
            className="chest hoverGeneral"
            onClick={() =>
              this.setState({
                popupActive: true,
                chest: true,
                imagesArray: chestImages,
                workoutTitle: "Chest Workouts",
                videoLink: "https://www.youtube.com/embed/BkS1-El_WlE",
                activities: chestActivities,
                bodyPart: "chest",
              })
            }
          >
            chest
          </p>
          <img src={arrow} className="tri1Rotateimg180"></img>
          <img src={arrow} className="bic1Rotateimg180"></img>
          <img src={arrow} className="del1Rotateimg180"></img>

          <p
            className="triceps hoverGeneral"
            onClick={() =>
              this.setState({
                popupActive: true,
                chest: true,
                imagesArray: tricepImages,
                workoutTitle: "Tricep Workouts",
                videoLink: "https://www.youtube.com/watch?v=89e518dl4I8",
                activities: chestActivities,
                bodyPart: "chest",
              })
            }
          >
            triceps{" "}
          </p>
          <p
            className="biceps hoverGeneral"
            onClick={() =>
              this.setState({
                popupActive: true,
                chest: true,
                imagesArray: bicepsImages,
                workoutTitle: "Bicep Workouts",
              })
            }
          >
            biceps
          </p>
          <p
            className="delts hoverGeneral"
            onClick={() =>
              this.setState({
                popupActive: true,
                chest: true,
                imagesArray: deltsImages,
                workoutTitle: "Delt Workouts",
              })
            }
          >
            delts
          </p>
        </div>
      </div>
    );
  }
}

export default App;
