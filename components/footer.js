class CustomFooter extends HTMLElement {
    connectedCallback() {
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.innerHTML = `
        <style>
          footer {
            background: linear-gradient(to right, #ff7eb3, #ff758c);
            color: white;
            text-align: center;
            padding: 1.5rem;
            margin-top: 2rem;
            position: relative;
            z-index: 100;
          }
          p {
            margin: 0;
            font-size: 0.9rem;
          }
          .hearts {
            font-size: 1.2rem;
            margin: 0.5rem 0;
            animation: pulse 1.5s infinite;
          }
          @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.3); }
            100% { transform: scale(1); }
          }
        </style>
        <footer>
          <div class="hearts">❤️ ❤️ ❤️</div>
          <p>Made with love for Valentine's Day</p>
        </footer>
      `;
    }
  }
  customElements.define('custom-footer', CustomFooter);