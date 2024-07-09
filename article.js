const template = document.createElement('template');

template.innerHTML = `
  <style>
     * {
        box-sizing: border-box;
     }
     .article-container {
        background: aliceblue;
        width: 340px;
        height: 500px;
        margin: 0 auto;
        border-radius: 5px;
        padding: 20px 30px;
        display: flex;
        flex-direction: column;
     }
     img {
        width: 340px;
        height: 224px;
        border-top-right-radius: 5px;
        border-top-left-radius: 5px;
        margin: -20px -30px;
     }
     h2 {
        font-size: 24px;
        line-height: 32px;
     }
     p {
       font-size: 14px;
       line-height: 18px; 
       flex-grow: 1;
     }
     button {
        background-color: #333333;
        color: azure;
        border-radius: 5px;
        width: 100%;
        padding: 8px 0;
        font-size: 16px;
        line-height: 20px;
        cursor: pointer;
     }
  </style>
  <section class="article-container">
    <img />  
    <h2></h2>
    <p></p>
    <button></button>
  </section>
`;

class Article extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.shadowRoot.querySelector('h2').innerText = this.getAttribute('title');
    this.shadowRoot.querySelector('p').innerText = this.getAttribute('content');
    this.shadowRoot.querySelector('img').src = this.getAttribute('image');
    this.shadowRoot.querySelector('button').innerText = this.getAttribute('btnContent');
  }
}

customElements.define('user-card', Article);
