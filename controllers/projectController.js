let Project = require('../models/Project');
let user = require('../models/user');
let projectController = {
    
    getAllProjects:function(req, res){
        
        Project.find(function(err, projects){
            
            if(err)
                res.send(err.message);
            else
                res.render('home', {projects});
        })
    },

    getSummary:function(req,res){
   user.find(function(err,myUsers){

   for( i=0;i<myUsers.length;i++){
Project.find({username: myUsers[i]},function(err,projects){
if(projects.length>0)
i++
});
   }
   })
    },

    createProject:function(req, res){
        let project = new Project(req.body);

        project.save(function(err, project){
            if(err){
                res.send(err.message)
                console.log(err);
            }
            else{

                console.log(project);
                res.redirect('/profile');
            }
        })
    },
 getProjectByUsername:function(req,res){
Project.find({username: req.user.username},function(err,projects){
if(err)
    res.send(err.message)
else
    res.render('profile',{userprojects:projects});
})

 }


}

module.exports = projectController;