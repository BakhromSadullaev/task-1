import React from "react";
import styles from "./searchBar.module.scss";

class SearchBar extends React.PureComponent {
  render() {
    return (
      <div className={styles.container}>
        <input placeholder="Search..." type="text" />
        <button>Search</button>
      </div>
    );
  }
}

export default SearchBar;
