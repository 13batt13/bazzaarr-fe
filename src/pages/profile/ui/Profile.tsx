/* eslint-disable i18next/no-literal-string */
import { Counter } from "entities/counter";
import { profileReducer } from "entities/profile";
import { userActions } from "entities/user";
import { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import {
  DynamicModuleLoader,
  ReducersList,
} from "shared/lib/components/DinamicModuleLoader/DinamicModuleLoader";
import { Button, ButtonTheme } from "shared/ui/buttons/Button";

const reducers: ReducersList = {
  profile: profileReducer,
};

export default function Profile() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
    navigate("/");
  }, [dispatch, navigate]);

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <h2>{t("profile.title")}</h2>
      <span>{t("profile.description")}</span>
      <Button onClick={onLogout} theme={ButtonTheme.RED} type="button">
        ВЫЙТИ
      </Button>
      <Counter />
    </DynamicModuleLoader>
  );
}
