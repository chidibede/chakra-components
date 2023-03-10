import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@chakra-ui/react';

/**
 * Primary UI component for user interaction
 */
export const ButtonComponent = ({ backgroundColor, label, size }) => {
  return <Button colorScheme={backgroundColor} size={size}>{label}</Button>;
};

ButtonComponent.propTypes = {
  backgroundColor: PropTypes.string,
  label: PropTypes.string,
};

Button.defaultProps = {
  backgroundColor: null,
  label: 'Button',
  size: 'md'
};
