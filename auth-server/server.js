const express = require('express');
const app = express();
const dotenv =  require('dotenv');
const mongoose = require('mongoose');

const authRoutes = require('./users/routes/Auth');
const groupRoutes = require('./groups/routes/Groups');

dotenv.config();

const uri = "mongodb+srv://" + process.env.MONGODB_USERNAME + ":" + process.env.MONGODB_PASSWORD +
    "@csci5709-project.ed041.mongodb.net/" + process.env.MONGODB_CLUSTER_NAME + "?retryWrites=true&w=majority";

mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true}, () => {
    console.log("Database Connection Successful.");
});

app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/groups', groupRoutes);

app.listen(process.env.PORT || 3000, () => {
    console.log('Auth-Server Running on port : ', process.env.PORT || 3000);
})