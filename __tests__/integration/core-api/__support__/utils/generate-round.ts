import { Wallets } from "@arkecosystem/core-state";
import { Utils } from "@covid19-labs/crypto";
import { Identities } from "@covid19-labs/crypto/src";

export const generateRound = (delegates, round) => {
    return delegates.map(delegate =>
        Object.assign(new Wallets.Wallet(Identities.Address.fromPublicKey(delegate)), {
            attributes: {
                delegate: {
                    round,
                    voteBalance: Utils.BigNumber.make("245098000000000"),
                },
            },
            publicKey: delegate,
        }),
    );
};
