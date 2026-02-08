<template>
  <div class="chatbot">
    <h3>Chat with me 💬</h3>
    <input type="text" placeholder="Ask me anything..." />
  </div>
</template>

<style scoped>
.chatbot {
  margin-top: 2rem;
  background: rgba(141, 141, 141, 0.1);
  padding: 0.5rem;
  border-radius: 10px;
  width: 100%;
  max-width: 400px;
  box-sizing: border-box;
  transition: all 0.3s ease;
}

.chatbot h3 {
  font-size: 1.1rem;
  margin-bottom: 0.8rem;
  margin-top: 0.1rem;
}

.chatbot input {
  width: 100%;
  padding: 0.6rem 0.8rem;
  border: none;
  border-radius: 6px;
  outline: none;
  font-size: 0.95rem;
  background: rgba(255, 255, 255, 0.587);
  color: #000000;
  box-sizing: border-box;
}

/* ✅ Responsive for smaller screens */
@media screen and (max-width: 900px) {
  .chatbot {
    max-width: 100%;
    margin-top: 1.5rem;
    padding: 0.5rem;
  }

  .chatbot h3 {
    font-size: 1rem;
  }

  .chatbot input {
    font-size: 0.9rem;
    padding: 0.5rem 0.7rem;
  }
}
</style>
