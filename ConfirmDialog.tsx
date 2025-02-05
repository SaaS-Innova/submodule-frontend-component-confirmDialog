import { Dialog } from "primereact/dialog";
import { useTranslation } from "react-i18next";
import AppButton from "../button/AppButton";
import { IConfirmDialog } from "./confirmDialog.model";

export const ConfirmDialog = (props: IConfirmDialog) => {
  const { t } = useTranslation();
  const {
    confirmDialog,
    confirmDialogText,
    setConfirmDialog,
    onConfirm,
    confirmDialogHeader,
    type = "Delete",
    onClosed,
    disabled = false,
    onCanceled,
    icon,
    objectHeader,
  } = props;
  let header = "";
  let text = "";
  let className = "";

  const hideDialog = () => {
    onClosed && onClosed();
    setConfirmDialog(false);
  };
  const DialogFooter = (
    <>
      <AppButton
        type={"Cancel"}
        label={`${t("components.button.name.cancel")}`}
        onClick={onCanceled ?? hideDialog}
      />
      <AppButton
        type={"Check"}
        label={`${t("components.button.name.confirm")}`}
        onClick={() => onConfirm()}
        disabled={disabled}
      />
    </>
  );

  // Determine header, text, icon, and className based on type
  if (type === "Delete") {
    header = t("components.confirmDialog.header", {
      action: t("components.confirmDialog.actions.delete"),
      objectHeader: objectHeader ? t(objectHeader) : "the record",
    });
    text = t("components.confirmDialog.message", {
      action: t("components.confirmDialog.actions.delete"),
      objectHeader: objectHeader ? t(objectHeader) : "the record",
    });
    className = "flex align-items-center justify-content-center";
  }

  return (
    <Dialog
      maximizable
      appendTo="self"
      visible={confirmDialog}
      header={confirmDialogHeader ?? header}
      modal
      footer={DialogFooter}
      onHide={hideDialog}
    >
      <div className={`${className}`}>
        {icon && <i className={`${icon}`} />}
        <span> {confirmDialogText ?? text}</span>
      </div>
    </Dialog>
  );
};
