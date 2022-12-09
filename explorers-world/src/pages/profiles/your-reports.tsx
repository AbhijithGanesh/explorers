import { Menu } from "@headlessui/react";
import { navigate } from "gatsby";
import * as React from "react";
import { useEffect } from "react";
import { AiOutlineUsergroupDelete } from "react-icons/ai";
import { FaRegEdit } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { GiSandsOfTime } from "react-icons/gi";
import { MdLeaderboard, MdSearch } from "react-icons/md";
import Layout from "../../components/layout";
import { DropDownMenu, MenuItem } from "../../components/navbar/dropdown";
import Navbar from "../../components/navbar/Navbar";
import { supabase } from "../../utils/supabase";

interface tableHeadProps {
  name: String | JSX.Element;
}

let Table_Head = ({ name }: tableHeadProps): JSX.Element => {
  return (
    <>
      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
        {name}
      </th>
    </>
  );
};

type serverDataType = {
  title: String;
  unique_id: String;
  last_updated_at: typeof String;
  links: String;
  userid: String;
};

let Table_Data = ({ name }: tableHeadProps): JSX.Element => {
  return (
    <td className="py-5 border-b border-gray-200 text-sm">
      <p className="text-teal-50 text-center whitespace-no-wrap">{name}</p>
    </td>
  );
};

let Reports = ({ serverData }: any): React.ReactNode => {
  useEffect(() => {
    return () => {
      if (!supabase.auth.session()?.user) {
        navigate("/login");
      }
    };
  }, []);
  return (
    <>
      <Layout>
        <Navbar>
          <section className="z-10">
            <DropDownMenu>
              <MenuItem
                icon={<MdLeaderboard />}
                link="/leaderboard"
                text="View Leaderboard"
              />
              <MenuItem
                icon={<GiSandsOfTime />}
                link={"/profiles/new-report"}
                text={"Submit a new report"}
              />
              <MenuItem
                icon={<MdSearch className="text-xl" />}
                link="/search"
                text="Search for explorers"
              />
              <MenuItem icon={<FiUser />} link="/profiles" text="My Profile" />
              <Menu.Item>
                <button
                  className="z-2 top flex justify-start gap-2 bg-white text-black font-medium hover:bg-emerald-300 hover:font-bold group w-full items-center rounded-md p-2 text-md"
                  onClick={async (e) => {
                    await supabase.auth.signOut();
                    navigate("/");
                  }}
                >
                  <section className="m-1">
                    <AiOutlineUsergroupDelete />
                  </section>
                  LogOut
                </button>
              </Menu.Item>
            </DropDownMenu>
          </section>
        </Navbar>

        <section className="text-white font-semibold">
          <section className="py-8">
            <table className="w-full leading-normal">
              <thead>
                <tr>
                  <Table_Head name={"Name"} />
                  <Table_Head name={"Created At"} />
                  <Table_Head name={"Products"} />
                  <Table_Head name={"Edit"} />
                </tr>
              </thead>
              <tbody>
                {serverData.map((i: serverDataType) => {
                  if (i.userid == supabase.auth.session()?.user?.id!) {
                    return (
                      <tr>
                        <Table_Data
                          key={serverData.indexOf(i)}
                          name={i.title}
                        />
                        <Table_Data
                          key={serverData.indexOf(i)}
                          name={i.links}
                        />
                        <Table_Data
                          key={serverData.indexOf(i)}
                          name={`${new Date(`${i.last_updated_at}`)
                            .toUTCString()
                            .substring(0, 16)}`}
                        />
                        <Table_Data
                          name={
                            <>
                              <button
                                onClick={() => {
                                  navigate(
                                    `/profiles/${i.unique_id}/edit-report`
                                  );
                                }}
                              >
                                <FaRegEdit />
                              </button>
                            </>
                          }
                        />
                      </tr>
                    );
                  }
                })}
              </tbody>
            </table>
          </section>
        </section>
      </Layout>
    </>
  );
};

export default Reports;

export const getServerData = async () => {
  let { error, data, body } = await supabase
    .from("Contribution")
    .select("userid, unique_id, title, links, last_updated_at");
  if (error) {
    return Error("Error during fetching");
  } else {
    return {
      props: data,
      status: 200,
    };
  }
};
