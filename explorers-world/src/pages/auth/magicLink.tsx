import * as React from "react";
import { useState } from "react";
import Layout from "../../components/layout";
import { supabase } from "../../utils/supabase";

const MagicLink = (): JSX.Element => {
  const [email, setEmail] = useState("");
  return (
    <Layout>
      <>
        <section className="flex py-8 text-center text-white text-4xl font-extrabold hover:italic">
          Login
        </section>
        <input
          className="bg-white text-black flex flex-auto justify-start place-content-center rounded-md w-full py-1 px-2 m-1"
          type="email"
          name="email"
          placeholder="Your Email"
          autoComplete="username"
          onChange={(e) => setEmail(e.target.value)}
        />
        <section className="flex flex-1 justify-end">
          <button
            className=" text-white text-lg font-medium rounded-md lg:p-1 m-2 sm:text-md bg-teal-600"
            onClick={async () => {
              await supabase.auth.signIn({ email: email });
            }}
          >
            Send Link
          </button>
        </section>
      </>
    </Layout>
  );
};
export default MagicLink;
