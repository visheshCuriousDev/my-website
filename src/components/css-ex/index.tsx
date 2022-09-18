import React from 'react';

const WidthAlgo = React.lazy(() => import('./width-algorithms'));
const ImpPoints = React.lazy(() => import('./imp-points'));
const Workshop = React.lazy(() => import('./workshop'));

function CssEx() {
  return (
      <section className="css-ex">
        <div className="section">
          <ImpPoints></ImpPoints>
        </div>
        <div className="section">
          <WidthAlgo></WidthAlgo>
        </div>
        <div className="section">
          <Workshop></Workshop>
        </div>
      </section>
  );
}

export default CssEx;
