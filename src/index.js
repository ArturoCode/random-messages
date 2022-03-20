const messages = [
    "Oscar",
    "Ana",
    "Nikolai",
    "Carolina",
    "Diego",
    "Laura"
];

const randomMessages = () => {
    const message = messages[Math.floor(Math.random() * 
        messages.length)];
    console.log(message);
};

module.exports = { randomMessages };