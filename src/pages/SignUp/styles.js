import styled from 'styled-components'

export const Title = styled.div`
//  border: 1px solid black; 
// font-size: 30px;
// width: 120px;
// background: -webkit-linear-gradient(
//     RGB(0,0,0) 50%,
//     RGB(92, 182, 70) 50%
//   );
//   -webkit-background-clip: text;
//   -webkit-text-fill-color: transparent;
`

export const ContainerInput = styled.div`
width: 398px;
margin-bottom: 12px;
margin-top: 12px;
@media (max-width: 736px) {
    width: 143%;
    margin-bottom: 10px;
    margin-top: 15px;
   } ;
`
export const LogoTitle = styled.img`
margin-top: 1vh;
margin-bottom: 30px;
heigth: 104px;
    width: 158px;


  @media (min-width: 500px) and (max-width: 800px) {
    margin: 40vh;
    heigth: 150px;
    width: 126px;
   }
   @media (max-width: 499px) {
    margin-top: 5px;
     heigth: 65px;
     width: 126px;
   } ;
`

