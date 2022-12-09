import { navigate } from "gatsby";
import * as React from "react";
import { supabase } from "../utils/supabase";

type Props = {
  name: string;
  content: JSX.Element;
};

let Provider = ({ name, content }: Props): JSX.Element => {
  switch (name) {
    case "GitHub":
      return (
        <>
          <button
            onClick={async () => {
              const { user, session, error } = await supabase.auth.signIn(
                {
                  provider: `github`,
                },
                { redirectTo: "./profiles/" }
              );
            }}
          >
            {content}
          </button>
        </>
      );
    case "GitLab":
      return (
        <>
          <button
            onClick={async () => {
              const { user, session, error } = await supabase.auth.signIn(
                {
                  provider: `gitlab`,
                },
                { redirectTo: "./profiles/" }
              );
            }}
          >
            {content}
          </button>
        </>
      );
    case "Google":
      return (
        <>
          <button
            onClick={async () => {
              const { user, session, error } = await supabase.auth.signIn(
                {
                  provider: `google`,
                },
                {
                  redirectTo: "./profiles/",
                }
              );
            }}
          >
            {content}
          </button>
        </>
      );

    case "Us":
      return (
        <>
          <>
            <button
              onClick={async () => {
                navigate("./signup");
              }}
            >
              {content}
            </button>
          </>
        </>
      );
    default:
      return <></>;
  }
};
export default Provider;
