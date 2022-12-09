import * as React from "react";
import { supabase } from "../../utils/supabase";

const Signout = () => {
  return (
    <>
      <div>
        <button
          className="bg-gray-100 m-2 px-4 text-lg font-regular"
          onClick={() => supabase.auth.signOut()}
        >
          Sign Out
        </button>
      </div>
    </>
  );
};

export default Signout;
