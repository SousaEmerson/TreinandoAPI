let users = [

    {
        name: 'Ana',
        age: 40,
        andress: 'rua 1'
    },
    {
        name: 'Maria',
        age: 42,
        andress: 'rua 2'
    },
    {
        name: 'Joana',
        age: 60,
        andress: 'rua 13'
    },

];
const get = (req, res) => {
    return res.json(users)
};
const post = (req, res) => {
    const user = req.body
    users.push(user)
    return res.json(user)

};
module.exports = {
    get,
    post
};