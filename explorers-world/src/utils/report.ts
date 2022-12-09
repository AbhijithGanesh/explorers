import { supabase } from "./supabase";
import { PostgrestResponse } from "@supabase/supabase-js";

type contribution = {
  title: string;
  description: string;
  link: string;
  id: string;
};

let PostReport = async (
  title: string,
  description: string,
  link: string,
  id: string
): Promise<void> => {
  let body: PostgrestResponse<contribution> = await supabase
    .from("Contribution")
    .insert({
      title: title,
      description: description,
      links: link,
      date_of_contribution: new Date(),
      last_updated_at: new Date(),
      userid: id,
    });

  let join_insert = await supabase.from("ContriLog").insert({
    Contributions: body.data?.at(0)?.id,
    User: id,
  });
};

export default PostReport;
