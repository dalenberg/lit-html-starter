import { render } from 'lit-html';
import app from './app';

const renderApp = () => render(app(), document.body);

renderApp();

if (module.hot) {
  module.hot.accept('./app.js', () => {
    renderApp();
  });
}
