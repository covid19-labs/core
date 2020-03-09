import { Interfaces, Managers, Utils } from "@covid19-labs/crypto";

export const isRecipientOnActiveNetwork = (transaction: Interfaces.ITransactionData): boolean => {
    return (
        Utils.Base58.decodeCheck(transaction.recipientId).readUInt8(0) ===
        Managers.configManager.get("network.pubKeyHash")
    );
};
