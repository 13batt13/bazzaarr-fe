/* eslint-disable i18next/no-literal-string */
import { classNames } from "shared/lib/classNames/classNames";
import { Input } from "shared/ui/inputs/Input";
import { Profile } from "entities/profile/model/types/profile";
import { Spinner } from "shared/ui/spinner/Spinner";
import styles from "./ProfileCard.module.scss";

interface ProfileCardProps {
  className?: string;
  data?: Profile;
  isLoading?: boolean;
  error?: string;
  readonly?: boolean;

  onChangeFirstname?: (value?: string) => void;
  onChangeLastname?: (value?: string) => void;
  onChangeAge?: (value?: string) => void;
  // onChangeCurrency?: (value?: string) => void;
  // onChangeCountry?: (value?: string) => void;
  onChangeCity?: (value?: string) => void;
  onChangeUsername?: (value?: string) => void;
  onChangeAvatar?: (value?: string) => void;
}

export const ProfileCard = ({
  className,
  data,
  isLoading,
  error,
  readonly,

  onChangeFirstname,
  onChangeLastname,
  onChangeAge,
  // onChangeCurrency,
  // onChangeCountry,
  onChangeCity,
  onChangeUsername,
  onChangeAvatar,
}: ProfileCardProps) => {
  if (isLoading) return <Spinner />;

  if (error)
    return (
      <div>
        <span>Произошла ошибка</span>
        <span>{error}</span>
      </div>
    );

  return (
    <div className={classNames(styles.ProfileCard, {}, [className])}>
      <div className={styles.data}>
        <Input
          value={data?.firstname}
          placeholder="Ваше имя"
          className={styles.input}
          onChange={onChangeFirstname}
          readonly={readonly}
        />
        <Input
          value={data?.lastname}
          placeholder="Ваша фамилия"
          className={styles.input}
          onChange={onChangeLastname}
          readonly={readonly}
        />
        <Input
          value={data?.age}
          placeholder="Ваш возраст"
          className={styles.input}
          onChange={onChangeAge}
          readonly={readonly}
        />
        {/* <Input
          value={data?.currency}
          placeholder="Ваша валюта"
          className={styles.input}
          onChange={onChangeCurrency}
          readonly={readonly}
        />
        <Input
          value={data?.country}
          placeholder="Ваша страна"
          className={styles.input}
          onChange={onChangeCountry}
          readonly={readonly}
        /> */}
        <Input
          value={data?.city}
          placeholder="Ваш город"
          className={styles.input}
          onChange={onChangeCity}
          readonly={readonly}
        />
        <Input
          value={data?.username}
          placeholder="Ваше имя пользователя"
          className={styles.input}
          onChange={onChangeUsername}
          readonly={readonly}
        />
        <Input
          value={data?.avatar}
          placeholder="Ваш аватар"
          className={styles.input}
          onChange={onChangeAvatar}
          readonly={readonly}
        />
      </div>
    </div>
  );
};
