export default {
    name: "images",
    title: "Images",
    type: "document",

    fields: [
        {
            name:'title',
            title:'Title',
            type:'string'
        },
        {
            name:'description',
            title:'Description',
            type:'string'
        },
      {
        name: "image",
        title: "Image",
        type: "image",
        options: {
            hotspot: true
        }
      },
      {
        name: "order",
        title: "Order",
        type: "number",
        hidden: true,
      },

    ],
  };
  