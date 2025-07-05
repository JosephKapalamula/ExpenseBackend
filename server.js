import app from "./index.js";
import mongoose from "mongoose";



mongoose.connect(process.env.DATABASE_URL).then(() => {
    console.log("Database connected successfully...");
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}...`);
});


