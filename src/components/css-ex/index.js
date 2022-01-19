import React from 'react';

const WidthAlgo = React.lazy(() => import('./width-algorithms'));
const ImpPoints = React.lazy(() => import('./imp-points'));
const Workshop = React.lazy(() => import('./workshop'));

function CssEx() {
  return (
      <section class="css-ex">
        <div class="section">
          <ImpPoints></ImpPoints>
        </div>
        <div class="section">
          <WidthAlgo></WidthAlgo>
        </div>
        <div class="section">
          <Workshop></Workshop>
        </div>
      </section>
  );
}

export default CssEx;
