import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';

import HeaderStyle from '../styles/components/header.scss'

class Header extends Component {
  componentWillMount() {
    const {apiToken} = this.props;
    this.props.getUser(apiToken);
  }

  render() {
    const {profile} = this.props;
    return (
      <header className="header header-primary">
        <div className="container">
          <h1 className="header-brand">
            <Link to={'/'}>
              <span className="sr-only">Product Hunt</span>
              <svg viewBox="0 0 40 40">
                <g fill="none" fill-rule="evenodd">
                  <path d="M40 20c0 11.046-8.954 20-20 20S0 31.046 0 20 8.954 0 20 0s20 8.954 20 20" fill="#DA552F"></path>
                  <path d="M22.667 20H17v-6h5.667c1.656 0 3 1.343 3 3s-1.344 3-3 3m0-10H13v20h4v-6h5.667c3.866 0 7-3.134 7-7s-3.134-7-7-7" fill="#FFF"></path>
                </g>
              </svg>
            </Link>
          </h1>

          <div className="header-profile">
            <div className="header-profile-image">
              <img src={profile.image} alt={profile.name} />
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;