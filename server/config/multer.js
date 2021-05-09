const multer = require('multer')

// Set up multer for storing uploaded files
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads/')
    },
    filename: (req, file, cb) => {
      const ext = file.originalname.substr(file.originalname.lastIndexOf('.'))

      cb(null, file.fieldname + '-' + Date.now() + ext)
    }
  })

exports.store = multer({ storage: storage })