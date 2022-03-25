import React from "react";
import ClubSelector from "./ClubSelector";
import Hole from "./Hole";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      holes: [],
      currentHole: 1,
    };
    this.addShot = this.addShot.bind(this);
    this.changeHole = this.changeHole.bind(this);
  }

  addShot(club, reason) {
    console.log("added " + club + ", " + reason);

    var holesCopy = Object.assign([], this.state.holes);
    var hole = holesCopy[this.state.currentHole];
    if (!hole) {
      hole = [];
      holesCopy[this.state.currentHole] = hole;
    }

    hole.push({ club: club, reason: reason });

    this.setState({
      holes: holesCopy,
    });
  }

  changeHole(newHole) {
    console.log("Change hole to " + newHole);
  }

  render() {
    return (
      <div className="main-wrapper">
        <Hole changeHole={this.changeHole} />
        <ClubSelector addShot={this.addShot} />
      </div>
    );
  }
}

export default Main;
