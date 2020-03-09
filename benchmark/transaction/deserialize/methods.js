const {
    Transactions
} = require('@covid19-labs/crypto')

exports.deserialize = data => {
    return Transactions.Deserializer.deserialize(data)
}
