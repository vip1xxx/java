const urlParams = new URLSearchParams(window.location.search);
const postId = urlParams.get('postId');

const postDetails = document.querySelector('.post-details');
const commentList = document.querySelector('.comment-list');

fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then(response => response.json())
    .then(post => {
        postDetails.innerHTML = `
            <h2>Post Details</h2>
            <p>ID: ${post.id}</p>
            <p>Title: ${post.title}</p>
            <p>Body: ${post.body}</p>
        `;
    })
    .catch(error => console.error('Error fetching post details:', error));

fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
    .then(response => response.json())
    .then(comments => {
        comments.forEach(comment => {
            const commentBlock = document.createElement('div');
            commentBlock.classList.add('comment');

            const commentId = document.createElement('p');
            commentId.textContent = `ID: ${comment.id}`;

            const commentName = document.createElement('p');
            commentName.textContent = `Name: ${comment.name}`;

            const commentEmail = document.createElement('p');
            commentEmail.textContent = `Email: ${comment.email}`;

            const commentBody = document.createElement('p');
            commentBody.textContent = `Body: ${comment.body}`;

            commentBlock.appendChild(commentId);
            commentBlock.appendChild(commentName);
            commentBlock.appendChild(commentEmail);
            commentBlock.appendChild(commentBody);

            commentList.appendChild(commentBlock);
        });
    })
    .catch(error => console.error('Error fetching comments:', error));



const urlParams = new URLSearchParams(window.location.search);
const postId = urlParams.get('id');

if (postId) {
    function fetchAndDisplayPostDetails(postId) {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            .then(response => response.json())
            .then(postDetails => {
                const postDetailsContainer = document.getElementById('post-details-container');

                const postTitle = document.createElement('h2');
                postTitle.textContent = postDetails.title;

                const postBody = document.createElement('p');
                postBody.textContent = postDetails.body;

                postDetailsContainer.appendChild(postTitle);
                postDetailsContainer.appendChild(postBody);
            })
            .catch(error => console.error('Помилка під час отримання даних про пост:', error));
    }

    function fetchAndDisplayPostComments(postId) {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
            .then(response => response.json())
            .then(comments => {
                const commentContainer = document.getElementById('comment-container');

                comments.forEach(comment => {
                    const commentBlock = document.createElement('div');
                    commentBlock.classList.add('comment-block');

                    const commentName = document.createElement('p');
                    commentName.textContent = `Name: ${comment.name}`;

                    const commentEmail = document.createElement('p');
                    commentEmail.textContent = `Email: ${comment.email}`;

                    const commentBody = document.createElement('p');
                    commentBody.textContent = `Comment: ${comment.body}`;

                    commentBlock.appendChild(commentName);
                    commentBlock.appendChild(commentEmail);
                    commentBlock.appendChild(commentBody);

                    commentContainer.appendChild(commentBlock);
                });
            })
            .catch(error => console.error('Помилка під час отримання коментарів до поста:', error));
    }

    fetchAndDisplayPostDetails(postId);
    fetchAndDisplayPostComments(postId);
} else {
    console.error('Не знайдено id поста в параметрах URL.');
}