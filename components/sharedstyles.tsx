import styled from "styled-components";

const Container = styled.div`
  padding: 0 0.5rem;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  height: 100vh;
  min-height: 100vh;
`;
const Main = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 100vh;
  width: 100vw;
`;
const MobileImage = styled.img`
  position: absolute;
  height: 100vh;
  width: 100vw;
  opacity: 0;
  @media (max-width: 768px) {
    opacity: 1;
  }
`;

const DesktopImage = styled.img`
  position: absolute;
  height: 100vh;
  width: 100vw;
  opacity: 0;
  @media (min-width: 768px) {
    opacity: 1;
  }
`;
export { Container, Main, MobileImage, DesktopImage };
