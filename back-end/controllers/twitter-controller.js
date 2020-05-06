const request = require('request');
require('dotenv').config();
const { HOST, PORT, OAUTH_CONSUMER_KEY, OAUTH_TOKEN, OAUTH_SIGNATURE_METHOD, OAUTH_TIMESTAMP, OAUTH_NONCE, OAUTH_SIGNATURE, PERSONALIZATION_ID, GUEST_ID, LANG } = process.env


const options = {
  'method': 'GET',
  'url': 'https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=highginxbeatz',
  'headers': {
    'Authorization': `OAuth oauth_consumer_key=${OAUTH_CONSUMER_KEY},oauth_token=${OAUTH_TOKEN},oauth_signature_method=${OAUTH_SIGNATURE_METHOD},oauth_timestamp=${OAUTH_TIMESTAMP},oauth_nonce=${OAUTH_NONCE},oauth_signature=${OAUTH_SIGNATURE}`,
    'Cookie': `personalization_id=${PERSONALIZATION_ID}; guest_id=${GUEST_ID}; lang=${LANG}`
  }
};
request(options, function (error, response) { 
  if (error) throw new Error(error);
  console.log(response.body);
});

module.exports = {
    request
}