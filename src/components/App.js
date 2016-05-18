import React, {Component, PropTypes} from 'react';
import HeaderContainer from '../containers/HeaderContainer';
import FeedContainer from '../containers/FeedContainer';
import CategoriesMenuContainer from '../containers/CategoriesMenuContainer';

const App = ({children}) => {
  return (
    <div>
      <HeaderContainer />
      <div className="container container-main">
        <div className="row">
          <div className="col-md-9 col-lg-8 col-md-push-3 col-lg-push-2">
            <FeedContainer />
          </div>
          <div className="col-md-3 col-lg-2 col-md-pull-9 col-lg-pull-8">
            <ul className="list-unstyled">
              <li>Home</li>
              <li>Collections</li>
              <li>LIVE Chats</li>
            </ul>
            <CategoriesMenuContainer />
          </div>
        </div>
        {children}
      </div>
    </div>
  );
}

export default App;
