import React from "react";
import styled from "styled-components";

const BoardContainer = styled.div`
    display: flex;
    flex: 1;
    border-width: 1px;
    border-style: solid;
    border-color: ${({ theme }) => theme.inputBorder};
    height: 100%;
    margin: 0 20px;

    @media (min-width: 320px) and (max-width: 480px) {
        margin: 10px 10px;
    }
`;

function Board() {
    return <BoardContainer></BoardContainer>;
}

export default Board;
