import multer from 'multer'

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/temp')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)         // by multer its possible to get information of file recieved
    }
})

export const upload = multer({ storage: storage })

