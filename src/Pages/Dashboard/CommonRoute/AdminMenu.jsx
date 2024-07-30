import React from "react";
import CommonMenu from "./CommonMenu";
import { FaSquarePollVertical, FaUserGroup } from "react-icons/fa6";
import { MdCategory, MdPayments } from "react-icons/md";
import { RiAdvertisementFill } from "react-icons/ri";

const AdminMenu = () => {
  return (
    <div>
      <CommonMenu link="/dashboard" title={"Manage User"} icon={FaUserGroup} />
      <CommonMenu
        link="manage-category"
        title={"Manage Category"}
        icon={MdCategory}
      />
      <CommonMenu
        link="payment-management"
        title={"Payment management"}
        icon={MdPayments}
      />
      <CommonMenu
        link="salse-report"
        title={"Salse Report"}
        icon={FaSquarePollVertical}
      />
      <CommonMenu
        link="manage-advertisement"
        title={"Manage Advertisement"}
        icon={RiAdvertisementFill}
      />
    </div>
  );
};

export default AdminMenu;
