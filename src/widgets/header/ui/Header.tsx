import { Link } from "react-router-dom";
import styles from "widgets/header/styles/Header.module.scss";
import logo from "shared/images/logo.png";
import Categories from "./Categories";

export default function Header() {
  return (
    <div className={styles.root}>
      <div className={styles.logoWrapper}>
        <Link to="/">
          <img src={logo} alt="bazzaarr_" />
        </Link>
      </div>
      <div className={styles.searchBox}>
        <Categories />
        <input type="text" placeholder="Search..." />
        <button className={styles.searchButton}>⌕</button>
      </div>
      <div className={styles.userButtons}>
        <button>
          <Link to="/favorites">Wishlist</Link>
        </button>
        <button>
          <Link to="/profile">Profile</Link>
        </button>
        <button>Chat</button>
      </div>
    </div>
  );
}
