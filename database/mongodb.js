import mongoose from 'mongoose';

async function connect() {
    await mongoose.connect(
        "mongodb+srv://arpanamishra394:Arpana2641@moviereview.idfnew0.mongodb.net/?retryWrites=true&w=majority"
    );
    console.log("MongoDB connection is successful");
};

export default connect;

