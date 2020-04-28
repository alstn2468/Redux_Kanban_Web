import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import { connect } from "react-redux";
import { lightTheme, darkTheme } from "Constants/Theme";
import GlobalStyles from "Components/GlobalStyles";
import ThemeChangeButton from "Components/ThemeChangeButton";
import useDarkMode from "Components/useDarkMode";

const mapStateToProps = (state) => {
    return state;
};

function App(state) {
    const [theme, setTheme, componentMounted] = useDarkMode();

    if (!componentMounted) {
        return <div />;
    }

    return (
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
            <ThemeChangeButton theme={theme} setTheme={setTheme} />
            <h1>Hello World!</h1>
            <GlobalStyles />
        </ThemeProvider>
    );
}

App.propTypes = {
    state: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(App);
