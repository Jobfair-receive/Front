import styled from "styled-components"
import Spinner from "../../asset/images/Rolling-1s-150px.gif"

const Container = styled.div`
    text-align: center;
`;

const Title = styled.p`
  font-size: 30px;
  text-align:center;
`;

const Img = styled.img`

`;

export default function Loading(){
    return <Container>
        <Title><b>자세한 결과</b>를 로딩 중입니다...</Title>
        <img src={Spinner} alt="로딩중"/>
    </Container>
}   


