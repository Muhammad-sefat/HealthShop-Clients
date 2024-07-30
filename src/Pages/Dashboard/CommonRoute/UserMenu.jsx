import React from "react";
import CommonMenu from "./CommonMenu";
import { MdPayments } from "react-icons/md";
import { FaAddressBook } from "react-icons/fa6";

const UserMenu = () => {
  return (
    <div>
      <CommonMenu
        link="paymenthistory"
        title={"Payment history"}
        icon={MdPayments}
      />
      <CommonMenu
        link="add-review"
        title={"Add Your Review"}
        icon={FaAddressBook}
      />
    </div>
  );
};

export default UserMenu;
