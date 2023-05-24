/* eslint-disable i18next/no-literal-string */
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Button, ButtonTheme } from "shared/ui/buttons/Button";
import { Modal } from "shared/ui/modals/Modal";

export default function Profile() {
  const { t } = useTranslation();

  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <h2>{t("profile.title")}</h2>
      <span>{t("profile.description")}</span>
      <Button
        onClick={() => setIsOpen(true)}
        theme={ButtonTheme.RED}
        type="button"
      >
        TEST MODAL
      </Button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum tenetur
        consequuntur quibusdam quo placeat. Vel minima nam fugit reprehenderit
        nihil necessitatibus est officia aliquam recusandae consectetur. Ut
        provident cum beatae?
      </Modal>
    </div>
  );
}
