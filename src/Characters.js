import React from "react";

const Characters = () => {
  const handleClick = React.useCallback(() => {
    window.open(
      "https://www.google.com/search?q=discworld+characters&sca_esv=2b9bae391c3a1c39&rlz=1C1CHBF_en-GBGB1112GB1114&sxsrf=ADLYWILyCTOfpZUgTGnpNWdxw0gA48nWRA%3A1732656404371&ei=FD1GZ-mmFu2_xc8P_-i2-AE&oq=discworld+chRctwr&gs_lp=Egxnd3Mtd2l6LXNlcnAiEWRpc2N3b3JsZCBjaFJjdHdyKgIIADIHECMYsAIYJzIHEAAYgAQYDTIHEAAYgAQYDTIHEAAYgAQYDTIHEAAYgAQYDTIHEAAYgAQYDTIHEAAYgAQYDTIGEAAYDRgeMgYQABgNGB4yBhAAGA0YHkiBMFC2BFibHnAAeAOQAQCYAdwEoAHjFaoBCzEuOC4xLjIuMC4xuAEByAEA-AEBmAIKoAKBD8ICBBAAGEfCAgoQIxiABBgnGIoFwgINEAAYgAQYsQMYFBiHAsICFhAuGIAEGLEDGNEDGIMBGBQYhwIYxwHCAgUQLhiABMICCBAAGIAEGLEDwgILEAAYgAQYkQIYigXCAgsQLhiABBiRAhiKBcICBRAAGIAEwgILEAAYgAQYhgMYigXCAgUQIRigAcICCBAAGAgYDRgewgIIEAAYBRgNGB6YAwCIBgGQBgiSBwsyLjUuMS4xLjAuMaAH05IB&sclient=gws-wiz-serp",
      "_blank"
    );
  }, []); // Empty dependency array ensures function is stable between renders
  return (
    <div>
      <button onClick={handleClick}>Characters</button>
    </div>
  );
};
export default Characters;
