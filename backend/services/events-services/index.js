const express = require('express');
const router = express.Router();
const cors = require('cors');
const connectDB = require('./db/connectDB');
const PORT = 3001;
const app = express();

app.use(express.json());
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
}));


//all router set here
app.use('/api/Hackathons', require('./routers/hackathons.router'));
app.use('/api/CompetitiveProgramming', require('./routers/competitive-programming.router'));
app.use('/api/User', require('./routers/user.router'));
app.use('/api/Internship', require('./routers/internship.router'));
app.use('/api/Job', require('./routers/job.router'));

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
}).catch((error) => {
    console.error('Failed to connect to DB:', error);
});
