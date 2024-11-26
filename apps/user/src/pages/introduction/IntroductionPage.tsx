import PlainPageLayout from "@/layouts/PlainPageLayout";

const IntroductionPage = () => {
  const introduction =
    "Founded in 2005, The SNU Quill is the first and only English press in Seoul National University. As an independent undergraduate association, The SNU Quill has been providing thought-provoking, insightful content that spans over multiple issues for the ever growing international students and staff of Seoul National University. The SNU Quill publishes once every semester and distributes around 1000 copies all over Gwanak Campus as well as on-line. We are committed to informing and challenging the students and staffs with works that are both creative and resourceful.";
  return <PlainPageLayout title='WHO WE ARE' description={introduction} />;
};
export default IntroductionPage;
