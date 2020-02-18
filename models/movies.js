module.exports = {
    all: async function () {
        return [
            {id: 1},
            {id: 2},
        ]
    },

    findById: async function (id) {
        return {
            id: 1,
            title: 'Harry Potter'
        }
    },

    create: async function (movie) {
        if (movie) {
            return true
        }

        throw new Error('invalid')
    }
}
