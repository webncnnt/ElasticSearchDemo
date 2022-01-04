const employees = [
  { id: 1, firstName: "Trí", lastName: "Nguyễn Đức Minh" },
  { id: 2, firstName: "Tiến", lastName: "Hồ Hoàng Việt" },
  { id: 3, firstName: "Hồ", lastName: "Huỳnh Hải" },
  { id: 4, firstName: "Nhi", lastName: "Nguyễn Hải" },
  { id: 5, firstName: "Tiến", lastName: "Trần Đăng" },
  { id: 6, firstName: "Trí", lastName: "Cao Minh" },
];

const create = (emp) => {
  emp.id = employees.length++;
  employees.push(emp);
};

module.exports = { create, employees };
