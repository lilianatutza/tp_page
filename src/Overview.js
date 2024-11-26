import React from "react";

const Overview = () => {
  const handleClick = React.useCallback(() => {
    window.open(
      "https://www.google.com/search?gs_ssp=eJzj4tDP1Tcwyki2NGD04kzJLE4uzy_KSQEAQI4Gkw&q=discworld&rlz=1C1CHBF_en-GBGB1112GB1114&oq=discw&gs_lcrp=EgZjaHJvbWUqDwgBEC4YQxixAxiABBiKBTIGCAAQRRg7Mg8IARAuGEMYsQMYgAQYigUyGAgCEC4YFBiDARjHARiHAhixAxjRAxiABDIMCAMQIxgnGIAEGIoFMgYIBBBFGDkyBwgFEAAYgAQyBggGEEUYPDIGCAcQRRhB0gEIODM3N2owajeoAgCwAgA&sourceid=chrome&ie=UTF-8",
      "_blank"
  );
  }, []); // Empty dependency array ensures function is stable between renders
  return (
    <div>
      <button onClick={handleClick}>Overview</button>
    </div>
  );
};

export default Overview;
