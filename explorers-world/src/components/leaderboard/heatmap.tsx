import * as React from "react";
import { Heatmap } from "contribution-heatmap";

type ChartProps = {
  squares: number;
  size: string;
  gap: string;
  count: Array<number>;
};

let ChartContainer = ({
  squares,
  size,
  gap,
  count,
}: ChartProps): JSX.Element => {
  return (
    <>
      <section className="w-min">
        <Heatmap
          tooltipContent=""
          colour={["#216e39"]}
          squareNumber={squares}
          count={count}
          squareSize={size}
          squareGap={gap}
        />
      </section>
    </>
  );
};

export default ChartContainer;
