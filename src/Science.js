import React from "react";

const Science = () => {
  const handleClick = React.useCallback(() => {
    window.open(
      "https://www.terrypratchettbooks.com/books/the-science-of-discworld/",
      "_blank"
  );
  }, []); // Empty dependency array ensures function is stable between renders
  return (
    <div>
      <button onClick={handleClick}>The Science of Discworld</button>
    </div>
  );
};
export default Science;
