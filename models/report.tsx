import mongoose,{Schema} from "mongoose";

const reportSchema = new Schema(
    {
        studentId: String,
        roomName: String,
        description: String,
        date: Date,
        time: String,
        
    },{
        timestamps:true,
    }
);

const Report = mongoose.models.Report || mongoose.model("Report", reportSchema)

export default Report;