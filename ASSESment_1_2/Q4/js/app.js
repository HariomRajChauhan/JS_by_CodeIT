/* You will create a function that simulates fetching user data from two different sources. The function should combine the results and return a single object with all the user information. You will use Promises to handle the asynchronous operations.
    
    Instructions
    
    1. **Create two mock data fetching functions:**
        - `fetchUserProfile(userId)`: This function simulates fetching a user profile.
        - `fetchUserPosts(userId)`: This function simulates fetching user posts.
    2. **Create a function `getUserData(userId)` that:**
        - Fetches the user profile and user posts using the above mock data fetching functions.
        - Combines the results into a single object.
        - Returns a Promise that resolves with the combined user data.
    3. **Handle errors gracefully.** */


function fetchUserProfile(userId) { 
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (userId === 1) {
                resolve({
                    userId: 1,
                    name: 'John Doe',
                    email: 'hello12@gmail.com',
                });
            }
            else {
                reject('User not found');
            }
        }
        , 3000);
    }
    );
}

function fetchUserPosts(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (userId === 1) {
                resolve([
                    { id: 1, body: 'Hello World' },
                    { id: 2, body: 'Hello Again' },
                ]);
            }
            else {
                reject('User not found');
            }
        }
        , 3000);
    }
    );
}

function getUserData(userId) {
    return Promise.all([fetchUserProfile(userId), fetchUserPosts(userId)]).then(([profile, posts]) => {
        return { ...profile, posts: posts };
    }
    );
}

getUserData(1).then((data) => {
    console.log(data);
}
).catch((error) => {
    console.log(error);
}
);

getUserData(2).then((data) => {
    console.log(data);
}

).catch((error) => {
    console.log(error);
}
);

getUserData(3).then((data) => {
    console.log(data);
}

).catch((error) => {
    console.log(error);
}
);

