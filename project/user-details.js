let currentUserIndex = 0;
let usersData = [];
function displayUserDetails(index) {
    const user = usersData[index];

    const userDetails = document.querySelector('.user-details');
    userDetails.innerHTML = `
        <h2>User Details</h2>
<p>ID: ${user.id}</p>
            <p>Name: ${user.name}</p>
            <p>Username: ${user.username}</p>
            <p>Email: ${user.email}</p>
            <p>Phone: ${user.phone}</p>
            <p>Website: ${user.website}</p>
            <p>Address: ${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}</p>
            <p>Company: ${user.company.name}, ${user.company.catchPhrase}, ${user.company.bs}</p>
        `
}
function updateUserIndex(newIndex) {
    if (newIndex >= 0 && newIndex < usersData.length) {
        currentUserIndex = newIndex;
        displayUserDetails(currentUserIndex);
    }
}
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        usersData = users;
        displayUserDetails(currentUserIndex);
    })
    .catch(error => console.error('Error fetching user data:', error));

const showPostsButton = document.querySelector('.show-posts');
const postList = document.querySelector('.post-list');

showPostsButton.addEventListener('click', () => {
    const userId = usersData[currentUserIndex].id;
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
        .then(response => response.json())
        .then(posts => {
            postList.innerHTML = '';
            posts.forEach(post => {
                const postBlock = document.createElement('div');
                postBlock.classList.add('post');

                const postId = document.createElement('p');
                postId.textContent = `ID: ${post.id}`;

                const postTitle = document.createElement('p');
                postTitle.textContent = `Title: ${post.title}`;

                const postBody = document.createElement('p');
                postBody.textContent = `Body: ${post.body}`;

                postBlock.appendChild(postId);
                postBlock.appendChild(postTitle);
                postBlock.appendChild(postBody);

                postList.appendChild(postBlock);
            });
        })
        .catch(error => console.error('Error fetching user posts:', error));
});


const prevUserButton = document.querySelector('.prev-user');
const nextUserButton = document.querySelector('.next-user');

prevUserButton.addEventListener('click', () => {
    updateUserIndex(currentUserIndex - 1);
});

nextUserButton.addEventListener('click', () => {
    updateUserIndex(currentUserIndex + 1);
});














const urlParams = new URLSearchParams(window.location.search);
let userId = urlParams.get('userId');


// Отримуємо дані користувачів з API
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        // Знаходимо індекс користувача за його ID
        for (let i = 0; i < users.length; i++) {
            if (users[i].id === parseInt(userId)) {
                currentUserIndex = i;
                break;
            }
        }

        // Перевірка, чи користувача знайдено
        if (currentUserIndex === -1) {
            console.error('User not found');
            return;
        }

        const userDetails = document.querySelector('.user-details');
        const user = users[currentUserIndex];

        userDetails.innerHTML = `
            <h2>User Details</h2>
            <p>ID: ${user.id}</p>
            <p>Name: ${user.name}</p>
            <p>Username: ${user.username}</p>
            <p>Email: ${user.email}</p>
            <p>Phone: ${user.phone}</p>
            <p>Website: ${user.website}</p>
            <p>Address: ${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}</p>
            <p>Company: ${user.company.name}, ${user.company.catchPhrase}, ${user.company.bs}</p>
        `;
    })
    .catch(error => console.error('Error fetching user details:', error));



showPostsButton.addEventListener('click', () => {
    const userId = usersData[currentUserIndex].id;
    // Отримуємо список постів поточного користувача з API
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
        .then(response => response.json())
        .then(posts => {
            postList.innerHTML = ''; // Очищаємо список постів

            posts.forEach(post => {
                const postBlock = document.createElement('div');
                postBlock.classList.add('post');

                const postId = document.createElement('p');
                postId.textContent = `ID: ${post.id}`;

                const postTitle = document.createElement('p');
                postTitle.textContent = `Title: ${post.title}`;

                const postBody = document.createElement('p');
                postBody.textContent = `Body: ${post.body}`;

                postBlock.appendChild(postId);
                postBlock.appendChild(postTitle);
                postBlock.appendChild(postBody);

                postList.appendChild(postBlock);
            });
        })
        .catch(error => console.error('Error fetching user posts:', error));
});