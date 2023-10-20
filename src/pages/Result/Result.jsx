import styled from "styled-components";
import { ResultData } from "./ResultData";
import { ResultTypeData } from "./ResultData";
import { useLocation } from 'react-router-dom';

export default function Result(){
  const location = useLocation();
  const urlParams = new URLSearchParams(location.search);
  const mbti = urlParams.get('mbti');
  const msti = urlParams.get('msti');

  const mstiData = ResultTypeData.find(item => item.type == msti);

  return (
    <Container onClick={()=> console.log(mbti, msti)}>
      <Title>
        이런 <b>유형</b>인 것 같아요.
      </Title>
      <BoxAlign>
        
        {/* {ResultData.map((item) => (
          <GrayBox key={item.type}>
            <Img src={"./images/emoji.png"} alt="이미지" />
            <TypeTitle><b>{item.type}</b> 형</TypeTitle>
          </GrayBox>
        ))} */}

        <GrayBox>
            <Img src={`./images/mbti/${mbti}.png`} alt="이미지" />
            <TypeTitle><b>{ResultData[mbti]}</b> 형</TypeTitle>
          </GrayBox>
          <GrayBox>
            <Img src={`./images/msti/${msti}.png`} alt="이미지" />
            <TypeTitle><b>{ResultData[msti]}</b> 형</TypeTitle>
          </GrayBox>

      </BoxAlign>
        <ExpContainer key={mstiData.explain}>
          <div>
            <ExplainTitle>🔍 이 유형은요...</ExplainTitle>
            <Explain>{mstiData.explain}</Explain>
          </div>
          <div>
            <ExplainTitle>💁‍♂️ 이렇게 공부하면 더 좋아요.</ExplainTitle>
            <Explain>{mstiData.solution}</Explain>
          </div>
          <div>
            <ExplainTitle>🏃 이런 활동이 도움이 돼요.</ExplainTitle>
            <Explain>{mstiData.behavior}</Explain>
          </div>
        </ExpContainer >
    </Container >
  );
};

const Container = styled.div`
  padding-top: 80px;
  font-family: PretendardRegular;
`;

const Title = styled.p`
  font-size: 30px;
  margin-top: 2rem;
  text-align:center;
`;

const Img = styled.img`
  width: 10rem;
  height: 10rem;
`;

const BoxAlign = styled.div`
 display:flex; 
 justify-content:center; 
 align-items:center; 
 flex-direction : row ; 
 gap :30px ;
  padding: 1rem 0 5rem;
  border-bottom: 1px solid lightgray;
`;

const GrayBox = styled.div`
 border-radius :20px ;
 background-color:#f7f7f7 ;
 width : 35rem; 
 height : 20rem ; 
 display:flex ; 
 flex-direction: column;
 align-items:center ;  
 justify-content:center ;
`;

const TypeTitle = styled.p`
 font-size :20px ;
 text-align:center;
`;

const ExpContainer = styled.div`
 display: flex;
 padding: 4rem 20%;
 flex-direction: column;
 gap:100px ;
 justify-content: center;
`;

const ExplainTitle = styled.h2`
 font-size:30px;  
 
`;

const Explain=styled.p`  
 font-size:20px;   
`;
