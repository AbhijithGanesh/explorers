import * as React from "react";
import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { MdSend } from "react-icons/md";
// import LeaderBoardSample from "../../components/app/LeaderboardSample";
import Layout from "../../components/layout";

let AppHandler = (): JSX.Element => {
  const [username, setUsername] = useState("");
  return (
    <section className="py-8">
      <Layout>
        <section className="font-bold text-slate-200 hover:text-white hover:italic text-3xl">
          Explore the Ocean
        </section>
        <section className="translate-x-4 text-slate-400 hover:text-white text-xl">
          of contributors and developers
        </section>
        <section className="font-semibold py-4 text-gray-200 hover:text-white text-lg">
          Find your favourite contributor and explore our leaderboard
        </section>
        <section className="flex place-items-center mx-2 bg-white text-black text-lg rounded-md h-8">
          <AiOutlineSearch className="flex-none text-black text-2xl m-4" />
          <section className="flex-none bg-slate-700 h-7 w-0.5 mr-2" />
          <form className="grow">
            <input
              type="text"
              name="Username"
              placeholder="Search by username"
              className="w-full"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
          </form>
          <button onClick={() => console.log(username)}>
            <MdSend className="text-2xl mx-2" />
          </button>
        </section>
        {/* <LeaderBoardSample /> */}
      </Layout>
    </section>
  );
};

export default AppHandler;
