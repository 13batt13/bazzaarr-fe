import { Link } from "react-router-dom";

import styles from "../styles/Header.module.scss";

import HeartIcon from "shared/assets/icons/heart.svg";
import UserIcon from "shared/assets/icons/user.svg";
import logo from "shared/assets/images/logo.png";
import Categories from "./Categories";
import { ButtonWithIcon } from "shared/ui/buttons/ButtonWithIcon";

export function Header() {
  return (
    <div className={styles.root}>
      <div className={styles.headerWrapper}>
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
          <ButtonWithIcon to="/favorites" title="Wishlist">
            <HeartIcon width="24px" height="24px" fill="#ffffff" />
          </ButtonWithIcon>
          <Link to="/profile">
            <button>
              <UserIcon width="24px" height="24px" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
