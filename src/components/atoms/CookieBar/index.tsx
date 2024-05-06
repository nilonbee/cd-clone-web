import React from "react";

export const CookieBar = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray shadow">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <p className="text-sm text-gray">
          We use cookies to ensure you get the best experience on our website.
          Learn more{" "}
          <a
            href="https://larainfo.com/blogs/create-cookie-consent-design-ui-using-tailwind-css"
            className="text-blue"
          >
            here
          </a>
          .
        </p>
        <div className="flex space-x-4">
          <button className="px-4 py-1.5 bg-blue-500 text-white rounded hover:bg-blue transition duration-300 ease-in-out">
            Accept
          </button>
          <button className="px-4 py-1.5 bg-gray-300 text-gray-700 rounded hover:bg-gray transition duration-300 ease-in-out">
            Decline
          </button>
        </div>
      </div>
    </div>
  );
};
