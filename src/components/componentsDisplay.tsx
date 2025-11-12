import Button from "./ui-kit/Button/Button";
import Input from "./ui-kit/Input/Input";
import SegmentedTabs from "./navigation/SegmentedTabs/SegmentedTabs";
import SelectDropdown from "./ui-kit/SelectDropdown/SelectDropdown";

const ComponentsDisplay = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div>
        <div>
          <h1>Components</h1>
        </div>

        <Button label={"takis"} />

        <br />

        <Input />

        <br />

        <SelectDropdown />

        <br />

        <SegmentedTabs />
      </div>

      <div>
        <h2>Theme color palette</h2>

        <p>
          <span style={{ color: "var(--colors-primary-100)" }}>
            THIS IS A LARGE TEXT
          </span>

          <span style={{ color: "var(--colors-secondary-100)" }}>
            THIS IS A LARGE TEXT
          </span>

          <span style={{ color: "var(--colors-text-100)" }}>
            THIS IS A LARGE TEXT
          </span>

          <span style={{ color: "var(--colors-text-100)" }}>
            THIS IS A LARGE TEXT
          </span>

          <div
            style={{
              backgroundColor: "var(--colors-background-main)",
              width: "100px",
              height: "100px",
            }}
          >
            THIS IS A LARGE TEXT 2
          </div>

          <div
            style={{
              backgroundColor: "var(--colors-primary-80)",
              width: "100px",
              height: "100px",
            }}
          >
            THIS IS A LARGE TEXT 2
          </div>
        </p>
      </div>
    </div>
  );
};

export default ComponentsDisplay;
