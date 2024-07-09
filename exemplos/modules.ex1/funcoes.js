module.exports = (x) => {
    const par = (n) => n % 2
    return {
        msg: 'O valor é par?',
        value: par(x)
    }
}
