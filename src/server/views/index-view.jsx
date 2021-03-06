//
// This is the server side entry point for the React app.
//

import ReduxRouterEngine from 'electrode-redux-router-engine';
import {routes} from '../../client/routes';
import {createStore} from 'redux';
import rootReducer from '../../client/reducers';

const Promise = require('bluebird');

function createReduxStore(req, match) { // eslint-disable-line
  const initialState = {
    value: null,
    counter: 0,
    random:  generateRan() 
  };

  const store = createStore(rootReducer, initialState);
  return Promise.resolve(store);
}


function generateRan() {
  var max = 5000;
    var random = [];
    for(var i = 0;i<max ; i++){
        var temp = Math.floor(Math.random()*max);
        if(random.indexOf(temp) == -1){
            random.push(temp);
        }
        else
         i--;
    }
    return random
}
//
// This function is exported as the content for the webapp plugin.
//
// See config/default.json under plugins.webapp on specifying the content.
//
// When the Web server hits the routes handler installed by the webapp plugin, it
// will call this function to retrieve the content for SSR if it's enabled.
//
//

module.exports = (req) => {
  const app = req.server && req.server.app || req.app;
  if (!app.routesEngine) {
    app.routesEngine = new ReduxRouterEngine({routes, createReduxStore});
  }

  return app.routesEngine.render(req);
};
