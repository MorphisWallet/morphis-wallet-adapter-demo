import { Link } from "react-router-dom";
import cl from "classnames";
import { useWallet } from "@mysten/wallet-adapter-react";
import { MorphisIcon } from "@morphis-wallet/morphis-wallet-adapter";

import WalletConnect from "./components/wallet_connect";

export default function WithLegacyWalletAdapter() {
  const { connected, getAccounts, signAndExecuteTransaction } = useWallet();

  const handleTransaction = async () => {
    if (!connected) return;

    try {
      const accounts = getAccounts();
      if (!accounts) return;

      signAndExecuteTransaction({
        kind: "moveCall",
        data: {
          packageObjectId: "0x2",
          module: "devnet_nft",
          function: "mint",
          typeArguments: [],
          arguments: ["Morphis", "Morphis Icon", MorphisIcon],
          gasBudget: 10000,
        },
      });
    } catch (e) {
      console.warn(e);
    }
  };

  return (
    <div className="flex flex-col grow p-4">
      <div className="flex justify-between">
        <Link to="/">⬅️ Back to Home</Link>
        <WalletConnect />
      </div>
      <div className="flex flex-col justify-center items-center grow">
        <h1 className="text-4xl mb-4">Legacy Wallet Adapter example</h1>
        <button
          disabled={!connected}
          onClick={handleTransaction}
          className={cl([
            "bg-teal-500 hover:bg-teal-700 px-5 py-2 leading-5 rounded-full font-semibold text-white",
            !connected &&
              "bg-neutral-500 hover:bg-neutral-700 cursor-not-allowed",
          ])}
        >
          Send Transaction
        </button>
      </div>
    </div>
  );
}
