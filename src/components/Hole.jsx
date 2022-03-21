import React from "react";

class Hole extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hole: 1,
    };
    this.nextHole = this.nextHole.bind(this);
    this.prevHole = this.prevHole.bind(this);
  }

  prevHole() {
    if (this.state.hole == 1) return;
    this._updateHole((hole) => hole - 1);
  }

  nextHole() {
    if (this.state.hole == 18) return;
    this._updateHole((hole) => hole + 1);
  }

  _updateHole(changeFn) {
    var nextHole = changeFn(this.state.hole);

    this.setState({
      hole: nextHole,
    });

    this.props.changeHole(nextHole);
  }

  render() {
    return (
      <div className="hole-wrapper">
        <button className="hole-button" onClick={this.prevHole}>
          &lt;
        </button>
        <div className="header-slot">Hole {this.state.hole}</div>
        <button className="hole-button" onClick={this.nextHole}>
          &gt;
        </button>
      </div>
    );
  }
}

export default Hole;
