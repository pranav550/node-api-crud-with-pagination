const express = require("express");
const router = express.Router();
const {getBootcamps,
      getBootcamp,
      createBootcamp,
      updateBootcamp,
      deleteBootcamp,
      getBootcampsFilter,
      getBootcampsSelect,
      getBootcampsSort,
      getBootcampsPagination
} 
= require('../controllers/bootcamp');

router.route('/')
      .get(getBootcamps)
      .post(createBootcamp)


      router.route('/filter')
      .get(getBootcampsFilter)

      router.route('/select')
      .get(getBootcampsSelect)

      router.route('/sort')
      .get(getBootcampsSort)

      router.route('/pagination')
      .get(getBootcampsPagination)
         
     

router.route('/:id')
      .get(getBootcamp)
      .put(updateBootcamp)
      .delete(deleteBootcamp)
        

module.exports = router