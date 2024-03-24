const express = require('express')
const router = express.Router()

const { 
    getAuthors,
    SetAuthor,
    deleteAuthor,
    updateAuthor 
} = require('../controllers/authorController')

router.route('/').get(getAuthors).post(SetAuthor)
router.route('/:id').delete(deleteAuthor).put(updateAuthor)

module.exports = router 