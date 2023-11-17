import TabsAndBody from "../../shared/tabs";
import Housing from "./housing";

function V1() {
  const V1_TAB_ENUM = {
    NONE: {
      key: "None",
      component: () => {},
      name: "-",
    },
    HOUSING: {
      key: "Housing",
      component: Housing,
    },
  };

  return (
    <TabsAndBody
      enums={V1_TAB_ENUM}
      defaultEnum={V1_TAB_ENUM.NONE.key}
      title="Version 1"
    />
  );
}

export default V1;
