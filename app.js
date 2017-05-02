var EmployeeDetails= [		// variable Employee details is an array of objects. It has 5 different objects
	 {
			empName  	: "Shruthi",
			empAge   	: 24,
			empSalary	: 30000,
			empAddress	: {
						City  		: "Bangalore",
						State		: "Karnataka",
						pinCode 	: 560076
					 	  }	
	}
	,
	{
			empName  	: "swati",
			empAge   	: 24,
			empSalary	: 40000,
			empAddress	: {
						City  		: "Bangalore",
						State		: "Karnataka",
						pinCode 	: 560076
						  }
	},
	{
			empName  	: "veda",
			empAge   	: 25,
			empSalary	: 50000,
			empAddress	: {
						City  		: "Mangalore",
						State		: "Karnataka",
						pinCode 	: 560076
					  	  }
	},
	{
			empName  	: "Manasa",
			empAge   	: 26,
			empSalary	: 60000,
			empAddress	: {
						City  		: "Pune",
						State		: "Karnataka",
						pinCode 	: 560076
						  }
	},
	{
			empName  	: "Shwetha",
			empAge   	: 27,
			empSalary	: 70000,
			empAddress	: {				//nested object
						City  		: "Mumbai",
						State		: "Karnataka",
						pinCode 	: 560076
						}
	}
];

console.log("Displaying the details stored in fourth index of the array");

console.log("Name of fourth employee : " + EmployeeDetails[3].empName);	//accessing the name of the employee indexed at 3rd position of the array

console.log("Age of the employee : " + EmployeeDetails[3]["empAge"]);	// age of the employee

console.log("Salary of employee : " + EmployeeDetails[3].empSalary);

console.log("Employee's address is : " + EmployeeDetails[3].empAddress.City + ", " +EmployeeDetails[3].empAddress.State + " , " + EmployeeDetails[3].empAddress.pinCode); 	// compete address of the employee