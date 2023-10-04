const EmploymentTypes = require("./EmploymentType");

const getEmploymentTypes = async (req, res)=> {
    const employmentTypes= await EmploymentTypes.findAll()

    res.status(200).send(employmentTypes)
}


module.exports = {
    getEmploymentTypes,
}