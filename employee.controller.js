const { elasticSearch } = require("./elasticSearch");
const fakeDatabase = require("./fakeDatabase");

const createEmployee = (req, res, next) => {
  const emp = req.body;

  fakeDatabase.create(emp);

  elasticSearch.index({
    index: "employee",
    body: emp,
  });

  res.status(200).json(emp);
};

const searchEmployee = async (req, res, next) => {
  const emp = req.query;

  const results = await elasticSearch.search({
    index: "employee",
    body: {
      query: {
        match: {
          firstName: emp.firstName,
          lastName: emp.lastName,
        },
      },
    },
  });

  res.status(200).json({ employees: results.body.hits.hits });
};

module.exports = { createEmployee, searchEmployee };
