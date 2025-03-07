const express = require('express');
const cors = require('cors');
const exerciseRoutes = require('./routes/exercise');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.use('/exercise', exerciseRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
