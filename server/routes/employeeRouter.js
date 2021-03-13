const express = require('express');

// handles all of your http Verbs
// handle /api/departments
const router = express.Router();


// Handle all of the requests to the /api/departments endpoint

module.exports = ()=>{

       router.get('/', (req, res)=>{
           // use Controllers MVC  Model employees, V...views ejs, Controller
           // Build the Data _ View SSR
           // Return JSON Client Client Side Rendered.
           res.send("Return All Employees")
       })


    return router
}


 