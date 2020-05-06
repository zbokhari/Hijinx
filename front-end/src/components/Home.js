import React, { Component } from 'react';
import './Home.css';
import '../../node_modules/video-react/dist/video-react.css'; // import css
import Twitter from './Twitter'



class Home extends Component {
  state = {
    photos: [],
    isLoaded: false,
    error: null,

  }

  componentWillMount() {
    fetch('https://graph.instagram.com/me/media?fields=media_url&access_token=IGQVJWdFUza1JCU3lyY2RsdU9xWEh5c2NQcjRHS2pHaU9EbG9LTEVXLXo1TUpobUxjc3FOM0E3RFpnV053ZAlZAYZAWpTaFVYM0UtM094WEVJeS1WWkJFbFlZAaV94akNLa2gxSDRQZA1ZAB')
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            photos: result.data,
            isLoaded: true
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }


  render() {
    return (

      <div className="App">

        <div >
          {/* <img className="currentProject" src='https://lh3.googleusercontent.com/eHYIbaLIzFQuhJTKmLHtR8bkXzxg3KILcf2cfxEdifEAygsY48pFAZhCUonu9KCOJsgbK6hKZmAeC22_wq06HmTCbyW5G-2HAtaARYNjrcvU_7bJTlQIc7gOMtVzXOi6M79oubFy2nk_baZzq_XksDXQawg_BMcPQ8_j8MNe-hlokN1e3hG01q_XgThj8tLF7EBpjSi2yXJVx_gabaZpzI3Nxue1JZ-YyqpN1liH4j-b8ATaC2X06QKzuvr5-FMB33O-wHkfLMnkN_P95M3SXv4bpJ17xsXkFqCy3xaiCD6RYkAKXbF1X30UgCgy4-B8MFAiAILeBndjf3nSdf6euDkhWA22_1VGloMjHSk9FWnvZ3JrZ8REAED5i1zbpl21DhJl7XWjNiOhhlQRx0lDzvclJ3KtbiOesurOTrzA2cbq17nwnEMX7VXrgn-YQMbJy05kOath1hM_jEjQ7d1wQ3JnMx_Gs0qBx68fF7JxLUF403sZVrj5EIPSxhz6OyuTmCQ4yk-Cyc8i3tvdV8GFGe7-qUkCPx6h4HA2r-0WzK4BZ4x40et2zEIE8VnKWtcVk4Fst7tdBq24Y8lL_udnmnZm6ZCoGmZCb0UyIj1DLfjWSH48GBznde1bz9F60oJO-_Or1mLcTR65JMR7c9DyGmS4pPOsdGavZavzys3G57LHzqeBs5aRbeVnmUw=w540-h538-no' alt="Logo" /> */}
          <div>
            <Twitter />
          </div>
          <h3>currently working</h3>
          <h3>4/17/2020</h3>
        </div>
        <div>

        </div>

        <div className="parentSpacer">

        </div>


        <div className="IG_four">
          {this.state.photos.filter(item => this.state.photos.indexOf(item) < 4).map((photo, key) => {
            return (
              <div key={photo.id}>
                <div className="iframe-container">
                  <iframe height="200" width="300" border="none" src={photo.media_url}></iframe>
                </div>
              </div>
            )
          })}
        </div>


      </div>

      // {/* <div>
      //   {console.log(this.state.photos)}
      // </div> */}



    );
  }
}

export default Home;