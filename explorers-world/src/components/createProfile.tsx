import { navigate } from "gatsby";
import * as React from "react";
import { useState } from "react";
import { FiUserPlus } from "react-icons/fi";
import { MdSend } from "react-icons/md";
import Layout from "./layout";
import { supabase } from "../utils/supabase";

let CreateProfile = (): JSX.Element => {
  const [input, setInput] = useState("");
  const [Conflict, setConflict] = useState(false);
  return (
    <>
      <section className="text-white pt-8 font-bold text-xl">
        Hello there!
      </section>
      <section className="py-2 text-slate-200 italic font-regular text-xl translate-x-4">
        You can register/update your username.
      </section>
      <section className="text-orange-600 font-semibold text-xl">
        You need to send a username to have your profile listed in the public
        search.
      </section>
      <section className="mt-4 h-0.5 w-full bg-gradient-to-r  from-teal-600 to-emerald-400" />
      <form>
        <section className="flex flex-auto items-center my-5 bg-white text-black font-semibold rounded-md">
          <FiUserPlus className="m-2 text-2xl flex-none" />
          <input
            type="username"
            placeholder="Enter your username"
            className="py-2 h-8 px-2 mx-2 w-full flex-grow"
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            onClick={async (e) => {
              e.preventDefault();
              const { data, error } = await supabase
                .from("Users")
                .upsert({
                  username: input,
                })
                .eq("userid", supabase.auth.session()?.user?.id!);
              if (error?.code) {
                setConflict(true);
              }
            }}
          >
            <MdSend className="text-2xl m-2 hover:rounded-full hover:p-1 hover:bg-slate-600 hover:text-white" />
          </button>
        </section>
        <section className="text-white gap-2">
          <input
            className="bg-slate-300 border-bg-black border pr-4"
            type="checkbox"
            name="click"
            defaultChecked
          />
          Show my profile to visitors 
        </section>
      </form>

      {Conflict ? (
        <>
          <section className="text-red-600 font-semibold text-xl">
            Username already exists!
          </section>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default CreateProfile;
