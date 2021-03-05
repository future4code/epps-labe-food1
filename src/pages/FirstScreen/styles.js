import styled from "styled-components";

export const Background = styled.div`
  background-color: black;
  color: white;
  height: 100vh;
`;
export const Logo = styled.div`
  height: 117px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Title = styled.img`
  margin-top: 35vh;
  border: 1px solid white

  @media (min-width: 500px) and (max-width: 800px) {
    margin: 40vh;
    heigth: 150px;
    width: 126px;
   }
   @media (max-width: 499px) {
    margin-top: 288px;
     heigth: 65px;
     width: 126px;
   } ;
`;
