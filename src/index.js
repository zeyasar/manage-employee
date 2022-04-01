import * as ReactDOMClient from 'react-dom/client';
import App from './App';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const container = document.getElementById('root');


const root = ReactDOMClient.createRoot(container);

root.render(<App/>);


