import Vue from 'vue'
import VueRouter from 'vue-router'
import Amplify, { Auth } from 'aws-amplify'
import awsmobile from '../aws-exports'

import routes from './routes'


Vue.use(VueRouter)
// Amplify.configure(awsmobile);

// copied from serviceWorker.js to know if it is localhost or not
const isLocalhost = Boolean(
  window.location.hostname === 'localhost' ||
    // [::1] is the IPv6 localhost address.
    window.location.hostname === '[::1]' ||
    // 127.0.0.1/8 is considered localhost for IPv4.
    window.location.hostname.match(
      /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
    )
);

// by default, say it's localhost
const oauth = {
  domain: 'js1342-dev.auth.us-east-2.amazoncognito.com',
  scope: [
      "aws.cognito.signin.user.admin",
      "email",
      "openid",
      "phone",
      "profile"
  ],
  redirectSignIn: 'http://localhost:8080/',
  redirectSignOut: 'http://localhost:8080/',
  responseType: 'code' // or 'token', note that REFRESH token will only be generated when the responseType is code
};

// if not, update the URLs
if (!isLocalhost) {
  oauth.redirectSignIn = 'https://master.d1smeitbs08nlb.amplifyapp.com/';
  oauth.redirectSignOut = 'https://master.d1smeitbs08nlb.amplifyapp.com/';
} 

// copy the constant config (aws-exports.js) because config is read only.
var configUpdate = awsmobile;
// update the configUpdate constant with the good URLs
configUpdate.oauth = oauth;
// Configure Amplify with configUpdate
Amplify.configure(configUpdate);


/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

export default function (/* { store, ssrContext } */) {
  const Router = new VueRouter({
    scrollBehavior: () => ({ x: 0, y: 0 }),
    routes,

    // Leave these as they are and change in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    mode: process.env.VUE_ROUTER_MODE,
    base: process.env.VUE_ROUTER_BASE
  })

  return Router
}
