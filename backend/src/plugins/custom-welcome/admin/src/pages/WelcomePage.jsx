import React from "react";
import { useIntl } from "react-intl";
import { Box } from "@strapi/design-system/Box";
import { HeaderLayout } from "@strapi/design-system/Layout";

const WelcomePage = () => {
  const { formatMessage } = useIntl();

  return (
    <Box>
      <HeaderLayout
        title={formatMessage({
          id: "custom-welcome.page.title",
          defaultMessage: "Custom Welcome",
        })}
        subtitle={formatMessage({
          id: "custom-welcome.page.subtitle",
          defaultMessage: "Your custom welcome page",
        })}
      />
      {/* Add your custom UI here */}
      <Box padding={4}>
        <p>Your custom content goes here...</p>
      </Box>
    </Box>
  );
};

export default WelcomePage;
