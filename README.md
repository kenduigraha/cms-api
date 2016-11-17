# cms-api

## Dependencies
1. express generator
2. passport
3. passport-local
4. passport-local-mongoose
5. dotenv
6. mongodb
7. mongoose
8. nodemon
9. jsonwebtoken
10. bower
11. gulp
12. browser-sync
13. jwt-decode
14. jQuery
15. bootstrap

## Database
1. name : db_cms_api
2. collections : Users, Datas, Data_dates

### Schema
1. Users
```json
let UsersSchema = new Schema ({
  "username" : String,
  "password" : String,
  "email"  : String
},{
  "timestamps" : true
  })
```

2. Datas
```json
let DatasSchema = new Schema ({
  "letter" : String,
  "frequency" : String
},{
  "timestamps" : true
  })
```

3. Data_dates
```json
let DatasDatesSchema = new Schema ({
  "date" : Date,
  "frequency" : String
},{
  "timestamps" : true
  })
```

## API
Default development port & host : http://localhost:3000

### Users
| Routes | HTTP | Description |
|--------|------|-------------|
| /api/users | POST | register new user |
| /api/users/login | POST | login user |
| /api/users/seed | POST | seed user |
| /api/users/deleteall | DELETE | delete all user |


### Datas
| Routes | HTTP | Description |
|--------|------|-------------|
| /api/datas | POST | process new data |
| /api/datas | GET | show all datas |
| /api/datas/:id | PUT | edit a data |
| /api/datas/:id | DELETE | deleet a data |
| /api/datas/seed | POST | seed data |
| /api/datas/deleteall | DELETE | delete all data |

### Data_dates
| Routes | HTTP | Description |
|--------|------|-------------|
| /api/data_dates | POST | process new data_date |
| /api/data_dates | GET | show all data_dates |
| /api/data_dates/:id | PUT | edit a data_date |
| /api/data_dates/:id | DELETE | deleet a data_date |
| /api/data_dates/seed | POST | seed data_date |
| /api/data_dates/deleteall | DELETE | delete all data_date |

# Contributor
Ken Duigraha Putra &copy; 2016

# License
MIT
