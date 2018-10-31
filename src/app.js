import { html } from 'lit-html';

const heading = (title) => html`
  <style>
    h1 {
      font-family: sans-serif;
    }
  </style>
  <h1>${title}</h1>
`

const app = () => heading('Hello World!');

export default app;
