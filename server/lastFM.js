var request = require('request')
let config = require('../config.js').TOKEN;

getNewArtistsByArtist = (artist, callback) => {
    let options = {
        
        url:  `https://ws.audioscrobbler.com/2.0/?method=artist.getsimilar&artist=${artist}&api_key=${config}&format=json`,
        headers: {
            'User-Agent': 'request',
            'Authorization' : `token ${config}`
        }
      }
    request(options, function(err, response, body){
        if(err){ 
            console.log(err)
        } else {
            callback(JSON.parse(body));
        }
      });
}

module.exports.getNewArtistsByArtist = getNewArtistsByArtist;
