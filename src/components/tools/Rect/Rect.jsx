/** External Dependencies */
import React from 'react';
import PropTypes from 'prop-types';

/** Internal Dependencies */
import { Rect as RectIcon } from 'components/common/icons';
import ToolsBarItemButton from 'components/ToolsBar/ToolsBarItemButton';
import { TOOLS_IDS } from 'utils/constants';

const Rect = ({ selectTool, isSelected }) => (
  <ToolsBarItemButton
    id={TOOLS_IDS.RECT}
    label="Rectangle"
    Icon={RectIcon}
    onClick={selectTool}
    isSelected={isSelected}
  />
);

Rect.defaultProps = {
  isSelected: false,
};

Rect.propTypes = {
  selectTool: PropTypes.func.isRequired,
  isSelected: PropTypes.bool,
};

export default Rect;
