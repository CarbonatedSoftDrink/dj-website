export default{
    name:'packages',
    title:'Packages',
    type: 'document',
    fields:[
        {
            name:'package',
            title:'Package',
            type:'string'
        },
        {
            name:'features',
            title:'Features',
            type:'array',
            of: [
                {type: 'string', title: 'item'}
            ]
            
        },
        {
            name: "order",
            title: "Order",
            type: "number",
            hidden: true,
          },
    ]
}