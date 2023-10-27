import React, { useState } from "react";

import styles from "./Search.module.scss";
import classNames from "classnames/bind";
import { MdSearch } from "react-icons/md";
import Button from "../Button/button";
const cx = classNames.bind(styles);
function Seach() {
  //delete value filter
  const handleSubmit = () => {
    console.log(1);
  };
  const deleteValue = () => {
    alert("remove data succes");
  };
  return (
    <>
      <form className={cx("search__form")}>
        <div className={cx("search__value")}>
          <div className={cx("search-icon")}>
            <MdSearch></MdSearch>
          </div>
          <input className={cx("search-input")} placeholder="Search in store" />
        </div>
      </form>

      <div className={cx("range__title")}>Enter price range: </div>
      <div className={cx("search__range")}>
        <p className={cx("text")}>From:</p>
        <input
          className={cx("range")}
          type={"number"}
          value=""
          placeholder="0$"
          inputMode="number"
        />
        <p className={cx("text")}>To:</p>
        <input
          className={cx("range")}
          type={"number"}
          value=""
          placeholder="1000$"
        />
      </div>
      <div className={cx("search__options")}>
        <h4>Select Category: </h4>
        <select className={cx("select")}>
          <option className={cx("items")}>Macbook Pro</option>
          <option className={cx("items")}>Macbook Air</option>
          <option className={cx("items")}>Imac</option>
        </select>
      </div>
      <div className={cx("btn")}>
        <Button backgrWhite onClick={deleteValue}>
          Delete Filter
        </Button>
      </div>
    </>
  );
}

export default Seach;
