import React, {Component} from 'react';

class CategoriesMenu extends Component {
  componentWillMount() {
    const {apiToken} = this.props;
    this.props.getCategories(apiToken);
  }

  render() {
    const {categories} = this.props;
    return (
      <div>
        <h3>Categories</h3>
        <ul>
          {categories.items.map((category, key) => {
            return (
              <li key={key}>
                {category.name}
              </li>
            )
          })}
        </ul>
      </div>
    );
  }
}

export default CategoriesMenu;
