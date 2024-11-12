
let {courses} = require('../data/courses')


const getAllCourses = (req,res) =>{
    res.json(courses)

}


const getOneCourse = (req, res) => {
    const id = req.params.id;
    const course = courses.find((course) => course.id == id )
    if(!course){
        return res.status(404).json({msg:`course number ${id} not found`})
    }
    res.json(course);
  }

  const addOneCourse = (req,res)=>{
   

        // const errors = validationResult(req);
    
        // if(!errors.isEmpty()){
        //   return res.status(400).json(errors.array())
        // }
        
        const course = ({id:courses.length+1,...req.body});
        courses.push(course)
    
        res.status(201).json(course)
    
  }

  const updateCourse = (req, res) => {
    const id = req.params.id;
    let course = courses.find((course) => course.id == id )

if(!course){
  return res.status(404).json({msg:"course not found"})
}
course = {...course,...req.body}

res.status(200).json(course);
  }

  const deleteCourse = (req, res) => {
    const id = +req.params.id;  // Get the course ID from the URL params and convert to a number
    
    // Filter the courses array to remove the course with the given ID
    courses = courses.filter(item => item.id !== id);
  
    // Check if the course was deleted
    if (courses.length === 0) {
      return res.status(404).json({ msg: `Course with ID ${id} not found` });
    }
  
    // Send success response
    res.status(200).json({ success: true, msg: `Course with ID ${id} deleted successfully` });
  }


  module.exports = {
    getAllCourses,
    getOneCourse,
    addOneCourse,
    updateCourse,
    deleteCourse
  }