import { useTranslation } from "react-i18next";

export default function PageError() {
  const { t } = useTranslation();

  const reloadPage = () => {
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  };
  return (
    <div>
      <h2>{t("page_error.title")}</h2>
      <p>
        <button onClick={reloadPage} type="button">
          {t("page_error.button")}
        </button>
      </p>
    </div>
  );
}
