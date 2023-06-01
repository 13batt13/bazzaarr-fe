/* eslint-disable i18next/no-literal-string */
import { Counter } from "entities/counter";
import { userActions } from "entities/user";
import { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { Button, ButtonTheme } from "shared/ui/buttons/Button";

export default function Profile() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
    navigate("/");
  }, [dispatch, navigate]);

  return (
    <div>
      <h2>{t("profile.title")}</h2>
      <span>{t("profile.description")}</span>
      <Button onClick={onLogout} theme={ButtonTheme.RED} type="button">
        ВЫЙТИ
      </Button>
      <Counter />
    </div>
  );
}
