import React, {Component, PropTypes} from 'react';
import {findDOMNode} from 'react-dom';
import {Link} from 'react-router';
import {OverlayTrigger, Popover} from 'react-bootstrap';

import HeaderStyle from '../styles/components/header.scss'

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: {
        show: false
      }
    };
  }

  componentWillMount() {
    const {apiToken} = this.props;
    this.props.getUser(apiToken);
  }

  handleProfileClick(e) {
    this.setState({
      profile: {
        target: e.target,
        show: !this.state.profile.show
      }
    })
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
              <OverlayTrigger trigger="click"
                              rootClose
                              placement="bottom"
                              arrowOffsetTop={30}
                              positionTop={40}
                              overlay={
                                <Popover id="profile-popover">
                                  <ul className="list-unstyled popover-menu">
                                    <li className="popover-menu-item">
                                      <a href="/@lucsbarros">My Profile</a>
                                    </li>
                                    <li className="popover-menu-item">
                                      <a href="/@lucsbarros/collections">My Collections</a>
                                    </li>
                                    <li className="popover-menu-item">
                                      <a href="/my/invites" data-reactid=".0.0.3.1.$2.0">Invites (0)</a>
                                    </li>
                                    <li className="popover-menu-item">
                                      <a href="/my/settings/edit">Settings</a>
                                    </li>
                                    <li className="popover-menu-item">
                                      <a href="/v1/oauth/applications">API Dashboard</a>
                                    </li>
                                    <li className="popover-menu-item">
                                      <a href="/logout">Logout</a>
                                    </li>
                                  </ul>
                                </Popover>
                              }>
                <div className="header-profile-image" onClick={this.handleProfileClick.bind(this)}>
                  <img src={profile.image} alt={profile.name} />
                </div>
              </OverlayTrigger>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;