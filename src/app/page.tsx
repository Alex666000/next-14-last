import { ReactElement } from "react";

import { Button } from "@/src/shared/ui/Button";

export default (): ReactElement => (
  <>
    <Button appearance={"primary"} arrow={"right"}>
      Primary
    </Button>
    <Button appearance={"ghost"}>Primary</Button>
  </>
);
