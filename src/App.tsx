import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { WalletKitProvider } from "@mysten/wallet-kit";
import { WalletProvider } from "@mysten/wallet-adapter-react";
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
      <WalletProvider adapters={[new MorphisWalletAdapter()]}>
        <WithLegacyWalletAdapter />
      </WalletProvider>
    ),
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
