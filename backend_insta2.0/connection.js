import mongoose from "mongoose";

function connect(url)
{
    return mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
}
export default connect;