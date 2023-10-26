import styled from "styled-components"
import Logo from "../../asset/images/Logo.svg";


const StyledHeader = styled.header`
    padding: 0 80px;
    height: 80px;
    width: 100%;
    background-color: #FFFFFF;
    z-index: 1;
    position: fixed;
    box-shadow: 0 4px 4px -4px rgba(117, 136, 223, 0.25);
`   

const NavBar = styled.nav`
    height: 100%;
    display: flex;
    align-items: center;
`
// const Logo = styled.span`
//     font-family: PretendardBlack;
//     font-size: 40px;
// `

const StyledLink = styled.a`
    text-decoration: none;
    color: #7588df;
    font-family: PretendardSemibold;
    padding: 10px 20px;
    font-size: 24px;
`

export default function Header(){
    return <StyledHeader>
        <NavBar>
        <StyledLink href="/"><img src={Logo} /></StyledLink>
        <StyledLink href="/test">학습 유형 검사</StyledLink>
        <StyledLink href="/chat">AI 상담</StyledLink>
        </NavBar>
    </StyledHeader>
}


