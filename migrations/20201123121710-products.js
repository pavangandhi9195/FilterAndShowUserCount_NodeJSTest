module.exports = {
  async up(db, client) {
    /**
     * Create products
     */
    const products = [
        {
          _id: '5fbba39a1b25b8cc310f44ef',
          name : "Realme 7",
          isDeleted : false,
          createdAt : new Date(),
          updatedAt : new Date(),
          __v : 0
      },
      {
        _id: '5fbba4194558762d0ce15365',
        name : "Realme 7 Pro",
        isDeleted : false,
        createdAt : new Date(),
        updatedAt : new Date(),
        __v : 0
      },
      {
        _id: '5fbba41f1739a462d3168c4d',
        name : "Redmi Note 9",
        isDeleted : false,
        createdAt : new Date(),
        updatedAt : new Date(),
        __v : 0
      },
      {
        _id: '5fbba7a2a486ba505f64efc6',
        name : "Redmi Note 9 Pro Max",
        isDeleted : false,
        createdAt : new Date(),
        updatedAt : new Date(),
        __v : 0
      },
      {
        _id: '5fbba7ab48bc1a4c004adf7d',
        name : "Samsung M31s",
        isDeleted : false,
        createdAt : new Date(),
        updatedAt : new Date(),
        __v : 0
      },
      {
        _id: '5fbba7b34468403cee6801cd',
        name : "Samsung M51",
        isDeleted : false,
        createdAt : new Date(),
        updatedAt : new Date(),
        __v : 0
      }
    ]
    await db.collection('products').insertMany(products);
  },

  async down(db, client) {
    /**
     * Delete products
     */
    await db.collection('products').delete({});
  }
};
