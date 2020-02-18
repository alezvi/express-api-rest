module.exports = function (connection, dataTypes) {
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: dataTypes.STRING,
            allowNull: false
        },
        length: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        awards: {
            type: dataTypes.INTEGER,
            allowNull: false,
            default: 0
        },
        rating: {
            type: dataTypes.FLOAT,
            allowNull: false,
            default: 0
        },
        release_date: {
            type: dataTypes.DATE,
            allowNull: false
        }
    }

    let movie = connection.define('movie', cols, {
        tableName: 'movies',
        underscored: true
    })

    return movie
}
