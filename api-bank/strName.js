function strName(str) {
    const lastinex = str.lastIndexOf(' ');
    const name = str.slice(0, lastinex + 1) + str.charAt(lastinex + 1)
    return name
}

module.exports = strName