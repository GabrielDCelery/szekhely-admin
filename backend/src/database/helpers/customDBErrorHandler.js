const {
    ValidationError
} = require('objection');

const {
    UniqueViolationError
} = require('objection-db-errors');

const customDBErrorHandler = error => {
    throw new Error('Database error!');
    console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
    console.log(error)
    if (error instanceof UniqueViolationError) {
        throw new Error('Database error!');
        /*
        return {
            message: error.message,
            type: 'UniqueViolation',
            data: {
                columns: error.columns,
                table: error.table,
                constraint: error.constraint
            }
        }
        */
    }

    throw error;
}

module.exports = customDBErrorHandler;