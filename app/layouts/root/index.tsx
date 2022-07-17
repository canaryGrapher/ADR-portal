import React from "react";

// importing redux-toolkit
import { store } from "~/states/store";
import { Provider } from "react-redux";

// importing the components
import Navbar from "~/components/common/navbar";
import { ConfigProvider } from "antd";

// importing types
import { LayoutProps } from "~/types/general";
import moment from "moment";
import { useLocation } from "react-router-dom";

const RootLayout = ({ children }: LayoutProps) => {
  const location = useLocation();
  moment.locale("en");
  return (
    <React.Fragment>
      <div className="overflow-x-hidden bg-white dark:bg-gray-800 min-h-screen dark:text-gray-200">
        <Provider store={store}>
          <Navbar location={location} />
          <ConfigProvider csp={{ nonce: "adrPortalManipal" }}>
            {children}
          </ConfigProvider>
        </Provider>
      </div>
    </React.Fragment>
  );
};

export default RootLayout;
