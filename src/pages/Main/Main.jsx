import styled from "styled-components";
import Emo from "../../components/img/emoji.png";

const Main = () => {
  return (
    <div style={{ padding: "100px" }}>
      <BackgroundBox>
        <Row>
          <BoxContents>
            <b>안녕하세요!</b> <br></br>
            AI Consultant, <b>ACon</b>은 <br></br>
            검사를 통한 분석을 통해 학습 솔루션을 제공하고, <br></br>
            <b>학교 생활과 관련된 상담 서비스</b>를 제공하고 있어요.
            <p></p>
            지금 ACon을 이용해보러 갈까요?
          </BoxContents>
          <img src={Emo} alt="이미지" />
        </Row>
      </BackgroundBox>

      <a href="test">
        <GoBtn>검사하러 가기 →</GoBtn>
      </a>
    </div>
  );
};

export default Main;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  gap: 300px;
`;

const BackgroundBox = styled.div`
  height: 100%;
  border-radius: 20px;
  background: var(--LightGray, #f7f7f7);
  padding: 50px;
`;

const BoxContents = styled.p`
  color: var(--DefaultGray-600, #4d4d4d);
  font-family: Pretendard;
  font-size: 25px;
  font-style: normal;
  font-weight: 350;
  line-height: normal;
`;

const GoBtn = styled.button`
  display: inline-flex;
  padding: 17px 34px;
  border-radius: 10px;
  font-size: 20px;
  font-weight: border;
  color: white;
  width: 250px;
  height: 100px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background: var(--AConBlue, #7588df);
  margin: 70px 450px;
`;

const Img = styled.div``;
