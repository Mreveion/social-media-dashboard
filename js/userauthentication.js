// User Authentication

// Simulated user data
const users = [];

// Function to register a new user
function registerUser(username, password) {
    const newUser = {
        id: Date.now().toString(),
        username,
        password, // Note: For a real-world application, passwords should be hashed
        artworks: [] // Array to store user's uploaded artworks
    };
    
    users.push(newUser);
    console.log('User registered:', newUser);
}

// Function to log in a user
function loginUser(username, password) {
    const user = users.find(u => u.username === username && u.password === password);
    
    if (user) {
        console.log('User logged in:', user);
        return user;
    } else {
        console.log('Invalid credentials');
        return null;
    }
}

// Function to log out a user
function logoutUser() {
    console.log('User logged out');
}
