
const axios = require('axios');
require('dotenv').config();
const { HOST, PORT, SCREEN_NAME, OAUTH_CONSUMER_KEY, OAUTH_TOKEN, OAUTH_SIGNATURE_METHOD, OAUTH_TIMESTAMP, OAUTH_NONCE, OAUTH_SIGNATURE, PERSONALIZATION_ID, GUEST_ID, LANG } = process.env

const url = `https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=${SCREEN_NAME}`

const getTweets = (req, res) =>
{
axios.get(url,
  {
    headers:
    {
      'Authorization': `OAuth oauth_consumer_key=${OAUTH_CONSUMER_KEY},oauth_token=${OAUTH_TOKEN},oauth_signature_method=${OAUTH_SIGNATURE_METHOD},oauth_timestamp=${OAUTH_TIMESTAMP},oauth_nonce=${OAUTH_NONCE},oauth_signature=${OAUTH_SIGNATURE}`,
      'Cookie': `personalization_id=${PERSONALIZATION_ID}; guest_id=${GUEST_ID}; lang=${LANG}`
    }
  })
  .then((response) => {
    // res.send({data: response.body})
    console.log(response)
  },
  (error) => {
    const status = error.response.status
    return status
  }
);
}

module.exports = {
  getTweets
}
