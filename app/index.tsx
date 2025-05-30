import { Redirect } from "expo-router";
import { ThemeProvider } from "styled-components";

import theme from "../theme";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Redirect href="/Groups/index" />

    </ThemeProvider>
  )
}
