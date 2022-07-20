export default {
  name: "services",
  title: "Services",
  type: "document",
  fields: [
    {
      name: "service",
      title: "Service",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "string",
    },
    {
      title: "Icon",
      name: "icon",
      type: "iconPicker",
      options: {
        outputFormat: "react",
        providers: ["fa", "mdi"],
      },
    },
    {
      name: "order",
      title: "Order",
      type: "number",
      hidden: true,
    },
  ],
};
