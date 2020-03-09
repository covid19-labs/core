import { formatTimestamp } from "@arkecosystem/core-utils";
import { Interfaces } from "@covid19-labs/crypto";

export const transformLock = (lock: Interfaces.IHtlcLock) => {
    return {
        ...lock,
        amount: lock.amount.toFixed(),
        timestamp: formatTimestamp(lock.timestamp),
    };
};
