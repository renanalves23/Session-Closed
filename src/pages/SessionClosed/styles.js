import styled from "styled-components";

export const Container = styled.section`
  @media screen and (max-width: 767px) {
    /* flex-direction: row; */
  }

  display: flex;
  /* flex: 1; */
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const MessageContainer = styled.section``;
export const Title = styled.p`
  font-size: 24px;
  font-weight: bold;
`;

export const Text = styled.span`
  font-size: 16px;
  font-weight: 200;
`;
