import { ConnectButton, useWallet } from "@mysten/wallet-kit";

import Send from "./Send";

export default function ConnectToWallet() {
  return (
    <div>
      Connect wallet to get started:
      <ConnectButton />
      <div>
        <Send />
      </div>
    </div>
  );
}
