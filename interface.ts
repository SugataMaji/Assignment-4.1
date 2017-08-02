namespace Employeenamespace {
  export interface Employee {
    name: string;
    department: string;
    team: number;
  }

  export function Employeedetails(Employee: Employee) {
    console.log(` The employee name is  ${Employee.name}, from ${Employee.department} department and manage ${Employee.team}no's of team member`);
  };
}