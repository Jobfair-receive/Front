import styled from "styled-components";
import { ResultData } from "./RsultData";
import { RsultTypeData } from "./RsultData";

export const Result = () => {
  return (
    <div>
      <Title>
        이런 <b>유형</b>인 것 같아요.
      </Title>
      <BoxAlign>
        {ResultData.map((item) => (
          <GrayBox>
            <img src={item.img} alt="이미지" />
            <TypeTitle>{item.type}</TypeTitle>
          </GrayBox>
        ))}
      </BoxAlign>
      <hr />
      {RsultTypeData.map((item) => (
        <ExpContainer>
          <div>
            <ExplainTitle>🔍 이 유형은요...</ExplainTitle>
            <Explain>{item.explain}</Explain>
          </div>
          <div>
            <ExplainTitle>💁‍♂️ 이렇게 공부하면 더 좋아요.</ExplainTitle>
            <Explain>{item.solution}</Explain>
          </div>
          <div>
            <ExplainTitle>🏃 이런 활동이 도움이 돼요.</ExplainTitle>
            <Explain>{item.behavior}</Explain>
          </div>
          <div>
            <ExplainTitle>📚 이런 책은 어떠세요?</ExplainTitle>
            <Explain>{item.book}</Explain>
          </div>
        </ExpContainer>
      ))}
    </div>
  );
};

export default Result;

const Title = styled.p`
  font-size: 30px;
  align-items: center;
  justify-content: center;
  margin-left: 410px;
`;

const BoxAlign = styled.div`
  display: flex;
  flex-direction: row;
  margin: 80px 0px 160px 0px;
  gap: 30px;
  margin-left: 50px;
`;

const GrayBox = styled.div`
  border-radius: 20px;
  background: var(--LightGray, #f7f7f7);
  width: 479px;
  height: 243px;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
`;

const TypeTitle = styled.p`
  font-size: 20px;
  font-weight: bold;
  margin-top: 150px;
  margin-left: 100px;
`;

const ExpContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 100px;
  margin-top: 100px;
`;

const ExplainTitle = styled.p`
  font-size: 20px;
  font-weight: bold;
`;

const Explain = styled.p`
  font-size: 15px;
`;

