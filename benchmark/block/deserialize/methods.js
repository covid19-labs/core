const {
    Blocks
} = require('@covid19-labs/crypto')

exports.deserialize = data => {
    return Blocks.Block.deserialize(data)
}
