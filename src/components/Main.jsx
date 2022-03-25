import React from "react";
import ClubSelector from "./ClubSelector";
import Hole from "./Hole";
import ShotList from "./Shotlist";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      holes: [],
      currentHole: 1,
    };
    this.addShot = this.addShot.bind(this);
    this.changeHole = this.changeHole.bind(this);
    this.removeShot = this.removeShot.bind(this);
    this.storeRound = this.storeRound.bind(this);
  }

  addShot(club, reason) {
    console.log("added " + club + ", " + reason);

    var holesCopy = Object.assign([], this.state.holes);
    var hole = holesCopy[this.state.currentHole];
    if (!hole) {
      hole = { holenum: this.state.currentHole, shots: [] };
      holesCopy[this.state.currentHole] = hole;
    }

    hole.shots.push({ club: club, reason: reason });

    this.setState({
      holes: holesCopy,
    });
  }

  changeHole(newHole) {
    this.setState({
      currentHole: newHole,
    });
  }

  storeRound() {
    console.log("storing round for later...");

    var json = {
      date: new Date(),
      shots: this.state.holes.filter((v) => v != null),
    };
    console.log(JSON.stringify(json));
  }

  removeShot(club) {
    console.log("Remove shot " + club);

    var holesCopy = Object.assign([], this.state.holes);
    var shots = holesCopy[this.state.currentHole].shots;

    shots = shots.filter((v, i, a) => v.club != club);
    holesCopy[this.state.currentHole].shots = shots;

    this.setState({
      holes: holesCopy,
    });
  }

  render() {
    return (
      <div className="main-wrapper">
        <div className="app-header-text">
          <div className="asd">Y U N P ?</div>
        </div>
        <Hole changeHole={this.changeHole} storeRound={this.storeRound} />
        <ShotList
          hole={this.state.holes[this.state.currentHole]}
          removeShot={this.removeShot}
        />
        <ClubSelector addShot={this.addShot} />
      </div>
    );
  }
}

export default Main;
