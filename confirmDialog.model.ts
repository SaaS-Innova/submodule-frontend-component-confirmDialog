import { ReactNode } from "react";
export interface IConfirmDialog {
  confirmDialog: boolean;
  setConfirmDialog: (data: boolean) => void;
  onConfirm: () => void;
  confirmDialogText?: string | ReactNode;
  confirmDialogHeader?: string;
  type?: string;
  onClosed?: () => void;
  disabled?: boolean;
  onCanceled?: () => void;
  icon?: string;
  objectHeader?: string;
  appendTo?: HTMLElement | "self" | null;
  buttonType?: "button" | "submit";
  cancelButtonLabel?: string;
  confirmButtonLabel?: string;
}
