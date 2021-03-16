import { ThemeProvider } from "@material-ui/styles";
import { theme } from "./theme";

export const ChatProviders: React.FC = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);
