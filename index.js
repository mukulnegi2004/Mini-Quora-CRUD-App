// Import express framework
const express = require("express");
const app = express();
const port = 8080;
const path = require('path');

app.use(express.urlencoded({ extended : true }));                   // Middleware to parse data from POST request body (form data)

app.set("view engine","ejs");                                       // Set EJS as view engine
app.set("views", path.join(__dirname, "views"));                    // Set the views folder path (where .ejs templates are stored)

app.use(express.static(path.join(__dirname, "public")));            // Serve static files (CSS, JS, images) from "public" folder

app.listen(port, () =>{                                             // Start server
    console.log(`listening to port: ${port}`);
});

app.get("/", (req,res) => {                                          // Root route (homepage)
    res.send("server working well!");
})



//creating IDs using UUID package (used to generate unique IDs)
const { v4: uuidv4 } = require('uuid');                   // importing "v4" method from uuid package and renaming it as uuidv4 


//method-overriding, to use HTTP verbs such as PUT, PATCH or DELETE in places where the client(HTML) doesn't support it.
const methodOverride = require('method-override');
app.use(methodOverride('_method'));




//Index Route
let posts = [                                                           // Fake database (array of posts)
    {
        id : uuidv4(),                                               //create unique ID using UUID package
        username : "addam",
        content : "I am new to programming, please suggest resources."
    },
    {
        id : uuidv4(),                                                //create unique ID using UUID package
        username : "robert",
        content : "hardwork is the key to achieve success"
    },
    {
        id : uuidv4(),                                                 //create unique ID using UUID package
        username : "Oliver",
        content : "i got selected for my first internship"
    },
]
app.get("/posts", (req,res) => {                                      // READ → Index Route (show all posts)
    res.render("index.ejs", { posts });                              // Render index.ejs and pass 'posts' array to template
})




//create & new route   
app.get("/posts/new", (req,res) => {                        // CREATE → New Route (form to create a new post)
    res.render("new.ejs");                                           // Renders new.ejs file with a form
})
app.post("/posts", (req,res) => {                            // CREATE → Create Route (handles form submission)
    let {username, content} = req.body;                                // Extract username & content from form body
    let id = uuidv4();                                              //create unique IDs for each new post using UUID package                 
    posts.push({ id,username, content});                               // Add new post object to posts array
    res.redirect("/posts");                                        // Redirect back to /posts to see updated list
})




//show route         (READ → Show a single post by its ID)
app.get("/posts/:id", (req,res) => {            
    let {id} = req.params;                                                      // extract id from URL
    let post = posts.find((p) => id === p.id);                                   // find the post with matching id
    res.render("show.ejs", { post });                                                // render show.ejs template and send post data
    
})




//update route        (UPDATE → Handle form submission to update an existing post)
app.patch("/posts/:id", (req,res) => {   
    let { id } = req.params;                                               // extract id from URL
    let newContent = req.body.content;                                     // get updated content from form body
    let post = posts.find((p) => id === p.id);                              // find the post with matching id
    post.content = newContent;                                              // update the post's content
    console.log(post);                                                      // print updated post (for debugging)
    res.redirect("/posts");                                                 // after updating, redirect back to posts list
    
})




//edit route       ( READ → Form to edit a single post)
app.get("/posts/:id/edit", (req,res) => {   
    let { id } = req.params;                                             // extract id from URL
    let post = posts.find((p) => id === p.id);                            // find the post with matching id
    res.render("edit.ejs", { post });                                     // render edit.ejs with post data (pre-filled form)
})




//destroy route        (DELETE → Remove a post by its ID)
app.delete("/posts/:id", (req,res) => { 
    let { id } = req.params;                                             // extract id from URL
    posts = posts.filter((p) => id !== p.id);                           // update the posts array excluding the post with matching id                 
    res.redirect("/posts");                                              // after deleting, redirect back to updated posts list 
})