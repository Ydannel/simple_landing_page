import styled from "styled-components";
import HeroImg from '../assets/bg-image.png'
const Hero = () => {

    const Section = styled.section`
        background-image: url(${HeroImg});
        height: 785px;
        display: block;
        background-repeat: no-repeat;
        background-size: contain;
        `
    const Content = styled.div`
        width: 100%;
        height: 100px;
    `
    const Left = styled.div`
        padding-left: 220px;
        padding-top: 143px;
    `
    const Title = styled.p`
        font-size: 55px;
        color: #04050a;
        font-weight: 400;
    `
    const Desc = styled.p`
        width: 472px;
        font-size: 20px;
        color: #9ca0aC;
        line-height: 30px;
        margin-top: 55px;
    `
    const Button = styled.a`
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 18px;
        margin-top: 58px;
        width: 371px;
        height: 71px;
        line-height: 71px;
        font-size: 22px;
        text-align: center;
        color: white;
        cursor: pointer;
        background: linear-gradient(90deg, #0546d6, #3f89fc);
        text-decoration: none;
        box-shadow: 0 15px 14px rgb(0 42 177 / 12%);
    `
    return ( 
        <Section>
            <Content>
                <Left>
                    <Title>
                        Get FREE ilustrations <br/> Of the best illustrators
                    </Title>
                    <Desc>
                    Create an account and you will
                     have access to a bank of <span>free and paid images</span> {''} and more!
                    </Desc>
                    <Button href='#' target='_blank'>
                        <span>Get Started now</span>
                    </Button>
                </Left>
            </Content>
        </Section>
     );
}
 
export default Hero;