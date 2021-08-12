import * as S from "./styles";
import SessionClosed from "../../assets/session-closed.png";

export default function SessionClosedConponent() {
  return (
    <S.Container>
      <img width={120} alt="Sessão expirada" src={SessionClosed} />
      <S.MessageContainer>
        <S.Title>Sessão Expirada</S.Title>
        <S.Text>
          Sua sessão no home broker foi expirada. <br /> Faça o login novamente.
        </S.Text>
      </S.MessageContainer>
    </S.Container>
  );
}
