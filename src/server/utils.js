const Promise = require('bluebird');
const request = require('request');
const rValidUrl = /^(?!mailto:)(?:(?:https?|ftp):\/\/)?(?:\S+(?::\S*)?@)?(?:(?:(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[0-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))|localhost)(?::\d{2,5})?(?:\/[^\s]*)?$/i;


module.exports = {
  getUrlTitle(url) {
    return new Promise((resolve, reject) => {
      request(url, (err, res, html) => {
        if (err) {
          reject(err);
        } else {
          const tag = /<title>(.*)<\/title>/;
          const match = html.match(tag);
          const title = match ? match[1] : url;
          resolve(title);
        }
      });
    });
  },

  isValidUrl(url) {
    console.log('the matched url is', url, url.match(rValidUrl));
    return url.match(rValidUrl);
  },
};
