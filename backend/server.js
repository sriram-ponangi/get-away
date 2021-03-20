const express = require('express');
const app = express();
// const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');

const authRoutes = require('./users/routes/Auth');
const userDetailsRoutes = require('./users/routes/Details');
const groupRoutes = require('./groups/routes/Groups');
const destinationRoutes = require('./destinations/routes/Destinations');
const highlightRoutes = require('./highlights/routes/Highlights');
const contactusRoutes = require('./contactus/routes/contactus');
const groupCommentsRoutes = require('./groups/routes/Comments');
const groupPhotosRoutes = require('./groups/routes/Photos');

// dotenv.config();

const uri = "mongodb+srv://" + process.env.MONGODB_USERNAME + ":" + process.env.MONGODB_PASSWORD +
    "@csci5709-project.ed041.mongodb.net/" + process.env.MONGODB_CLUSTER_NAME + "?retryWrites=true&w=majority";

console.log("DB Cluster Name", process.env.MONGODB_CLUSTER_NAME);
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}, () => {
    console.log("Database Connection Successful.");
});

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/group', groupRoutes);
app.use('/api/user', userDetailsRoutes);
app.use('/api/destination', destinationRoutes);
app.use('/api/highlight', highlightRoutes);
app.use('/api/contactus', contactusRoutes);
app.use('/api/group/comments', groupCommentsRoutes);
app.use('/api/group/photos', groupPhotosRoutes);


app.use(express.static('public'));
app.use('/uploads', express.static('uploads'));

app.listen(process.env.PORT || 4000, () => {
    console.log('Auth-Server Running on port : ', process.env.PORT || 4000);
})