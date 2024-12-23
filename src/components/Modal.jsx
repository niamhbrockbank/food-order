import { createPortal } from "react-dom";

export default function Modal({ children }) {
  return createPortal(children, document.getElementById("modal"));
}
