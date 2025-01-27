import TopBanner from "./topBanner";

const Terminal = () => {
  return (
    <div
      style={{
        border: "2px solid var(--mantine-color-gray-5)",
        height: "200px",
        borderRadius: "var(--mantine-radius-md)",
        backgroundColor: "var(--mantine-color-gray-9)",
      }}
    >
      <TopBanner></TopBanner>
    </div>
  );
};

export default Terminal;
