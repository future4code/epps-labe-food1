import styled from "styled-components";
import Button from "@material-ui/core/Button";

export const ContainerFoot = styled.footer`
  width: 328px;
  /* height: 188px; */

  /* display: flex;
justify-content: space-between; */
`;

export const DisplayButtonFooter = styled(Button)`
  display: inline-flex;
  justify-content: center;
  position: absolute;
  bottom: 0;

  img {
    width: 27px;
    height: 26.2px;
  }
`;
