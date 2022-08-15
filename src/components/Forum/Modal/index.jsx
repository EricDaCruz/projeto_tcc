import React from "react";
import { StyledPopup } from "./styles";

export const Modal = ({button, onClick}) => (
   <StyledPopup
      trigger={button}
      modal
     style={{
      border: '5px solid #ccc',
     }}
   >
      <span> Modal content </span>
   </StyledPopup>
);
