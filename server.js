const express = require("express");
const { elasticSearch } = require("./elasticSearch");
const { searchEmployee, createEmployee } = require("./employee.controller");
const { employees } = require("./fakeDatabase");

const app = express();

app.use(express.json());
app.use(express.urlencoded());

elasticSearch.indices.delete({ index: "employee" }).then(() => {
  const body = employees.flatMap((doc) => [
    { index: { _index: "employee" } },
    doc,
  ]);
  elasticSearch.bulk({ refresh: true, body });
});

app.get("/employees/search", searchEmployee);
app.post("/employees/", createEmployee);

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
