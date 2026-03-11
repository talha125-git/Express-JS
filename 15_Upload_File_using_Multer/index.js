import express from "express"
import multer from "multer"

const app = express()

// Configure storage location and file name for uploaded files
const storage = multer.diskStorage({
    destination:function (req,file,cb) {
        cb(null,'upload')   // folder where files will be saved
    },
    filename:function name(req,file,cb) {
        cb(null,file.originalname)   // keep original file name
    }
})

// Initialize multer with storage configuration
const upload = multer({storage})


// Route to show upload form
app.get("/",(req,resp)=>{
    resp.send(` 
        <form action="/upload" method="post" enctype="multipart/form-data">
            <input type="file" name="myfile">
            <button> Upload File </button>
        </form>
        `)
})


// Route to handle file upload
app.post("/upload", upload.single('myfile'), (req,resp)=>{
    resp.send({
        message:"file uploaded",
        info: req.file,   // information about uploaded file
    })
})

// Start server on port 3200
app.listen(3200)