import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function NotFound() {
  const { t } = useTranslation();

  return (
    <div>
      <h2>{t("not_found.title")}</h2>
      <p>
        <Link to="/">{t("not_found.link")}</Link>
      </p>
    </div>
  );
}
