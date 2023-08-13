document.addEventListener('DOMContentLoaded', () => {
    const titleInput = document.getElementById('titleInput');
    const contentInput = document.getElementById('contentInput');
    const publishBtn = document.getElementById('publishBtn');
  
    publishBtn.addEventListener('click', () => {
      const title = titleInput.value;
      const content = contentInput.value;
  
      if (title && content) {
        // Here you would typically send the data to a backend for storage
        console.log('Title:', title);
        console.log('Content:', content);
  
        // Clear inputs
        titleInput.value = '';
        contentInput.value = '';
      } else {
        alert('Please enter both title and content.');
      }
    });
  });
  