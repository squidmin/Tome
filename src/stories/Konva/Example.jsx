import React from 'react';
import { Stage, Layer, Rect, Text } from 'react-konva';
// import Konva from 'konva';  // TODO: Uncomment after refactoring

// import PropTypes from 'prop-types';  // Uncomment if using props

const { useEffect, useState, } = React;

let input = [
  [ '.', '.', '.', '.', '.', '.', '.', ],
  [ '.', '.', '.', 'O', '.', '.', '.', ],
  [ '.', '.', '.', '.', 'O', '.', '.', ],
  [ '.', '.', '.', '.', '.', '.', '.', ],
  [ 'O', 'O', '.', '.', '.', '.', '.', ],
  [ 'O', 'O', '.', '.', '.', '.', '.', ],
];

const gridXOffset = 20, gridYOffset = 40;
const cellColumnPosIncrement = 50, cellRowPosIncrement = 50;
const cellWidth = 45, cellHeight = 45;

/*
 * https://www.hackerrank.com/challenges/one-month-preparation-kit-bomber-man/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=one-month-preparation-kit&playlist_slugs%5B%5D=one-month-week-three
 */

// TODO: 3) Implement timer and color update logic

export const Example = ({ ...props }) => {

  // TODO: 1) Implement data structure to track color of individual cells
  // const [color, setColor] = useState();

  // TODO: 2) Refactor color event handler for 2d grid
  // const handleClick = () => {
  //   setColor(Konva.Util.getRandomColor());
  // };

  // useEffect(
  //   () => {
  //     handleClick();
  //   },
  //   [setColor]
  // );

  return (
    <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer>
        <Text text="Bombersweeper" />
      </Layer>
      <Layer>
        {
          input.map((row, rowIndex) => {
            return row.map((col, colIndex) => {
              return <Rect
                  x={cellColumnPosIncrement * colIndex + gridXOffset}
                  y={cellRowPosIncrement * rowIndex + gridYOffset}
                  width={cellWidth}
                  height={cellHeight}
                  fill={col === '.' ? 'black' : 'green'}
                  shadowBlur={5}
                  onClick={() => {}}
                />
            })
          })
        }
      </Layer>
    </Stage>
  )

}

Example.propTypes = {};

Example.defaultProps = {};