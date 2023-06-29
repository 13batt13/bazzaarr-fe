/* eslint-disable i18next/no-literal-string */
import {
  ProfileCard,
  fetchProfileData,
  profileReducer,
} from "entities/profile";
import { userActions } from "entities/user";
import { useCallback, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";
import {
  DynamicModuleLoader,
  ReducersList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { Button, ButtonTheme } from "shared/ui/buttons/Button";

const reducers: ReducersList = {
  profile: profileReducer,
};

export default function Profile() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProfileData());
  }, [dispatch]);

  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
    navigate("/");
  }, [dispatch, navigate]);

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <h2>{t("profile.title")}</h2>
      <Button onClick={onLogout} theme={ButtonTheme.RED} type="button">
        ВЫЙТИ
      </Button>
      <ProfileCard />
    </DynamicModuleLoader>
  );
}
