import { supabase } from "./supabase";

let sign_up_wrapper = async (
  email: string,
  password: string,
  username?: string
) => {
  const { user, session, error } = await supabase.auth.signUp({
    email: email,
    password: password,
  });
  await supabase.from("Users").insert([
    {
      userid: user?.id!,
      username: username,
      created_at: new Date(),
      streak: 0,
      points_scored: 0,
      level: 1,
      profile_created: true,
    },
  ]);
  return { user, session, error };
};

let sign_in_wrapper = async (email: string, password?: string) => {
  const { user, session, error } = await supabase.auth.signIn({
    email: email,
    password: password,
  });
  return { user, session, error };
};

let check_login = () => {
  if (supabase.auth.user()) {
    return true;
  } else {
    return false;
  }
};

export { sign_up_wrapper, sign_in_wrapper, check_login };
