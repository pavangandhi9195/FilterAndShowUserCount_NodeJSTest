module.exports = {
  async up(db, client) {
    /**
     * Create products
     */
    const products = [
        {
          user : "5fbbac821b06a5d5e988c5bc",
          product : "5fbba39a1b25b8cc310f44ef",
          viewDate: new Date("2020-11-23"),
          isDeleted : false,
          createdAt : new Date(),
          updatedAt : new Date(),
          __v : 0
        },
        {
          user : "5fbbac821b06a5d5e988c5bc",
          product : "5fbba4194558762d0ce15365",
          viewDate: new Date("2020-11-19"),
          isDeleted : false,
          createdAt : new Date(),
          updatedAt : new Date(),
          __v : 0
        },
        {
            user : "5fbbac821b06a5d5e988c5bc",
            product : "5fbba39a1b25b8cc310f44ef",
            viewDate: new Date("2020-10-23"),
            isDeleted : false,
            createdAt : new Date(),
            updatedAt : new Date(),
            __v : 0
        },
        {
          user : "5fbbac821b06a5d5e988c5bc",
          product : "5fbba41f1739a462d3168c4d",
          viewDate: new Date("2020-10-23"),
          isDeleted : false,
          createdAt : new Date(),
          updatedAt : new Date(),
          __v : 0
        },
        {
          user : "5fbbac821b06a5d5e988c5bc",
          product : "5fbba7a2a486ba505f64efc6",
          viewDate: new Date("2020-11-01"),
          isDeleted : false,
          createdAt : new Date(),
          updatedAt : new Date(),
          __v : 0
        },
        {
          user : "5fbbac8899cb0c5e95054842",
          product : "5fbba7ab48bc1a4c004adf7d",
          viewDate: new Date("2020-09-23"),
          isDeleted : false,
          createdAt : new Date(),
          updatedAt : new Date(),
          __v : 0
        },
        {
          user : "5fbbac8899cb0c5e95054842",
          product : "5fbba7a2a486ba505f64efc6",
          viewDate: new Date("2020-10-16"),
          isDeleted : false,
          createdAt : new Date(),
          updatedAt : new Date(),
          __v : 0
        },
        {
          user : "5fbbac8899cb0c5e95054842",
          product : "5fbba7ab48bc1a4c004adf7d",
          viewDate: new Date("2020-09-25"),
          isDeleted : false,
          createdAt : new Date(),
          updatedAt : new Date(),
          __v : 0
        },
        {
          user : "5fbbac8899cb0c5e95054842",
          product : "5fbba7b34468403cee6801cd",
          viewDate: new Date("2020-11-06"),
          isDeleted : false,
          createdAt : new Date(),
          updatedAt : new Date(),
          __v : 0
        },
        {
          user : "5fbbac8899cb0c5e95054842",
          product : "5fbba4194558762d0ce15365",
          viewDate: new Date("2020-11-18"),
          isDeleted : false,
          createdAt : new Date(),
          updatedAt : new Date(),
          __v : 0
        },
        {
          user : "5fbbac8d8c30f4ed2a5fd183",
          product : "5fbba39a1b25b8cc310f44ef",
          viewDate: new Date("2020-11-23"),
          isDeleted : false,
          createdAt : new Date(),
          updatedAt : new Date(),
          __v : 0
        },
        {
          user : "5fbbac8d8c30f4ed2a5fd183",
          product : "5fbba7a2a486ba505f64efc6",
          viewDate: new Date("2020-09-23"),
          isDeleted : false,
          createdAt : new Date(),
          updatedAt : new Date(),
          __v : 0
        },
        {
          user : "5fbbac8d8c30f4ed2a5fd183",
          product : "5fbbac8899cb0c5e95054842",
          viewDate: new Date("2020-10-23"),
          isDeleted : false,
          createdAt : new Date(),
          updatedAt : new Date(),
          __v : 0
        },
        {
          user : "5fbbac8d8c30f4ed2a5fd183",
          product : "5fbbac8d8c30f4ed2a5fd183",
          viewDate: new Date("2020-11-18"),
          isDeleted : false,
          createdAt : new Date(),
          updatedAt : new Date(),
          __v : 0
        },
        {
          user : "5fbbac8d8c30f4ed2a5fd183",
          product : "5fbba39a1b25b8cc310f44ef",
          viewDate: new Date("2020-10-23"),
          isDeleted : false,
          createdAt : new Date(),
          updatedAt : new Date(),
          __v : 0
        },
    ]
    await db.collection('userViews').insertMany(products);
  },

  async down(db, client) {
    /**
     * Delete products
     */
    await db.collection('userViews').delete({});
  }
};
