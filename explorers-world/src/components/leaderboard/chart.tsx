import * as React from "react";
import { Link } from "gatsby";

const LeaderBoardSample = (): JSX.Element => {
  return (
    <>
      <section className="pt-8 pb-2 flex center place-content-center text-white font-light sm:text-lg md:text-lg lg:text-2xl hover:-translate-y-2">
        You too can become a member/contributor
      </section>
      <section className="h-0.5 w-auto bg-slate-500" />
      <section className="pt-8 pb-2 text-white font-light sm:text-lg md:text-lg lg:text-2xl hover:translate-x-2 hover:underline">
        <section className="flex w-full bg-cyan-600 text-white rounded-lg justify-center p-2">
          <Link to="/signup">Sign up with us!</Link>
        </section>
      </section>
    </>
  );
};
export default LeaderBoardSample;
