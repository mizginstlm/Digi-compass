const dotenv = require('dotenv');
const mongoose = require("mongoose")
const app = require('./app');
dotenv.config({ path: './config.env' });

const DB = process.env.DATABASE.replace(
  '<PASSWORD>', 
  process.env.DATABASE_PASSWORD
);


mongoose.connect(DB, {
    useNewUrlParser: true
  })
  .then(con => {
  console.log(con.connections);
  console.log('DB connection successful!')});



  
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
