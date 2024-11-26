import React from "react";

const VideoGame = () => {
  const handleClick = React.useCallback(() => {
    window.open(
      "https://www.google.com/search?gs_ssp=eJzj4tTP1TcwNjZINjZg9BJJySxOLs8vyklRKMtMSc1XSE_MTQUAoSMKhg&q=discworld+video+game&rlz=1C1CHBF_en-GBGB1112GB1114&oq=discworld+VIDEOG&gs_lcrp=EgZjaHJvbWUqDQgBEC4YkQIYgAQYigUyBggAEEUYOTINCAEQLhiRAhiABBiKBTIGCAIQRRhAMgkIAxAAGAoYgAQyCQgEEAAYChiABDIICAUQABgWGB4yDQgGEAAYhgMYgAQYigUyCggHEAAYgAQYogTSAQg5NzM5ajBqN6gCB7ACAQ&sourceid=chrome&ie=UTF-8#wptab=si:ACC90nzhFW-fOieS-I060ZQl1KsOC-9oYae8ftW5huKZCtgfThmKLV0tlfsq7VdOBTnsdx_qgcdGaNSbLkg0uxBdrO18SQs2orXQ6JDA6u-Cd8FQe8kCBiH-C1AbEwrc4XDNdVso2Ki0",
      "_blank"
  );
  }, []); // Empty dependency array ensures function is stable between renders
  return (
    <div>
      <button onClick={handleClick}>Video Game</button>
    </div>
  );
};
export default VideoGame;
