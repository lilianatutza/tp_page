import React from "react";

const Videos = () => {
  const handleClick = React.useCallback(() => {
    window.open(
      "https://www.google.com/search?q=discworld+movies&sca_esv=2b9bae391c3a1c39&rlz=1C1CHBF_en-GBGB1112GB1114&sxsrf=ADLYWIIX54pqBgxd4A2CdBBKVUJT16ySzA%3A1732656148345&ei=FDxGZ4XnFOGihbIP8JuGwQk&oq=discwwarld+videos&gs_lp=Egxnd3Mtd2l6LXNlcnAiEWRpc2N3d2FybGQgdmlkZW9zKgIIADIKEAAYsAMY1gQYRzIKEAAYsAMY1gQYRzIKEAAYsAMY1gQYRzINEC4YgAQYsAMYQxiKBUjfHlAAWABwAXgBkAEAmAEAoAEAqgEAuAEByAEAmAIBoAIdmAMA4gMFEgExIECIBgGQBgSSBwExoAcA&sclient=gws-wiz-serp",
      "_blank"
    );
  }, []); // Empty dependency array ensures function is stable between renders
  return (
    <div>
      <button onClick={handleClick}>Movies</button>
    </div>
  );
};
export default Videos;
