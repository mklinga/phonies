import PropTypes from "prop-types";

export const PhoneType = PropTypes.shape({
  manufacturer: PropTypes.string,
  model: PropTypes.string,
  year: PropTypes.number,
  color: PropTypes.string,
  screen_size: PropTypes.number,
  image: PropTypes.string
});
