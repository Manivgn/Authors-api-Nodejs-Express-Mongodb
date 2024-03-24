const asyncHandler = require('express-async-handler')

const Author = require('../models/authorModel')

//@desc Get authors
// @route GET /api/authors
//@ access private
const getAuthors = asyncHandler(async (req, res) => {
    const authors  = await Author.find().sort({fullName :1})
    res.json(authors)
})

//@desc Set Author
// @route POST /api/authors
//@ access private
const SetAuthor = asyncHandler(async (req, res) => {
  if(!req.body.fullName && !req.body.year_Born && !req.body.technology){
        res.status(400);
        throw new Error('Please add the required fields');
    }
    const author = await Author.create({
        fullName : req.body.fullName ,
        year_Born : req.body.year_Born,
        technology : req.body.technology
    });

    res.json(author)
})

//@desc update Author
// @route UPDATE /api/authors/:id
//@ access private
const updateAuthor = asyncHandler(async (req, res) => {
    const author = await Author.findById(req.params.id);
    if(!author){
     throw new Error('Author not found');
    }

    const updatedauthor = await Author.findByIdAndUpdate(req.params.id,
    req.body,{
        new : true
    })

    res.json(updatedauthor)
})

//@desc delete Author
// @route DELETE /api/authors/:id
//@ access private
const deleteAuthor = asyncHandler(async (req, res) => {
    const author = await Author.findById(req.params.id);
    if(!author){
        throw new Error('Author not found');
    }
    const removedauthor = await Author.deleteOne(author);

    res.json(removedauthor)
})

module.exports = {
    getAuthors,
    SetAuthor,
    updateAuthor,
    deleteAuthor
}