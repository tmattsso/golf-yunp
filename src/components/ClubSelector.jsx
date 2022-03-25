import React from "react";

class ClubSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // club: "Iron",
    };
    this.handleClub = this.handleClub.bind(this);
    this.handleReason = this.handleReason.bind(this);
  }

  handleReason(event) {
    this.props.addShot(this.state.club, event.target.id);

    this.setState({
      club: null,
    });
  }

  handleClub(event) {
    const selectedClub = event.target.id;

    this.setState({
      club: selectedClub,
    });
  }

  renderShotButton(club, isHalf) {
    var styleName = "shot-select-button";
    if (isHalf) styleName += " half";

    return (
      <button id={club} className={styleName} onClick={this.handleClub}>
        {club}
      </button>
    );
  }

  renderSelector() {
    return (
      <div className="grid">
        {this.renderShotButton("Drive")}
        {this.renderShotButton("Wood")}
        {this.renderShotButton("Iron")}
        {this.renderShotButton("Pitch")}
        {this.renderShotButton("Chip")}
        {this.renderShotButton("Sand")}
        {this.renderShotButton("3-putt", true)}
        {this.renderShotButton("Distance", true)}
      </div>
    );
  }

  renderReasonButton(reason, additionaStyles) {
    return (
      <button id={reason} style={additionaStyles} onClick={this.handleReason}>
        {reason}
      </button>
    );
  }

  renderIron() {
    return (
      <div className="horizontal-row">
        {this.renderReasonButton("LL")}

        <div className="vertical-row" style={{ width: 55 + "%" }}>
          {this.renderReasonButton("Thin")}

          <div className="horizontal-row">
            {this.renderReasonButton("Left", { height: 150 + "px" })}
            {this.renderReasonButton("Right")}
          </div>

          {this.renderReasonButton("Fat")}
        </div>

        {this.renderReasonButton("RR")}
      </div>
    );
  }

  renderPutter() {
    return (
      <div className="vertical-row">
        {this.renderReasonButton("Line")}
        {this.renderReasonButton("Pace")}
        {this.renderReasonButton("Both")}
      </div>
    );
  }

  renderDistance() {
    return (
      <div className="vertical-row">
        {this.renderReasonButton("Long")}
        {this.renderReasonButton("Short")}
      </div>
    );
  }

  renderClub() {
    if (this.state.club == "3-putt") {
      return this.renderPutter();
    } else if (this.state.club == "Distance") {
      return this.renderDistance();
    } else {
      return this.renderIron();
    }
  }

  render() {
    return (
      <div className="club-selector">
        {!this.state.club && this.renderSelector()}

        {this.state.club && (
          <div className="selected-club-text">F*cked {this.state.club} ..?</div>
        )}
        {this.state.club && this.renderClub()}
      </div>
    );
  }
}

export default ClubSelector;
