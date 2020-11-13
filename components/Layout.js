import React, { useEffect, useState, useContext } from "react";
import { Container } from "semantic-ui-react";
import { Stack, createTheme, loadTheme } from '@fluentui/react';
import { ThemeProvider } from '@fluentui/react-theme-provider';
import Header from "./Header";
import Head from "next/head";
import Theme from '../context';

const darkTheme = createTheme({
  palette: {
    themePrimary: '#0078d4',
    themeLighterAlt: '#eff6fc',
    themeLighter: '#deecf9',
    themeLight: '#c7e0f4',
    themeTertiary: '#71afe5',
    themeSecondary: '#2b88d8',
    themeDarkAlt: '#106ebe',
    themeDark: '#005a9e',
    themeDarker: '#004578',
    neutralLighterAlt: '#0b0b0b',
    neutralLighter: '#151515',
    neutralLight: '#252525',
    neutralQuaternaryAlt: '#2f2f2f',
    neutralQuaternary: '#373737',
    neutralTertiaryAlt: '#595959',
    neutralTertiary: '#c8c8c8',
    neutralSecondary: '#d0d0d0',
    neutralPrimaryAlt: '#dadada',
    neutralPrimary: '#ffffff',
    neutralDark: '#f4f4f4',
    black: '#f8f8f8',
    white: '#000000',
  }
});

const lightTheme = createTheme({
  palette: {
    themePrimary: '#0078d4',
    themeLighterAlt: '#eff6fc',
    themeLighter: '#deecf9',
    themeLight: '#c7e0f4',
    themeTertiary: '#71afe5',
    themeSecondary: '#2b88d8',
    themeDarkAlt: '#106ebe',
    themeDark: '#005a9e',
    themeDarker: '#004578',
    neutralLighterAlt: '#f8f8f8',
    neutralLighter: '#f4f4f4',
    neutralLight: '#eaeaea',
    neutralQuaternaryAlt: '#dadada',
    neutralQuaternary: '#d0d0d0',
    neutralTertiaryAlt: '#c8c8c8',
    neutralTertiary: '#595959',
    neutralSecondary: '#373737',
    neutralPrimaryAlt: '#2f2f2f',
    neutralPrimary: '#000000',
    neutralDark: '#151515',
    black: '#0b0b0b',
    white: '#ffffff',
  }
});

const Layout = props => {
  const { theme: curTheme, setTheme } = useContext(Theme);

  return (
    <ThemeProvider theme={curTheme === 'light' ? lightTheme : darkTheme}>
      <div>
        <Head>
          <title>Tender DApp 2.0</title>
        </Head>
        <Header theme={curTheme} setTheme={setTheme} />
        <Stack style={{ padding: '15px 8%', minHeight: '100vh' }}  >
          {props.children}
        </Stack>
      </div>
    </ThemeProvider>
  );
};

export default Layout;
