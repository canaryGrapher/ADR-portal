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
    <div className="overflow-x-hidden">
      <Provider store={store}>
        <Navbar />
        {children}
      </Provider>
    </div>
  );
};

export default RootLayout;
