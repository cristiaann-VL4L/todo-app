import styled from "styled-components";
import { PRIMARY_COLOR } from "../../utils/styles";
import { Stage } from "../templates";
import { ListTodos } from "../todo";

export const Dashboard = () => {
    return(
        <Stage title="Your Dashboard" alignTitle="center">
            <ListTodos />
        </Stage>
    );
}

const Wrapper = styled.div`
    padding: 1rem;
    background-color: ${PRIMARY_COLOR};
`;
