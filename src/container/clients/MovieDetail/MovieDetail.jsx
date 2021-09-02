import React, { Component } from "react";

export class MovieDetail extends Component {
  componentDidMount() {
    const { params } = this.props.match;
    console.log(params);
  }

  render() {
    return (
      <div>
        <div>MovieDetail </div>
      </div>
    );
  }
}

export default MovieDetail;
