import { useState } from "react";
import { Nav } from "rsuite";

function getComponent(enums, active) {
  return enums[active.toUpperCase()].component;
}

function TabsAndBody({ enums, defaultEnum, title }) {
  const [active, setActive] = useState(defaultEnum);
  const BodyComponent = getComponent(enums, active);

  return (
    <div>
      {title}
      <Nav
        appearance="tabs"
        activeKey={active}
        onSelect={setActive}
        style={{ marginBottom: 50 }}
      >
        {Object.keys(enums).map((en) => {
          const enumVal = enums[en];
          return (
            <Nav.Item eventKey={enumVal.key} key={en}>
              {enumVal.name ?? enumVal.key}
            </Nav.Item>
          );
        })}
      </Nav>

      <BodyComponent />
    </div>
  );
}

export default TabsAndBody;
