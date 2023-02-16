const http = require("http");
const API_DOMAIN = '127.0.0.1';
const USER_API_PORT = 3001;

exports.user = {
  login: function(email, pswd) {
    return promise = new Promise((resolve, reject) => {
      const opt = {
        hostname: API_DOMAIN,
        port: USER_API_PORT,
        path: "/user?email=" + email,
        method: 'GET'
      };

      http.get(opt, (res) => {
        res.on('data', (body) => {
          body = JSON.parse(body);
          resolve({"success": body.length > 0});
        })
      })
    })
  }
}
