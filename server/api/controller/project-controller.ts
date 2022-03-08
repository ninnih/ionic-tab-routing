export {};
const Project = require('../model/project-models');

const createProject = (req, res) => {
  const body = req.body

  if (!body) {
      return res.status(400).json({
          success: false,
          error: 'You must provide a Project',
      })
  }

  const project = new Project(body)

  if (!project) {
      return res.status(400).json({ 
          success: false, 
          error: res.err 
        })
  }

  project
      .save()
      .then(() => {
          return res.status(201).json({
              success: true,
              id: project._id,
              message: 'Project created!',
          })
      })
      .catch(error => {
          return res.status(400).json({
              error,
              message: 'Project not created!',
          })
      })
}

const getProject = async (req, res) => {
    await Project.find({}, (err, projects) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!projects.length) {
            return res
                .status(404)
                .json({ success: false, error: `Projects not found` })
        }
        return res.status(200).json({ success: true, data: projects })
    }).catch(err => console.log(err))
}


module.exports = {
    createProject,
    getProject
}