import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import { connect } from "react-redux";
import { lightTheme, darkTheme } from "Constants/Theme";
import GlobalStyles from "Components/GlobalStyles";
import ThemeChangeButton from "Components/ThemeChangeButton";
import useDarkMode from "Components/useDarkMode";
import SocialMedia from "./SocialMedia";
import Board from "./Board";

const mapStateToProps = (state) => {
    return state;
};

const KanbanContainer = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: calc(100vh - 50px);
`;

const KanbanTitleText = styled.div`
    text-align: center;
    margin-top: 60px;
    margin-bottom: 10px;
    font-size: 64px;
    font-weight: bold;
    font-family: "Abel", sans-serif;
    text-shadow: 4px 4px 1px gray;
    @media (min-width: 320px) and (max-width: 480px) {
        margin-top: 28px;
        font-size: 36px;
        text-shadow: 3px 3px 1px gray;
    }
`;

const HeaderContainer = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;

const ContentContainer = styled.div`
    display: flex;
    flex: 3;
    width: 100%;
    flex-direction: row;

    @media (min-width: 320px) and (max-width: 480px) {
        flex: 4;
        flex-direction: column;
    }
`;

function App(state) {
    const [theme, setTheme, componentMounted] = useDarkMode();

    if (!componentMounted) {
        return <div />;
    }

    return (
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
            <KanbanContainer>
                <ThemeChangeButton theme={theme} setTheme={setTheme} />
                <GlobalStyles />
                <HeaderContainer>
                    <KanbanTitleText>I LOVE AGILE</KanbanTitleText>
                    <SocialMedia />
                </HeaderContainer>
                <ContentContainer>
                    <Board />
                    <Board />
                    <Board />
                </ContentContainer>
            </KanbanContainer>
        </ThemeProvider>
    );
}

App.propTypes = {
    state: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(App);
