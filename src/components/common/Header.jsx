import styled from "styled-components"


const StyledHeader = styled.header`
    padding: 0 80px;
    height: 80px;
    width: 100%;
    background-color: #7588DF;
    z-index: 1;
    position: fixed;
`   

const NavBar = styled.nav`
    height: 100%;
    display: flex;
    align-items: center;
`
const Logo = styled.span`
    font-family: PretendardBlack;
    font-size: 40px;
`

const StyledLink = styled.a`
    text-decoration: none;
    color: white;
    font-family: PretendardRegular;
    padding: 10px 20px;
    font-size: 24px;
`

export default function Header(){
    return <StyledHeader>
        <NavBar>
        <StyledLink href="/"><Logo>Acon</Logo></StyledLink>
        <StyledLink href="/test">학습 유형 검사</StyledLink>
        <StyledLink href="/chat">AI 상담</StyledLink>
        </NavBar>
    </StyledHeader>
}


