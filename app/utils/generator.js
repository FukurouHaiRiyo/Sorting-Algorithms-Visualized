const generator = (length) => {
    let lst = [];
    let min = 1, max = 100;

    for (let counter = 0; counter < length; counter++) {
        let n = Math.floor(Math.random() * (max - min + 1) + min);
        lst.push({key: parseInt(n), classType: 0});
    }

    return lst;
}

export default generator;