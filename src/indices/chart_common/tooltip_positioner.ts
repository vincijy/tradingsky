
export function positioner(this:any, labelWidth:number, labelHeight:number, point:{plotX:number, plotY:number}) {
  const plotWidth = (this as any).chart.plotWidth;
  const plotLeft = (this as any).chart.plotLeft;
  const rightEdge = plotWidth + plotLeft;
  const x = point.plotX + labelWidth / 2;
  const GAP = 60;
  return {
    x: (x + labelWidth) < rightEdge ? x : (x - labelWidth - GAP),
    y: point.plotY + labelHeight / 2,
  };
};