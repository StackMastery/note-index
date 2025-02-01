import Banner from "../components/pages/New/Banner";
import ProjectConfig from "../components/pages/New/projectConfig";

export const metadata = {
  title: "New",
  description: "Share new code document",
};

export default function page() {
  return (
    <>
      <Banner />
      <ProjectConfig />
    </>
  );
}
