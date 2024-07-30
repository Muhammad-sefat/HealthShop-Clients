import React from "react";
import { IoNewspaperOutline } from "react-icons/io5";
import CommonMenu from "./CommonMenu";

const UserMenu = () => {
  return (
    <div>
      <CommonMenu
        link="payment-history"
        title={"Payment history"}
        icon={IoNewspaperOutline}
      />
    </div>
  );
};

export default UserMenu;
