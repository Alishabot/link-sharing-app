import PropTypes from "prop-types";
import CONSTANTS from "../../index.constants";
import PreviewLink from "../preview-link";
import Container from "./index.styled";

const PreviewCard = (props) => {
  return (
    <Container>
      <div className="container__img">
        <img
          alt="Preview Smartphone"
          src={
            props.asProfile
              ? "/assets/preview-smartphone-profile.png"
              : "/assets/preview-smartphone.png"
          }
        />
      </div>
      <div className="container__links">
        {props.links.map(({ type, urlSuffix }) => {
          const {
            id,
            icon: Icon,
            name,
            color,
            urlPrefix,
          } = CONSTANTS.PLATFORMS[type];
          return (
            <PreviewLink
              key={id}
              iconChildren={<Icon />}
              bkgColor={color}
              url={`${urlPrefix}${urlSuffix}`}
            >
              {name}
            </PreviewLink>
          );
        })}
      </div>
    </Container>
  );
};

PreviewCard.propTypes = {
  links: PropTypes.arrayOf(PropTypes.object),
  asProfile: PropTypes.bool,
};

export default PreviewCard;
