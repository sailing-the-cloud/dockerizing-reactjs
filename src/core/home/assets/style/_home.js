import styled from "styled-components";


export const Container = styled.div`
    padding-top: 50px;

    @media screen and (max-width: 1200px) {
        padding: 80px;
    }
    @media screen and (max-width: 800px) {
        padding: 60px;
    }
    @media screen and (max-width: 600px) {
        padding: 40px;
    }
    @media screen and (max-width: 450px) {
        padding: 20px;
    }
`

export const Title = styled.p`
    font-family: 'Courier'
    font-size: 20px;
    font-style: bold;

    @media screen and (max-width: 1200px) {
        font-size: 4rem;
    }
    @media screen and (max-width: 800px) {
        font-size: 3rem;
    }
    @media screen and (max-width: 600px) {
        font-size: 2.4rem;
    }
    @media screen and (max-width: 450px) {
        font-size: 1.6rem;
    }
` 

export const CardStyle = styled.div`
    margin-bottom: 20px;
    text-align: center;

    @media screen and (max-width: 1200px) {
        margin-bottom: 15px;
    }
    @media screen and (max-width: 800px) {
        margin-bottom: 10px;
    }
    @media screen and (max-width: 600px) {
        margin-bottom: 5px;
    }
    @media screen and (max-width: 450px) {
        margin-bottom: 5px;
    }
`
