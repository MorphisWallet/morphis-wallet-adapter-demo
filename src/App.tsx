import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { WalletKitProvider } from "@mysten/wallet-kit";
import {
  Wallet,
  WalletProvider,
} from "@mysten/wallet-adapter-react-2.0.0";
import { MorphisWalletAdapter } from "@morphis-wallet/morphis-wallet-adapter";

import Home from "./pages/home";
import WithWalletKit from "./pages/with_wallet_kit";
import WithLegacyWalletAdapter from "./pages/with_legacy_wallet_adapter";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "with-wallet-kit",
    element: (
      <WalletKitProvider>
        <WithWalletKit />
      </WalletKitProvider>
    ),
  },
  {
    path: "with-legacy-wallet-adapter",
    element: (
      <WalletProvider
        supportedWallets={[{ adapter: new MorphisWalletAdapter() } as Wallet]}
      >
        <WithLegacyWalletAdapter />
      </WalletProvider>
    ),
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
