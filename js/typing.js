class TypeWriter {
    constructor(element, text, speed = 30) {
        this.element = element;
        this.text = text;
        this.speed = speed;
        this.isTyping = false;
        this.hasTyped = false;
        this.index = 0;
    }

    startTyping() {
        if (this.isTyping || this.hasTyped) return;
        
        this.isTyping = true;
        this.element.classList.add('typing');
        this.type();
    }

    type() {
        if (this.index < this.text.length) {
            this.element.textContent += this.text.charAt(this.index);
            this.index++;
            setTimeout(() => this.type(), this.speed);
        } else {
            this.isTyping = false;
            this.hasTyped = true;
            this.element.classList.remove('typing');
        }
    }
}

function initializeTypingEffects() {
    const letterCards = document.querySelectorAll('.letter-card');
    
    letterCards.forEach(card => {
        const textElement = card.querySelector('.letter-text');
        const textContent = textElement.getAttribute('data-text');
        
        // Store the TypeWriter instance on the card element
        card.typeWriter = new TypeWriter(textElement, textContent, 20);
        
        // Set up click/touch event
        card.addEventListener('click', () => {
            if (!card.classList.contains('active')) {
                card.classList.add('active');
                card.typeWriter.startTyping();
            }
        });
    });
}

document.addEventListener('DOMContentLoaded', initializeTypingEffects);