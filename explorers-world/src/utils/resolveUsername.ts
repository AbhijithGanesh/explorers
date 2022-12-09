import { PostgrestResponse } from "@supabase/supabase-js";
import { supabase } from "./supabase";

let resolve_username = async (
  userid: string = supabase.auth.user()?.id!
): Promise<any> => {
  let username: PostgrestResponse<string> = await supabase
    .from("Users")
    .select("username")
    .eq("userid", userid);
  return username;
};

export default resolve_username;
