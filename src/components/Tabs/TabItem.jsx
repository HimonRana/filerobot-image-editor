/** External Dependencies */
import React, { useCallback, memo } from 'react';
import PropTypes from 'prop-types';

/** Internal Dependencies */
import { StyledTabItem, StyledTabItemLabel } from './Tabs.styles';

const TabItem = ({ id, label, Icon, isSelected, onClick }) => {
  const handleClick = useCallback(() => {
    if (typeof onClick === 'function') {
      onClick(id);
    }
  }, []);

  return (
    <StyledTabItem aria-selected={isSelected} onClick={handleClick}>
      <Icon />
      <StyledTabItemLabel>{label}</StyledTabItemLabel>
    </StyledTabItem>
  );
};

TabItem.defaultProps = {
  isSelected: false,
  onClick: undefined,
};

TabItem.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  Icon: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.func,
    PropTypes.instanceOf(Object),
  ]).isRequired,
  onClick: PropTypes.func,
  isSelected: PropTypes.bool,
};

export default memo(TabItem);
