import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center grow gap-8">
      <Link to="/with-wallet-kit">
        <button className="bg-sky-500 hover:bg-sky-700 px-5 py-2 text-xl leading-5 rounded-3xl font-semibold text-white w-[320px] h-[180px]">
          With Wallet Kit example
        </button>
      </Link>
      <Link to="/with-legacy-wallet-adapter">
        <button className="bg-indigo-500 hover:bg-indigo-700 px-5 py-2 text-xl leading-5 rounded-3xl font-semibold text-white w-[320px] h-[180px]">
          With Legacy Wallet Adapter example
        </button>
      </Link>
      <a
        href="https://morphiswallet.com/"
        target="_blank"
        className="fixed bottom-4 text-[#c4c4c4]"
      >
        {`Morphis Labs https://morphiswallet.com/`}
      </a>
    </div>
  );
}
