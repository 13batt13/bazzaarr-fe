/* eslint-disable i18next/no-literal-string */
import { Country } from "entities/country";
import { Currency } from "entities/currency";
import {
  ProfileCard,
  fetchProfileData,
  getProfileError,
  getProfileForm,
  getProfileIsLoading,
  getProfileReadonly,
  profileActions,
  profileReducer,
  updateProfileData,
} from "entities/profile";
import { userActions } from "entities/user";
import { useCallback, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
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

  const formData = useSelector(getProfileForm);
  const isLoading = useSelector(getProfileIsLoading);
  const error = useSelector(getProfileError);
  const readonly = useSelector(getProfileReadonly);

  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
    navigate("/");
  }, [dispatch, navigate]);

  const onEdit = useCallback(() => {
    dispatch(profileActions.setProfileReadonly(false));
  }, [dispatch]);

  const onCancelEdit = useCallback(() => {
    dispatch(profileActions.cancelProfileEdit());
  }, [dispatch]);

  const onSaveEdit = useCallback(() => {
    dispatch(updateProfileData());
  }, [dispatch]);

  const onChangeFirstname = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfileData({ firstname: value }));
    },
    [dispatch]
  );

  const onChangeLastname = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfileData({ lastname: value }));
    },
    [dispatch]
  );

  const onChangeAge = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfileData({ age: Number(value) }));
    },
    [dispatch]
  );

  // const onChangeCurrency = useCallback(
  //   (currency: Currency) => {
  //     dispatch(profileActions.updateProfileData({ currency }));
  //   },
  //   [dispatch]
  // );

  // const onChangeCountry = useCallback(
  //   (country: Country) => {
  //     dispatch(profileActions.updateProfileData({ country }));
  //   },
  //   [dispatch]
  // );

  const onChangeCity = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfileData({ city: value }));
    },
    [dispatch]
  );

  const onChangeUsername = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfileData({ username: value }));
    },
    [dispatch]
  );

  const onChangeAvatar = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfileData({ avatar: value }));
    },
    [dispatch]
  );

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <h2>{t("profile.title")}</h2>
      <Button onClick={onLogout} theme={ButtonTheme.RED} type="button">
        ВЫЙТИ
      </Button>
      {readonly ? (
        <div>
          <Button onClick={onEdit}>РЕДАКТИРОВАТЬ</Button>
        </div>
      ) : (
        <>
          <div>
            <Button onClick={onCancelEdit}>ОТМЕНИТЬ</Button>
          </div>
          <div>
            <Button onClick={onSaveEdit}>СОХРАНИТЬ</Button>
          </div>
        </>
      )}
      <ProfileCard
        data={formData}
        isLoading={isLoading}
        error={error}
        readonly={readonly}
        onChangeFirstname={onChangeFirstname}
        onChangeLastname={onChangeLastname}
        onChangeAge={onChangeAge}
        // onChangeCurrency={onChangeCurrency}
        // onChangeCountry={onChangeCountry}
        onChangeCity={onChangeCity}
        onChangeUsername={onChangeUsername}
        onChangeAvatar={onChangeAvatar}
      />
    </DynamicModuleLoader>
  );
}
