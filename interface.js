var Employeenamespace;
(function (Employeenamespace) {
    function Employeedetails(Employee) {
        console.log(" The employee name is  " + Employee.name + ", from " + Employee.department + " department and manage " + Employee.team + "no's of team member");
    }
    Employeenamespace.Employeedetails = Employeedetails;
    ;
})(Employeenamespace || (Employeenamespace = {}));
