import { Link } from "react-router-dom";
import cl from "classnames";
import { ConnectButton, useWalletKit } from "@mysten/wallet-kit";

export default function WithWalletKit() {
  const { status, signAndExecuteTransaction } = useWalletKit();

  const handleTransaction = async () => {
    await signAndExecuteTransaction({
      kind: "moveCall",
      data: {
        packageObjectId: "0x2",
        module: "devnet_nft",
        function: "mint",
        typeArguments: [],
        arguments: [
          "name",
          "capy",
          "https://cdn.britannica.com/94/194294-138-B2CF7780/overview-capybara.jpg?w=800&h=450&c=crop",
        ],
        gasBudget: 10000,
      },
    });
  };

  return (
    <div className="flex flex-col grow p-4">
      <div className="flex justify-between">
        <Link to="/">⬅️ Back to Home</Link>
        <ConnectButton className="bg-cyan-500 hover:bg-cyan-700 px-4 py-2">
          Connect Wallet
        </ConnectButton>
      </div>
      <div className="flex flex-col justify-center items-center grow">
        <h1 className="text-4xl mb-4">Wallet Kit example</h1>
        <button
          onClick={handleTransaction}
          disabled={status !== "CONNECTED"}
          className={cl([
            "bg-teal-500 hover:bg-teal-700 px-5 py-2 leading-5 rounded-full font-semibold text-white",
            status === "CONNECTED" &&
              "bg-neutral-500 hover:bg-neutral-700 cursor-not-allowed",
          ])}
        >
          Send Transaction
        </button>
      </div>
    </div>
  );
}
