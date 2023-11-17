import { Panel } from "rsuite";

function Overview() {
  return (
    <div id="overview">
      <p>
        This manifesto gives us an overview and the details of building a
        progressive, inclusive and well thought-out city
      </p>
      <p>The top four ideas are:</p>
      <Panel header="Universal Basic Income" collapsible bordered>
        <p className="m-0">Body text</p>
      </Panel>
      <Panel header="Sense of Community" collapsible bordered>
        <p className="m-0">Body text</p>
      </Panel>
      <Panel header="Inclusive to All walks of life" collapsible bordered>
        <p className="m-0">Body text</p>
      </Panel>
      <Panel header="Walkable to all locations" collapsible bordered>
        <p className="m-0">Body text</p>
      </Panel>
    </div>
  );
}

export default Overview;
