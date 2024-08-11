import React from "react";
import { Box } from "@strapi/design-system/Box";
import { HeaderLayout } from "@strapi/design-system/Layout";
import { ContentLayout } from "@strapi/design-system/Layout";

const HomePage = () => {
  return (
    <Box>
      <HeaderLayout
        title="Custom Welcome Page"
        subtitle="This is a customized welcome page"
      />
      <ContentLayout>
        <Box padding={4}>
          <p>Welcome to your custom Strapi admin panel!</p>
          {/* Add any additional content or components here */}
        </Box>
      </ContentLayout>
    </Box>
  );
};

export default HomePage;
