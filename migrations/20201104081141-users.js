module.exports = {
  async up(db, client) {
    /**
     * Create users
     */
    const users = [
        {
          _id: '5fbbac821b06a5d5e988c5bc',
          name : "Abhishek",
          email : "abhisek@gmail.com",
          password : "$2a$10$U.JIz8jtaejqKrJRmpq3NuzsyIHz.WxMLk42o6jLbkqsFa0alP6Fa",  // Passowrd is: 12345678
          isDeleted : false,
          createdAt : new Date(),
          updatedAt : new Date(),
          __v : 0
      },
      {
        _id: '5fbbac8899cb0c5e95054842',
        name : "Mitesh",
        email : "Mitesh@gmail.com",
        password : "$2a$10$U.JIz8jtaejqKrJRmpq3NuzsyIHz.WxMLk42o6jLbkqsFa0alP6Fa",  // Passowrd is: 12345678
        isDeleted : false,
        createdAt : new Date(),
        updatedAt : new Date(),
        __v : 0
      },
      {
        _id: '5fbbac8d8c30f4ed2a5fd183',
        name : "Pavan",
        email : "pavan@gmail.com",
        password : "$2a$10$U.JIz8jtaejqKrJRmpq3NuzsyIHz.WxMLk42o6jLbkqsFa0alP6Fa",  // Passowrd is: 12345678
        isDeleted : false,
        createdAt : new Date(),
        updatedAt : new Date(),
        __v : 0
      },
      {
        _id: '5fbbbb1338686807b0071e78',
        name : "Abhi",
        email : "Abhi@gmail.com",
        password : "$2a$10$U.JIz8jtaejqKrJRmpq3NuzsyIHz.WxMLk42o6jLbkqsFa0alP6Fa",  // Passowrd is: 12345678
        isDeleted : false,
        createdAt : new Date(),
        updatedAt : new Date(),
        __v : 0
      },
      {
        _id: '5fbbbb1e9140103e847c640f',
        name : "Ab",
        email : "ab@gmail.com",
        password : "$2a$10$U.JIz8jtaejqKrJRmpq3NuzsyIHz.WxMLk42o6jLbkqsFa0alP6Fa",  // Passowrd is: 12345678
        isDeleted : false,
        createdAt : new Date(),
        updatedAt : new Date(),
        __v : 0
      }

    ]
    await db.collection('users').insertMany(users);
  },

  async down(db, client) {
    /**
     * Delete users
     */
    await db.collection('users').delete({});
  }
};
