import { Link } from 'react-router-dom';

import HeartIcon from 'shared/assets/icons/heart.svg';
import UserIcon from 'shared/assets/icons/user.svg';
import logo from 'shared/assets/images/logo.png';
import { ButtonWithIcon } from 'shared/ui/buttons/ButtonWithIcon';
import Categories from './Categories';
import styles from '../styles/Header.module.scss';

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
          <button className={styles.searchButton} type="button">⌕</button>
        </div>
        <div className={styles.userButtons}>
          <ButtonWithIcon to="/favorites" title="Wishlist">
            <HeartIcon width="24px" height="24px" fill="#ffffff" />
          </ButtonWithIcon>
          <Link to="/profile">
            <button type="button">
              <UserIcon width="24px" height="24px" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
