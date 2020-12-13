### To install dependencies
```sh
$ npm install
```

### To start server
```sh
$ npm run dev
```

### To run migration
##### (DO NOT RUN THIS IF USING ATLAS DB PROVIDED BY ME)
To pre seed the roles information and admin record, you can run following command on your local machine.
```sh
$ npm run migrate:status
$ npm run migrate:up
```

### How to access
To get all data => http://localhost:3000/userView

To get daily data => http://localhost:3000/userView?type=daily

To get weekly data => http://localhost:3000/userView?type=weekly

To get monthly data => http://localhost:3000/userView?type=monthly

To get custom data => http://localhost:3000/userView?type=custom&from=2020-11-01&to=2020-11-23
