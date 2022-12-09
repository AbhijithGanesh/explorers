import * as React from "react";
import { BsGearWideConnected } from "react-icons/bs";
import { MdAddTask, MdSearch } from "react-icons/md";
import Layout from "../../components/layout";
import { DropDownMenu, MenuItem } from "../../components/navbar/dropdown";
import Navbar from "../../components/navbar/Navbar";

let EmptyIndex = (): JSX.Element => {
  return (
    <>
      <Layout>
        <Navbar>
          <>
            <section className="z-10">
              <DropDownMenu>
                <>
                  <MenuItem
                    icon={<MdAddTask />}
                    link="/challenges"
                    text="Challenges"
                  />
                  <MenuItem
                    icon={<BsGearWideConnected />}
                    link={"/login"}
                    text={"Login/Profile"}
                  />
                  <MenuItem
                    icon={<MdSearch className="text-xl" />}
                    link="/search"
                    text="Search for explorers"
                  />
                </>
              </DropDownMenu>
            </section>
          </>
        </Navbar>
        <section className="py-8 text-3xl font-bold text-white">
          Current standings!
        </section>
      </Layout>
    </>
  );
};

export default EmptyIndex;
