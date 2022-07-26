export default {
    name: "prices",
    title: "Prices",
    type: "document",
    fields: [
      {
        name: "item",
        title: "Item",
        type: "string",
      },
      {
        name: "description",
        title: "Description",
        type: "string",
      },
      {
        name: "price",
        title: "Price",
        type: "string",
      },

      {
        name: "order",
        title: "Order",
        type: "number",
        hidden: true,
      },
    ],
  };
  