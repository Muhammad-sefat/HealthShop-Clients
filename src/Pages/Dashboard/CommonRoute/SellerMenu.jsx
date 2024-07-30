import React from "react";
import CommonMenu from "./CommonMenu";
import { IoNewspaperOutline } from "react-icons/io5";

const SellerMenu = () => {
  return (
    <div>
      <CommonMenu
        link="manage-medicine"
        title={"Manage Medicines"}
        icon={IoNewspaperOutline}
      />
      <CommonMenu
        link="advertisement"
        title={"Advertisement"}
        icon={IoNewspaperOutline}
      />
    </div>
  );
};

export default SellerMenu;
