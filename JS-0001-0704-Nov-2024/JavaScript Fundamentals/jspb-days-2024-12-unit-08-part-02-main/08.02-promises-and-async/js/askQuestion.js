function _getRandomResponse() {
    const list = [
        "It is certain.",
        "It is decidedly so.",
        "Without a doubt.",
        "Yes definitely.",
        "You may rely on it.",

        "As I see it, yes.",
        "Most likely.",
        "Outlook good.",
        "Yes.",
        "Signs point to yes.",

        "Reply hazy, try again.",
        "Ask again later.",
        "Better not tell you now.",
        "Cannot predict now.",
        "Concentrate and ask again.",

        "Don't count on it.",
        "My reply is no.",
        "My sources say no.",
        "Outlook not so good.",
        "Very doubtful.",
    ];

    const index = Math.floor(Math.random() * list.length)
    return list[index];
}

function askQuestion(question) {
    return new Promise((resolve, reject) => {
        if (typeof question !== "string" || question.length < 3) {
            reject("Please format your question correctly.");
        }

        setTimeout(() => {
            const response = _getRandomResponse();
            resolve(response);
        }, 100 * Math.ceil(Math.random() * 10));
    })
}