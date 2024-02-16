import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

const container = document.getElementById('root');
if (!container) {
  throw new Error('Container root was not found');
}

const root = createRoot(container);
root.render(
  <BrowserRouter>
    <div>Start</div>
  </BrowserRouter>
);
