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

const mapStateToProps = (state) => {
    return state;
};

const KanbanContainer = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;

const KanbanTitleText = styled.div`
    text-align: center;
    margin-top: 100px;
    margin-bottom: 10px;
    font-size: 64px;
    font-weight: bold;
    font-family: "Abel", sans-serif;
    text-shadow: 4px 4px 1px gray;
    @media (min-width: 320px) and (max-width: 480px) {
        margin-top: 24px;
        font-size: 36px;
        text-shadow: 3px 3px 1px gray;
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
                <KanbanTitleText>I LOVE AGILE</KanbanTitleText>
                <SocialMedia />
                <ThemeChangeButton theme={theme} setTheme={setTheme} />
                <GlobalStyles />
            </KanbanContainer>
        </ThemeProvider>
    );
}

App.propTypes = {
    state: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(App);
