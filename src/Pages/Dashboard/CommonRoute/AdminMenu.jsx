import React from "react";
import CommonMenu from "./CommonMenu";
import { IoNewspaperOutline } from "react-icons/io5";

const AdminMenu = () => {
  return (
    <div>
      <CommonMenu
        link="/dashboard"
        title={"Manage User"}
        icon={IoNewspaperOutline}
      />
      <CommonMenu
        link="manage-category"
        title={"Manage Category"}
        icon={IoNewspaperOutline}
      />
    </div>
  );
};

export default AdminMenu;
