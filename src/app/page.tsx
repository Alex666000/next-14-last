import { ReactElement } from "react";

import { Button } from "@/src/shared/ui/Button";

import styles from "./page.module.css";

export default (): ReactElement => (
  <div className={styles.page}>
    <Button appearance={"primary"} arrow={"right"}>
      Primary
    </Button>
    <Button appearance={"ghost"}>Primary</Button>
  </div>
);
