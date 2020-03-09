const {
    Transactions
} = require('@covid19-labs/crypto')

const data = require('../../helpers').getJSONFixture('transaction/deserialized/0');

exports['core'] = () => {
    return Transactions.Utils.toBytes(data);
};
