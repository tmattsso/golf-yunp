import React from "react";
import ClubSelector from "./ClubSelector";
import Hole from "./Hole";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
    this.addShot = this.addShot.bind(this);
    this.changeHole = this.changeHole.bind(this);
  }

  addShot(club, reason) {
    console.log("added " + club + ", " + reason);
  }

  changeHole(newHole) {
    console.log("Change hole to "+newHole);
  }

  render() {
    return (
      <div className="main-wrapper">
        <Hole changeHole={this.changeHole}/>
        <ClubSelector addShot={this.addShot} />
      </div>
    );
  }
}

export default Main;
