const {
    ValidationError
} = require('objection');

const {
    UniqueViolationError
} = require('objection-db-errors');

const customDBErrorHandler = error => {
    console.log('!!!!!!!!!!')
    console.log(!(error instanceof ValidationError))
    if (!(error instanceof ValidationError)) {
        throw new Error(error);
    }

    if (error instanceof UniqueViolationError) {
        throw new Error('Duplicate record!');
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
}

module.exports = customDBErrorHandler;