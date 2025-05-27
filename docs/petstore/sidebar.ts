import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "petstore/petstore-api",
    },
    {
      type: "category",
      label: "UNTAGGED",
      items: [
        {
          type: "doc",
          id: "petstore/list-all-pets",
          label: "List all pets",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "petstore/create-a-pet",
          label: "Create a pet",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
