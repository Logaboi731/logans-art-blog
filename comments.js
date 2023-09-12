// comments.js
const commentButton = document.getElementById('comment-button');
const commentSection = document.querySelector('.comment-section');
const commentsContainer = document.getElementById('comments');
const commentText = document.getElementById('comment-text');
const submitButton = document.getElementById('submit-comment');

commentButton.addEventListener('click', () => {
    commentSection.style.display = 'block';
});

submitButton.addEventListener('click', () => {
    const comment = commentText.value;
    // Save the comment to your JSON file or array
    // Append the comment to the commentsContainer
    commentsContainer.innerHTML += `<p>${comment}</p>`;
    commentText.value = '';
});
