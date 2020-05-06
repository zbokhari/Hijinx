import React, { Component } from 'react';



class Twitter extends Component {
  state = {
    tweets: [],
    // isLoading: false,
    error: null
  };

  componentDidMount() {
    fetch('http://localhost:3000/')
      .then(res => res.json())
      .then(
        (results) => {
          this.setState({
            tweets: results.data,
            // isLoading: true
          });
        },

        (error) => {
          this.setState({
            // isLoaded: true,
            error
          });
        }
      )
  }





  render() {
    return (
      <div>
        {this.state.tweets &&
          (
            <div>
              
              {this.state.tweets.map((tweet, key) => {
                return (<div key={tweet.id}>
                  <p>{tweet.text}</p>
                </div>
                )

              })}
            </div>)}
      </div>
    )
  }
}

export default Twitter;
