function getPersonInQueue(position) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const list = atob(people).split(',')
            const person = list[position - 1];
            if (person) {
                resolve(person)
            } else {
                reject(`Position value of ${position} did not return a person.`);
            }
        }, 100 * (Math.random() * 5));
    });
}