import styled from "styled-components";

export const Banner = styled.div<{ bgImage: string }>`
  position: relative;
  width: 100%;
  height: 280px;
  background-image: url(${(props) => props.bgImage});
  background-size: cover;
  background-position: center;
  margin-bottom: 56px;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;

  .hero-text {
    width: 1080px;
    padding: 0px 32px;
    display: flex;
    flex-direction: column;
    gap: 150px;

    & p:nth-child(1) {
      font-size: 32px;
      font-weight: 100;
    }

    & p:nth-child(2) {
      font-size: 32px;
      font-weight: 900;
    }
  }
`;