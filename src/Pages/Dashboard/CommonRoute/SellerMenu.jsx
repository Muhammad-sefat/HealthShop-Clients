import React from "react";
import CommonMenu from "./CommonMenu";
import { MdManageAccounts, MdPayments } from "react-icons/md";
import { RiAdvertisementFill } from "react-icons/ri";

const SellerMenu = () => {
  return (
    <div>
      <CommonMenu
        link="manage-medicine"
        title={"Manage Medicines"}
        icon={MdManageAccounts}
      />
      <CommonMenu
        link="payment-history"
        title={"Payment History"}
        icon={MdPayments}
      />
      <CommonMenu
        link="advertisement"
        title={"Advertisement"}
        icon={RiAdvertisementFill}
      />
    </div>
  );
};

export default SellerMenu;
