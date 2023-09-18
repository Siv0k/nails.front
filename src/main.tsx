import ReactDOM from 'react-dom/client';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { Router } from 'react-router-dom';

import theme from 'config/theme';
import GlobalStyles from 'components/GlobalStyles';
import App from 'components/App';
import { history } from 'config/history';

const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Router history={history}>
      <App />
      <GlobalStyles />
    </Router>
  </ThemeProvider>,
);
