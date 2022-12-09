import { Menu } from "@headlessui/react";
import { navigate } from "gatsby";
import * as React from "react";
import { useState } from "react";
import { BsFillQuestionDiamondFill } from "react-icons/bs";
import { FaUserTie } from "react-icons/fa";
import { GiSandsOfTime } from "react-icons/gi";
import { MdLeaderboard, MdLogout } from "react-icons/md";
import Layout from "../../../components/layout";
import { DropDownMenu, MenuItem } from "../../../components/navbar/dropdown";
import Navbar from "../../../components/navbar/Navbar";
import { supabase } from "../../../utils/supabase";

let EditReportID = (req: any, res: any): JSX.Element => {
  const [Title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");
  const [Submit, setSubmit] = useState(false);

  return (
    <Layout>
      <>
        <Navbar>
          <section className="z-10">
            <DropDownMenu>
              <>
                <MenuItem
                  icon={<BsFillQuestionDiamondFill />}
                  link={"/challenges"}
                  text={"View Challenges"}
                />
                <MenuItem
                  icon={<GiSandsOfTime />}
                  link={"/profiles/your-reports"}
                  text={"Your Reports"}
                />

                <MenuItem
                  icon={<MdLeaderboard />}
                  link={"/leaderboard"}
                  text={"View Leaderboard"}
                />
                <MenuItem icon={<FaUserTie />} link={"/"} text={"My Profile"} />
                <Menu>
                  <Menu.Item>
                    <button
                      className="flex flex-auto gap-2 text-black bg-white hover:bg-emerald-300 w-full items-center rounded-md p-2 text-md"
                      onClick={async() => {
                        await supabase.auth.signOut();
                        navigate("/");
                      }}
                    >
                      <section className="m-1 hover:text-bold">
                        <MdLogout />
                      </section>
                      Logout!
                    </button>
                  </Menu.Item>
                </Menu>
              </>
            </DropDownMenu>
          </section>
        </Navbar>

        <section className="text-white text-xl font-semibold py-8">
          Submit a new challenge
        </section>
        <form>
          <input
            type="text"
            placeholder="Enter your title here"
            className="w-full bg-gray-50 text-black text-lg px-2 rounded-md py-1"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />

          <textarea
            placeholder="Enter your description here"
            className="flex flex-wrap w-full bg-gray-50 text-black text-lg px-2 rounded-md py-16 mt-4 mb-2 "
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
          <input
            type="url"
            placeholder="Submit your link here"
            className="w-full bg-gray-50 text-black text-lg px-2 rounded-md my-4"
            onChange={(e) => {
              setLink(e.target.value);
            }}
          />
          <button
            className="bg-emerald-600 hover:bg-teal-600 font-semibold text-white text-xl p-2 rounded-lg w-full"
            onClick={async (e) => {
              e.preventDefault();
              let { error, body } = await supabase
                .from("Contribution")
                .update({
                  title: Title,
                  description: description,
                  links: link,
                })
                .eq("unique_id", req.params.id);
              if (error) {
                alert(error);
              }
              setSubmit(true);
            }}
          >
            Submit
          </button>
        </form>
        {Submit ? (
          <>
            <section className="text-emerald-400 font-medium text-2xl py-2">
              Saved!
            </section>
          </>
        ) : (
          <></>
        )}
      </>
    </Layout>
  );
};

export default EditReportID;
