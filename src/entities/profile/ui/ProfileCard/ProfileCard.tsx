/* eslint-disable i18next/no-literal-string */
import { classNames } from "shared/lib/classNames/classNames";
import { useSelector } from "react-redux";
import { getProfileData } from "entities/profile/model/selectors/getProfileData/getProfileData";
import { Button } from "shared/ui/buttons/Button";
import { Input } from "shared/ui/inputs/Input";
import styles from "./ProfileCard.module.scss";

interface ProfileCardProps {
  className?: string;
}

export const ProfileCard = ({ className }: ProfileCardProps) => {
  const data = useSelector(getProfileData);

  return (
    <div className={classNames(styles.ProfileCard, {}, [className])}>
      <div className={styles.header}>
        <Button>РЕДАКТИРОВАТЬ</Button>
      </div>
      <div className={styles.data}>
        <Input
          value={data?.first}
          placeholder="Ваше имя"
          className={styles.input}
        />
        <Input
          value={data?.lastname}
          placeholder="Ваша фамилия"
          className={styles.input}
        />
      </div>
    </div>
  );
};
