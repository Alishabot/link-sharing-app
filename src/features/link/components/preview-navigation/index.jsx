import Container from "./index.styled";
import { Button } from "../../../../common";
import { Link } from "react-router";

const PreviewNavigation = () => {
  return (
    <Container>
      <nav className="container__nav">
        <Link to="/">
          <Button variant="outline">Back to Editor</Button>
        </Link>
        <Button variant="fill">Share Link</Button>
      </nav>
    </Container>
  );
};

PreviewNavigation.propTypes = {};

export default PreviewNavigation;
