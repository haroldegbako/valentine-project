class CustomHeader extends HTMLElement {
    connectedCallback() {
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.innerHTML = `
        <style>
          header {
            background: linear-gradient(to right, #ff758c, #ff7eb3);
            color: white;
            padding: 1.5rem;
            text-align: center;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            position: relative;
            z-index: 100;
          }
          h1 {
            font-family: 'Great Vibes', cursive;
            font-size: 2.5rem;
            margin: 0;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
          }
          nav {
            margin-top: 1rem;
          }
          nav a {
            color: white;
            text-decoration: none;
            margin: 0 1rem;
            font-weight: 500;
            transition: all 0.3s ease;
          }
          nav a:hover {
            text-decoration: underline;
            text-shadow: 0 0 5px rgba(255, 255, 255, 0.8);
          }
        </style>
        <header>
          <h1>Happy Valentine's Day</h1>
          <nav>
            <a href="/">Home</a>
            <a href="story.html">Our Story</a>
          </nav>
        </header>
      `;
    }
  }
  customElements.define('custom-header', CustomHeader);