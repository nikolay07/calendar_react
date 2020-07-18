import React, { Component } from "react";

import "./RedLine.scss";

class RedLine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentMinute: new Date().getMinutes() - 4,
    };
  }

  componentDidMount() {
    this.indervalId = setInterval(() => {
      const marginTop = new Date().getMinutes() - 4;

      this.setState({
        currentMinute: marginTop,
      });
    }, 60000);
  }

  componentWillUnmount() {
    clearInterval(this.indervalId);
  }

  render() {
    const { currentMinute } = this.state;
    return (
      <div className="redline" style={{ marginTop: `${currentMinute}px` }}>
        <div className="circle" />
        <div className="line" />
      </div>
    );
  }
}

export default RedLine;
