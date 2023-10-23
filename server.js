const dotenv = require('dotenv');
const app = require('./app');
const mongoose = require("mongoose")
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



  const tourSchema = new mongoose.Schema(
    {
      name: {
        type: String,
        required: [true, 'A tour must have a name'],
        unique: true,
        trim: true,
        maxlength: [40, 'A tour name must have less or equal then 40 characters'],
        minlength: [10, 'A tour name must have more or equal then 10 characters']
        // validate: [validator.isAlpha, 'Tour name must only contain characters']
      },
      difficulty: {
        type: String,
        required: [true, 'A tour must have a difficulty'],
        enum: {
          values: ['easy', 'medium', 'difficult'],
          message: 'Difficulty is either: easy, medium, difficult'
        }
      }

    }
  );
  
  
  const Tour = mongoose.model('Tour', tourSchema);
  
  
  
  
  
  
  
  
  
  
  
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
