import * as React from 'react';
import PropTypes from 'prop-types';

import Button from '@mui/material/Button';
import { DataGrid } from '@mui/x-data-grid';


export const RenderDate = (props) => {
  const { hasFocus, value } = props;
  const buttonElement = React.useRef(null);
  const rippleRef = React.useRef(null);

  React.useLayoutEffect(() => {
    if (hasFocus) {
      const input = buttonElement.current?.querySelector('input');
      input?.focus();
    }
    else if (rippleRef.current) { rippleRef.current.stop({}); }  // Only available in @mui/material v5.4.1 or later
  }, [hasFocus]);

  return (
    <strong>
      { value?.getFullYear() ?? '' }
      <Button
        component="button"
        ref={buttonElement}
        touchRippleRef={rippleRef}
        variant="contained"
        size="small"
        style={{ marginLeft: 16 }}
        tabIndex={hasFocus ? 0 : -1}  // Remove button from tab sequence when cell does not have focus
        onKeyDown={(event) => {
          if (event.key === ' ') { event.stopPropagation(); }  // Prevent key navigation when focus is on button
        }}
      >
        Open
      </Button>
    </strong>
  );
};

RenderDate.propTypes = {
  hasFocus: PropTypes.bool.isRequired,  // If true, the cell is the active element.
  value: PropTypes.instanceOf(Date),  // The cell value, but if the column has valueGetter, use getValue.
};

const columns = [
  { field: 'date', headerName: 'Year', width: 150, renderCell: RenderDate, },
];

const rows = [
  { id: 1, date: new Date(1979, 0, 1), },
  { id: 2, date: new Date(1984, 1, 1), },
  { id: 3, date: new Date(1992, 2, 1), },
];

export const DataGridRenderReactNode = ({ ...props }) => {
  return (
    <div style={{ height: 300, width: '100%' }}>
      <DataGrid rows={props.rows} columns={props.columns} />
    </div>
  );
}

DataGridRenderReactNode.propTypes = {
  columns: PropTypes.array.isRequired,
  rows: PropTypes.array.isRequired,
};

DataGridRenderReactNode.defaultProps = {
  columns,
  rows,
};