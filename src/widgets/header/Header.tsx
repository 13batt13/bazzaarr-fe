import { Link } from "react-router-dom";
import styles from "widgets/header/Header.module.scss";

export default function Header() {
  return (
    <div className={styles.header}>
      <h1>
        <Link to="/">Bazzaarr</Link>
      </h1>
      <button>Categories</button>
      <input type="text" placeholder="Search" />
      <button>
        <Link to="/favorites">Favorites</Link>
      </button>
      <button>
        <Link to="/profile">Profile</Link>
      </button>
      <button>Chat</button>
    </div>
  );
}
