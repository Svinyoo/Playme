const validUsers = [
    {
        username: 'standard_user',
        password: 'secret_sauce'
    },
    {
        username: 'locked_out_user',
        password: 'secret_sauce'
    },
    {
        username: 'performance_glitch_user',
        password: 'secret_sauce'
    },
]

const invalidUsers = [
    {
        username: 'invalid_user',
        password: 'secret_sauce'
    }
]

const problemUsers = [
    {
        username: 'problem_user',
        password: 'secret_sauce'
    },
    {
        username: 'error_user',
        password: 'secret_sauce'
    }
]

module.exports = {
    validUsers,
    invalidUsers,
    problemUsers
}



