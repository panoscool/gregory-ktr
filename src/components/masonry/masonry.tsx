import React, { useState, useEffect, useCallback } from "react";

interface BreakpointCols {
  default?: number;
  [key: number]: number;
}

interface ColumnAttrs {
  style?: React.CSSProperties;
  [key: string]: any;
}

interface Props {
  breakpointCols?: number | BreakpointCols;
  className?: string;
  columnClassName?: string;
  children?: React.ReactNode;
  columnAttrs?: ColumnAttrs;
  [key: string]: any; // To support rest of the props
}

const DEFAULT_COLUMNS = 2;

const Masonry: React.FC<Props> = (props) => {
  const {
    breakpointCols,
    className = "my-masonry-grid",
    columnClassName,
    columnAttrs = {},
    children,
    ...rest
  } = props;

  const calculateInitialColumnCount = (): number => {
    if (typeof breakpointCols === "object" && breakpointCols.default) {
      return breakpointCols.default;
    } else {
      return parseInt(String(breakpointCols)) || DEFAULT_COLUMNS;
    }
  };

  const [columnCount, setColumnCount] = useState<number>(calculateInitialColumnCount());

  const reCalculateColumnCount = useCallback(() => {
    const windowWidth = window?.innerWidth || Infinity;
    let breakpointColsObject: BreakpointCols =
      typeof breakpointCols !== "object"
        ? {
            default: parseInt(String(breakpointCols)) || DEFAULT_COLUMNS,
          }
        : breakpointCols;

    let matchedBreakpoint = Infinity;
    let columns = breakpointColsObject.default || DEFAULT_COLUMNS;

    for (let breakpoint in breakpointColsObject) {
      const optBreakpoint = parseInt(breakpoint);
      const isCurrentBreakpoint = optBreakpoint > 0 && windowWidth <= optBreakpoint;

      if (isCurrentBreakpoint && optBreakpoint < matchedBreakpoint) {
        matchedBreakpoint = optBreakpoint;
        columns = breakpointColsObject[breakpoint];
      }
    }

    columns = Math.max(1, parseInt(String(columns)) || 1);

    if (columnCount !== columns) {
      setColumnCount(columns);
    }
  }, [breakpointCols, columnCount]);

  useEffect(() => {
    reCalculateColumnCount();
    window.addEventListener("resize", reCalculateColumnCount);

    return () => {
      window.removeEventListener("resize", reCalculateColumnCount);
    };
  }, [reCalculateColumnCount]);

  const itemsInColumns = useCallback(() => {
    const items: React.ReactNode[] = React.Children.toArray(children);
    const columns: React.ReactNode[][] = Array.from({ length: columnCount }, () => []);

    items.forEach((item, i) => {
      columns[i % columnCount].push(item);
    });

    return columns;
  }, [children, columnCount]);

  const renderColumns = () => {
    const childrenInColumns = itemsInColumns();
    const columnWidth = `${100 / childrenInColumns.length}%`;

    return childrenInColumns.map((items, i) => (
      <div
        {...columnAttrs}
        style={{ ...columnAttrs.style, width: columnWidth }}
        className={columnClassName}
        key={i}
      >
        {items}
      </div>
    ));
  };

  return (
    <div {...rest} className={className}>
      {renderColumns()}
    </div>
  );
};

export default Masonry;

// Inspired by https://github.com/paulcollett/react-masonry-css
