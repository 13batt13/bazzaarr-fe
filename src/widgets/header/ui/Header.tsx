import { Link, useNavigate } from "react-router-dom";

import HeartIcon from "shared/assets/icons/heart.svg";
import UserIcon from "shared/assets/icons/user.svg";
import SearchIcon from "shared/assets/icons/search.svg";
import GlobeIcon from "shared/assets/icons/globe.svg";
import MoonIcon from "shared/assets/icons/moon.svg";
import SunIcon from "shared/assets/icons/sun.svg";
import logo from "shared/assets/images/logo.png";
import { Button, ButtonTheme } from "shared/ui/buttons/Button";
import { useTranslation } from "react-i18next";
import i18n from "shared/config/i18n/i18n";

import { useTheme } from "app/providers/themeProvider";
import { Theme } from "app/providers/themeProvider/lib/ThemeContext";
import Categories from "./Categories";

import styles from "./Header.module.scss";

export function Header() {
  const { t } = useTranslation();
  const { theme, changeTheme } = useTheme();

  const changeLanguage = async () => {
    i18n.changeLanguage(i18n.language === "en" ? "ru" : "en");
  };

  const navigate = useNavigate();
  const navigateTo = (to: string) => () => {
    navigate(to);
  };

  return (
    <header data-testid="header" className={styles.root}>
      <div className={styles.headerWrapper}>
        <div className={styles.logoWrapper}>
          <Link to="/">
            <img src={logo} alt="bazzaarr_" />
          </Link>
        </div>
        <div className={styles.searchBox}>
          <Categories />
          <input type="text" placeholder={t("header.search_placeholder")} />
          <button className={styles.searchButton} type="button">
            <SearchIcon className={styles.searchIcon} />
          </button>
        </div>
        <div className={styles.userButtons}>
          <Button
            title={t("header.wishlist")}
            theme={ButtonTheme.RED}
            onClick={navigateTo("/favorites")}
          >
            <HeartIcon className={styles.icon} />
          </Button>
          <Button
            title={t("header.log_in")}
            theme={ButtonTheme.RED}
            onClick={navigateTo("/profile")}
          >
            <UserIcon className={styles.icon} />
          </Button>
          <Button onClick={changeLanguage} type="button">
            <GlobeIcon className={styles.icon} />
          </Button>
          <Button onClick={changeTheme} type="button">
            {theme === Theme.DARK ? (
              <SunIcon className={styles.icon} />
            ) : (
              <MoonIcon className={styles.icon} />
            )}
          </Button>
        </div>
      </div>
    </header>
  );
}
