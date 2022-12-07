import { WalletKitProvider } from "@mysten/wallet-kit";

import ConnectWallet from "./ConnectWallet";

export default function App() {
  return (
    <WalletKitProvider>
      <ConnectWallet />
    </WalletKitProvider>
  );
}
