import PlainPageLayout from "@/layouts/PlainPageLayout";
import SEO from "@/components/SEO";
const MissionPage = () => {
  const description =
    "As an independent press organization at Seoul National University, The SNU Quill's mission is to enhance SNU's campus experience by providing quality journalism from a fresh, yet critical, student perspective.";
  return (
    <>
      <SEO title='SNU QUILL - Mission' description={description} />
      <PlainPageLayout title='OUR MISSION' description={description} />
    </>
  );
};
export default MissionPage;
