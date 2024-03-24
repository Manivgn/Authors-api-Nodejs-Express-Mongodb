const asyncHandler = require('express-async-handler')

//@desc Get authors
// @route GET /api/authors
//@ access private
const getAuthors = asyncHandler(async (req, res) => {
    res.json({ message: 'Get authors'})
})

//@desc Set Author
// @route POST /api/authors
//@ access private
const SetAuthor = asyncHandler(async (req, res) => {
    if(!req.body.text){
        res.status(400);
        throw new Error('Please add a text file');
    }
    res.json({ message: 'Set author'})
})

//@desc update Author
// @route UPDATE /api/authors/:id
//@ access private
const updateAuthor = asyncHandler(async (req, res) => {
    res.json({ message: `Update author ${req.params.id}`})
})

//@desc delete Author
// @route DELETE /api/authors/:id
//@ access private
const deleteAuthor = asyncHandler(async (req, res) => {
    res.json({ message: `Delete author ${req.params.id}`})
})

module.exports = {
    getAuthors,
    SetAuthor,
    updateAuthor,
    deleteAuthor
}