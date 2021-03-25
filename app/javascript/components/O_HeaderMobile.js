import React from "react"
import {
  MHeaderIcons,
  MCategoryFood,
  MFilter
} from "components";
import styles from "./OHeaderMobile.module.scss";

const OHeaderMobile = () => {
  return (
    <div className={styles.oHeaderMobile}>
      <div className={styles.flexWrapperTwo}>
        <img
          alt=""
          src="https://static.overlay-tech.com/assets/6ebbe0df-9cee-43c2-8ab9-82ad162e0f2e.svg"
        />
        <MHeaderIcons />
      </div>
      <MCategoryFood className={styles.mCategoryFood} />
      <MFilter className={styles.mFilter} />
    </div>
  );
};

export default OHeaderMobile;
