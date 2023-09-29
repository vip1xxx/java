
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        const userList = document.querySelector('.user-list');

        users.forEach(user => {
            const userBlock = document.createElement('div');
            userBlock.classList.add('user');

            const userId = document.createElement('p');
            userId.textContent = `ID: ${user.id}`;

            const userName = document.createElement('p');
            userName.textContent = `Name: ${user.name}`;

            const detailsButton = document.createElement('button');
            detailsButton.textContent = 'Details';

            detailsButton.addEventListener('click', () => {
                window.location.href = `user-details.html?userId=${user.id}`;
            });

            userBlock.appendChild(userId);
            userBlock.appendChild(userName);
            userBlock.appendChild(detailsButton);

            userList.appendChild(userBlock);
        });
    })
    .catch(error => console.error('Error fetching user data:', error));