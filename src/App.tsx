import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { WalletKitProvider } from "@mysten/wallet-kit";

import Home from "./pages/home";
import WithWalletKit from "./pages/with_wallet_kit";

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
    element: <h1>legacy-wallet-adapter</h1>,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
