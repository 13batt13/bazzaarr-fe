import { useTranslation } from "react-i18next";

export default function Profile() {
  const { t } = useTranslation();

  return (
    <div>
      <h2>{t("profile.title")}</h2>
      <span>{t("profile.description")}</span>
    </div>
  );
}
