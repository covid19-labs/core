import { Utils } from "@covid19-labs/crypto";

export const transformRoundDelegate = model => {
    return {
        publicKey: model.publicKey,
        votes: Utils.BigNumber.make(model.balance).toFixed(),
    };
};
