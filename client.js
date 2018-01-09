import React, { Component } from 'react'

const qualifyURL = (url, encode) => {
  url = url || '';
 var ret = location.protocol + '//' + location.host + (url.substr(0, 1) === '/' ? '' : location.pathname.match(/.*\//)) + url;
  // var ret = "http://127.0.0.1:5555"
  if (encode) {
    ret = encodeURIComponent(ret);
  }
  return ret;
}

module.exports = function (options) {
  const handleLogin = () => {
    const loginURI = '/api/user/login_by_token';
    const { AUTH_SERVER } = options;
    let ret = qualifyURL(loginURI, true);
    let redirectURL = AUTH_SERVER  + '?service=' + ret;
    location.href = redirectURL;
    alert(redirectURL);
  }

  const QssoComponent = () => (
    <button onClick={handleLogin} className="btn-home btn-home-normal" >SSO 登录</button>
  )

  this.bindHook('third_login', QssoComponent);
};









