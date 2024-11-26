import React from "react";

const LastBook = () => {
  const handleClick = React.useCallback(() => {
    window.open(
      "https://www.terrypratchettbooks.com/books/the-shepherds-crown/#:~:text=An%20old%20enemy%20is%20gathering,witches%20to%20stand%20with%20her.",
      "_blank"
  );
  }, []); // Empty dependency array ensures function is stable between renders
  return (
    <div>
      <button onClick={handleClick}>The last book</button>
    </div>
  );
};
export default LastBook;
