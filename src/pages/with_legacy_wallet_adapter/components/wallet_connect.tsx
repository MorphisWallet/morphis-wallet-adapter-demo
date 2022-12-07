import { useEffect, useState } from "react";
import { useWallet } from "@mysten/wallet-adapter-react-2.0.0";

export default function WalletConnect() {
  const {
    select,
    wallet,
    getAccounts,
    supportedWallets,
    disconnect,
    connected,
    connecting,
  } = useWallet();

  const [modalOpen, setModalOpen] = useState(false);
  const [account, setAccount] = useState("");

  const onConnect = (name: string) => {
    if (connecting) return;

    try {
      select(name);
    } catch (e) {
      console.warn(e);
    }
  };

  const onDisconnect = () => {
    try {
      disconnect();
    } catch (e) {
      console.warn(e);
    }
  };

  useEffect(() => {
    if (wallet && connected) {
      getAccounts().then((accounts) => {
        setAccount(accounts[0]);
      });
    }
  }, [wallet, connected]);

  if (account && connected) {
    return (
      <button
        onClick={onDisconnect}
        className="bg-cyan-500 hover:bg-cyan-700 text-white rounded-xl px-4 py-2"
      >
        Disconnect
        {` ${account}`}
      </button>
    );
  }

  return (
    <>
      <button
        onClick={() => setModalOpen(true)}
        className="bg-cyan-500 hover:bg-cyan-700 text-white rounded-xl px-4 py-2"
      >
        Connect Wallet
      </button>
      {modalOpen && (
        <div className="fixed inset-0 flex justify-center items-center overflow-hidden z-[1010]">
          <div className="flex flex-col items-center relative bg-[#f1f1f1] border border-black rounded-xl shadow-md w-[360px] py-2 z-[1011]">
            <span
              onClick={() => setModalOpen(false)}
              className="absolute px-1.5 py-0.5 right-4 leading-4 cursor-pointer hover:bg-[#e4e4e4]"
            >
              x
            </span>
            <p className="text-center">Connect Wallet</p>
            <div className="text-bolder mb-6 text-sm text-rose-500">
              {`Detected ${supportedWallets.length} wallet${
                supportedWallets.length === 1 ? "" : "s"
              }`}
            </div>
            {supportedWallets.map((wallet) => {
              return (
                <div
                  key={wallet.adapter.name}
                  className="flex items-center text-center my-2 px-3 py-3 rounded-md hover:bg-gray-300 cursor-pointer"
                  onClick={() => onConnect(wallet.adapter.name)}
                >
                  <img
                    src={
                      wallet.adapter.name !== "Sui Wallet"
                        ? // @ts-ignore
                          wallet.adapter?.icon || "https://placeholder.com/"
                        : "https://lh3.googleusercontent.com/SSC3XbDl5y058Dw5lxRqDSoehs26WQqe3cfmBO8hbNOuU8cIxKwT3CM7VD1nGdgbnNbJU7NUq2nGL13mElALRZYC=w128-h128-e365-rj-sc0x00ffffff"
                    }
                    className="w-8"
                  />
                  <div className="text-bold ml-3">{wallet.adapter.name}</div>
                </div>
              );
            })}
          </div>
          <div
            className="fixed inset-0 bg-black opacity-50 z-[1010]"
            onClick={() => setModalOpen(false)}
          />
        </div>
      )}
    </>
  );
}
