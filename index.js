const express = require("express");
const path = require('path')

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')))

// Routes
const userRoutes = require("./routes/users");
const mainRoutes = require("./routes/main");

app.use('/users',userRoutes.router);
app.use(mainRoutes);
app.use((req, res, next) =>{
  res.sendFile(path.join(__dirname,'views','404.html'))
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on PORT: ${PORT}`);
});
