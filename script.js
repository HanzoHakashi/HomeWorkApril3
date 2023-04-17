

const form = document.getElementById('post-form');

form.addEventListener('submit', (event) => {
  event.preventDefault(); 

  const formData = new FormData(form);


  fetch('http://localhost:2727/publication/submit-post', {
      method: 'POST',
      body: formData
    })
    .then(response => {
      if (response.ok) {
        alert('Post submitted successfully!');
        form.reset();
      } else {
        throw new Error('Error submitting post');
      }
    })
    .catch(error => {
      console.error(error);
      alert('Error submitting post');
    });
});

 const commentToggleBtn = document.querySelector('.comment-toggle');
 const commentForm = document.querySelector('.comment-form');

 commentToggleBtn.addEventListener('click', () => {
   commentForm.style.display = commentForm.style.display === 'none' ? 'block' : 'none';
 });

 commentForm.addEventListener('submit', (event) => {
   event.preventDefault();

   const formData = new FormData(commentForm);
   const commentText = formData.get('commentText');

   
   const commentsList = document.querySelector('.comments-list');
   const commentItem = document.createElement('li');
   commentItem.innerText = commentText;
   commentsList.appendChild(commentItem);

   
   commentForm.reset();
 });
