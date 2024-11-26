import React from "react";

const Books = () => {
  const handleClick = React.useCallback(() => {
    window.open(
      "https://www.google.com/search?q=discworld+books+in+order&sca_esv=a602e8e6c3755c23&rlz=1C1CHBF_en-GBGB1112GB1114&sxsrf=ADLYWIK9kOZGZgIG5cUhXfKdYvOYjH7GDw%3A1732655643175&ei=GzpGZ5e5CvvBhbIP97rPsAY&oq=discworld+books&gs_lp=Egxnd3Mtd2l6LXNlcnAiD2Rpc2N3b3JsZCBib29rcyoCCAEyExAAGIAEGJECGLEDGIoFGEYY-wEyBRAAGIAEMgUQABiABDILEAAYgAQYkQIYigUyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgARI_CFQ8gZYqA9wAXgBkAEAmAF_oAHaBKoBAzMuM7gBAcgBAPgBAZgCCKAC1RTCAgcQIxiwAxgnwgIKEAAYsAMY1gQYR8ICDRAAGIAEGLADGEMYigXCAg4QABiwAxjkAhjWBNgBAcICExAuGIAEGLADGEMYyAMYigXYAQHCAhYQLhiABBiwAxhDGNQCGMgDGIoF2AEBwgIKECMYgAQYJxiKBcICBBAjGCfCAhYQLhiABBixAxjRAxiDARgUGIcCGMcBwgINEAAYgAQYsQMYFBiHAsICChAAGIAEGEMYigXCAgoQLhiABBhDGIoFwgIIEAAYgAQYsQPCAgUQLhiABMICChAAGIAEGEYY-wHCAhYQABiABBhGGPsBGJcFGIwFGN0E2AEBwgIfEAAYgAQYkQIYsQMYigUYRhj7ARiXBRiMBRjdBNgBAZgDAIgGAZAGE7oGBggBEAEYCZIHBzIuNS43LTGgB59H&sclient=gws-wiz-serp",
      "_blank"
  );
  }, []); // Empty dependency array ensures function is stable between renders
  return (
    <div>
      <button onClick={handleClick}>Books</button>
    </div>
  );
};
export default Books;
