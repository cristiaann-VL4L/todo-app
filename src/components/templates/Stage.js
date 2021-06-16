import styled from "styled-components";
import { LIGHT_COLOR } from "../../utils/styles";

export const Stage = ({children, title, alignTitle = ""}) => {
    return(
        <Wrapper>
            <Title align={alignTitle}>{title}</Title>
            <div>
                {children}
            </div>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    padding: 1.5rem 2.5rem;
    margin: 0 auto;
    width: 75%;
    background-color: ${LIGHT_COLOR}
    div {
        display: flex;
        flex-direction: column;
    }
`;

const Title = styled.h1`
    font-size: 2rem;
    text-transform: uppercase;
    text-align: ${({align}) => align || "none"}
`;