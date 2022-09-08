import { ThemeProvider } from "styled-components";

export const ThemeProviderStyled = ({ children, theme } : any) => <ThemeProvider theme={theme}>{children}</ThemeProvider>;
