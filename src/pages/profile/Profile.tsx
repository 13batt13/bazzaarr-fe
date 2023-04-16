import { useTranslation } from "react-i18next";
import i18n from "shared/config/i18n/i18n";

export default function Profile() {
  const { t } = useTranslation();
  const handleClick = () => {
    i18n.changeLanguage(i18n.language === "en" ? "ru" : "en");
  };
  return (
    <div>
      <h2>Profile</h2>
      <button onClick={handleClick}>{t("test_button")}</button>
      <span>{t("test")}</span>
    </div>
  );
}
