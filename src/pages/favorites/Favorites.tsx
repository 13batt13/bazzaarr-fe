import { useTranslation } from "react-i18next";

export default function Favorites() {
  const { t } = useTranslation();

  return (
    <div>
      <h2>{t("favorites.title")}</h2>
      <span>{t("favorites.description")}</span>
    </div>
  );
}
