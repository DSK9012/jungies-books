import ReactDOM from 'react-dom';
import { ThemeProvider } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
import { Worker } from '@react-pdf-viewer/core';
import { Store } from 'store/Store';
import theme from 'helpers/theme';
import 'index.css';
import '@react-pdf-viewer/core/lib/styles/index.css';
import App from './App';

ReactDOM.render(
  <Store>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Worker workerUrl='https://unpkg.com/pdfjs-dist@2.13.216/build/pdf.worker.min.js'>
          <App />
        </Worker>
      </BrowserRouter>
    </ThemeProvider>
  </Store>,
  document.getElementById('root')
);
