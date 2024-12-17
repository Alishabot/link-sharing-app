import PropTypes from "prop-types";
import Container from "./index.styled";
import { Navigation, PreviewCard } from "../../components";

const AppLayout = (props) => {
  // TODO: Fetch data for preview card
  const links = [
    { type: "github", urlSuffix: "/alexandrularion" },
    { type: "youtube", urlSuffix: "/alexandrularion" },
    { type: "facebook", urlSuffix: "/alexandrularion" },
    { type: "twitch", urlSuffix: "/alexandrularion" },
  ];

  return (
    <Container>
      <Navigation />
      <div className="container__layout">
        <div className="layout__preview">
          <PreviewCard links={links} />
        </div>
        <div className="layout__content">{props.children}</div>
      </div>
    </Container>
  );
};

AppLayout.propTypes = {
  children: PropTypes.element,
};

export default AppLayout;
