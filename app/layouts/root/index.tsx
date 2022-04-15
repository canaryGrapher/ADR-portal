import React from "react";

// importing redux-toolkit
import { store } from "~/states/store";
import { Provider } from "react-redux";

// importing the components
import Navbar from "~/components/common/navbar";

// importing types
import { LayoutProps } from "~/types/general";

const RootLayout = ({ children }: LayoutProps) => {
  return (
    <React.Fragment>
      <div className="overflow-x-hidden bg-white dark:bg-gray-800 min-h-screen dark:text-gray-200">
        <Provider store={store}>
          <Navbar />
          {children}
        </Provider>
      </div>
    </React.Fragment>
  );
};

export default RootLayout;
