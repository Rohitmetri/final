// Add tilt effect to blog sections
document.querySelectorAll('.blog-section').forEach(section => {
  section.addEventListener('mousemove', (e) => {
    const rect = section.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    section.style.transform = `perspective(1000px) rotateX(${y * 5}deg) rotateY(${x * 5}deg) translateZ(20px)`;
  });

  section.addEventListener('mouseleave', () => {
    section.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
  });
});

// Comment Functionality
let comments = JSON.parse(localStorage.getItem('comments')) || []; // Load comments from localStorage or initialize an empty array

// Function to save comments to localStorage
function saveComments() {
  localStorage.setItem('comments', JSON.stringify(comments));
}

// Function to render comments
function renderComments() {
  const commentsContainer = document.getElementById('comments');
  commentsContainer.innerHTML = ''; // Clear existing comments

  comments.forEach((comment) => {
    // Create a new comment element
    const commentElement = document.createElement('div');
    commentElement.className = 'comment';

    // Add comment text
    const commentTextElement = document.createElement('p');
    commentTextElement.textContent = comment.text;
    commentElement.appendChild(commentTextElement);

    // Add comment author
    const commentAuthor = document.createElement('p');
    commentAuthor.className = 'comment-author';
    commentAuthor.textContent = `- ${comment.author}`;
    commentElement.appendChild(commentAuthor);

    // Add the comment to the comments container
    commentsContainer.appendChild(commentElement);
  });
}

// Load comments when the page loads
document.addEventListener('DOMContentLoaded', renderComments);

// Handle comment form submission
document.getElementById('comment-form').addEventListener('submit', function (e) {
  e.preventDefault();
  const commentInput = document.getElementById('comment-input');
  const commentText = commentInput.value.trim();

  if (commentText) {
    // Create a new comment object
    const comment = {
      text: commentText,
      author: 'Anonymous', // Default author
    };

    // Add the comment to the array
    comments.push(comment);

    // Save comments to localStorage
    saveComments();

    // Render the comments
    renderComments();

    // Clear the input
    commentInput.value = '';
  }
});