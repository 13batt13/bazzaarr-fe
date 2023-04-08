import { Link } from "react-router-dom";
import styles from "widgets/header/Header.module.scss";
import logo from "shared/images/logo.png";

export default function Header() {
  return (
    <div className={styles.root}>
      <div className={styles.logoWrapper}>
        <Link to="/">
          <img src={logo} alt="bazzaarr_" />
        </Link>
      </div>
      <div className={styles.searchBox}>
        <button>Categories</button>
        <input type="text" placeholder="Search..." />
      </div>
      <div className={styles.userButtons}>
        <button>
          <Link to="/favorites">Favorites</Link>
        </button>
        <button>
          <Link to="/profile">Profile</Link>
        </button>
        <button>Chat</button>
      </div>
    </div>
  );
}
