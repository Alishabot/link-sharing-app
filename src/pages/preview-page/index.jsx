import { PreviewProfile, PreviewNavigation } from "../../features/link";
import Container from "./index.styled";

const PreviewPage = () => {
  return (
    <Container>
      <PreviewNavigation />
      <PreviewProfile />
    </Container>
  );
};

export default PreviewPage;
