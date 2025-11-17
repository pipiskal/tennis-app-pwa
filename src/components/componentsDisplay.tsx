import { useTranslation } from "react-i18next";
import Button from "./ui-kit/Button/Button";
import Input from "./ui-kit/Input/Input";
import SegmentedTabs from "./navigation/SegmentedTabs/SegmentedTabs";
import SelectDropdown from "./ui-kit/SelectDropdown/SelectDropdown";
import dayjs from "dayjs";

const EventTime = ({
  start,
  end,
  short,
}: {
  start: string;
  end: string;
  short?: boolean;
}) => {
  const startDate = dayjs(start);
  const endDate = dayjs(end);

  const dayFormat = short ? "ddd" : "dddd";

  const label = `${startDate.format(dayFormat)}, ${startDate.format(
    "D MMMM"
  )} ${startDate.format("H:mm")} - ${endDate.format("H:mm")}`;
  return <span>{label}</span>;
};

const ComponentsDisplay = () => {
  const { t, i18n } = useTranslation();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div>
        <div>
          <h1>{t("components")}</h1>
        </div>

        <EventTime
          start={"2021-01-01T10:00:00"}
          end={"2021-01-01T11:00:00"}
          short={true}
        />

        <Button
          label={"Change language"}
          onClick={() => {
            i18n.changeLanguage(i18n.language === "en" ? "el" : "en");
          }}
        />

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
