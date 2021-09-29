/** External Dependencies */
import { Annotation } from '@scaleflex/icons';

/** Internal Dependencies */
import { ANNOTATIONS_NAMES } from 'utils/constants';

export const AVAILABLE_SHAPES_OBJECTS = [
  {
    icon: Annotation,
    label: 'Rect',
    name: ANNOTATIONS_NAMES.RECT,
    libClassName: 'Rect', // class name in library (konva)
  },
  {
    icon: Annotation,
    label: 'Circle',
    name: ANNOTATIONS_NAMES.CIRCLE,
    libClassName: 'Circle',
  },
  {
    icon: Annotation,
    label: 'Ellipse',
    name: ANNOTATIONS_NAMES.ELLIPSE,
    libClassName: 'Ellipse',
  },
  {
    icon: Annotation,
    label: 'Polygon',
    name: ANNOTATIONS_NAMES.POLYGON,
    libClassName: 'RegularPolygon',
  },
];
