import React, {Component} from 'react';
import {Link} from 'react-router';

class CategoriesMenu extends Component {
  componentWillMount() {
    const {apiToken} = this.props;
    this.props.getCategories(apiToken);
  }

  render() {
    const {categories} = this.props;
    return (
      <div>
        <h3 className="sidebar-title">Categories</h3>
        <ul className="list-unstyled sidebar-menu">
          {categories.items.map((category, key) => {
            return (
              <li key={key}>
                <Link to={`/${category.name}`}>
                  {category.name}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    );
  }
}

export default CategoriesMenu;
