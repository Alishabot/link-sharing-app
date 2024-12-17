import PropTypes from "prop-types";
import Container from "./index.styled";
import ArrowDownIcon from "../../../assets/arrow-down.svg?react";

const DropdownField = (props) => {
  return (
    <Container>
      <div>
        {props.isIconVisible ? props.iconChildren : null}
        <select
          name={props.name}
          onChange={props.onChange}
          onBlur={props.onBlur}
          onFocus={props.onFocus}
          value={props.value}
          required={props.required}
          defaultValue={"placeholder"}
        >
          <option value="placeholder" disabled={true}>
            Select an option
          </option>
          {props.options &&
          Array.isArray(props.options) &&
          props.options.length > 0
            ? props.options.map((option) => (
                <option key={option.id} value={option.value}>
                  {option.name}
                </option>
              ))
            : null}
        </select>
      </div>
      <span>
        <ArrowDownIcon />
      </span>
    </Container>
  );
};

DropdownField.propTypes = {
  iconChildren: PropTypes.element,
  isIconVisible: PropTypes.bool,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  required: PropTypes.bool,
  name: PropTypes.string,
  value: PropTypes.oneOf([PropTypes.string, PropTypes.number]),
  options: PropTypes.array,
};

export default DropdownField;
