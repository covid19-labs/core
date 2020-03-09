const {
    Blocks
} = require('@covid19-labs/crypto')

const data = require('../helpers').getJSONFixture('block/deserialized/transactions');

exports['core'] = () => {
    return Blocks.Block.serializeWithTransactions(data);
};
