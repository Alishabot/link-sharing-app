import { PreviewCard } from "../../../../common";
import Container from "./index.styled";

const PreviewProfile = () => {
  // TODO: Fetch data for preview card
  const links = [
    { type: "youtube", urlSuffix: "/alexandrularion" },
    { type: "facebook", urlSuffix: "/alexandrularion" },
  ];

  return (
    <Container>
      <PreviewCard links={links} asProfile={true} />
    </Container>
  );
};

PreviewProfile.propTypes = {};

export default PreviewProfile;
