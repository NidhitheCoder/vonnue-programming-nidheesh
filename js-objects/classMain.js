const readline = require("readline-sync");
const functionList = require("./classFunction");

let classDetails = {
  name: "Class A",
  teacherName: "Sara",
  students: [
    {
      name: "john",
      id: 101,
      email: "john@gmail.com",
      age: 24,
      phNumber: 98576463,
      marks: [
        { subject: "english", mark: 88 },
        { subject: "maths", mark: 30 },
        { subject: "computer", mark: 40 },
        { subject: "physics", mark: 30 },
        { subject: "chemistry", mark: 30 }
      ]
    },
    {
      name: "ajay",
      id: 102,
      email: "july@gmail.com",
      age: 27,
      phNumber: 9857676867,
      marks: [
        { subject: "english", mark: 41 },
        { subject: "maths", mark: 25 },
        { subject: "computer", mark: 54 },
        { subject: "physics", mark: 23 },
        { subject: "chemistry", mark: 42 }
      ]
    },
    {
      name: "benny",
      id: 105,
      email: "jery@gmail.com",
      age: 28,
      phNumber: 567656756,
      marks: [
        { subject: "english", mark: 92 },
        { subject: "maths", mark: 43 },
        { subject: "computer", mark: 23 },
        { subject: "physics", mark: 43 },
        { subject: "chemistry", mark: 62 }
      ]
    }
  ]
};

console.log("Enter 1 to add new student");
console.log("Enter 2 for add mark for a student");
console.log("Enter 3 for add mark for a subject for mutliple student");
console.log("Enter 4 for add mark to a particular subject");
console.log("Enter 5 for change class teacher of class");
console.log("Enter 6 for remove a student");
console.log("Enter 7 for delete a subject entry from every students");
console.log("Enter 8 for find topper of given subject in class");
console.log("Enter 9 for find avarage of given subject in class");
console.log("Enter 10 for sort students by name");
console.log("Enter 11 for sort students by mark obtained in given subject");
console.log(
  "Enter 12 for findout total mark of a student and added into the array\n"
);

let response = parseInt(readline.question("Enter your Response: "));

if (response === 1) {
  let name = readline.question("enter new student name :");
  let id = parseInt(readline.question("enter ID of the student :"));
  console.log(functionList.addStudent(classDetails.students, name, id));
} else if (response === 2) {
  let id = parseInt(readline.question("enter ID of the student :"));
  let subject = readline.question("enter subject name :");
  let mark = parseInt(readline.question("enter mark :"));
  console.log(
    functionList.enterMark4Student(classDetails.students, id, subject, mark)
  );
} else if (response === 3) {
  let subject = readline.question("enter the subject :");
  functionList.enterMark4Students(classDetails.students, subject);
} else if (response === 4) {
  let id = parseInt(readline.question("enter ID of the student :"));
  let subject = readline.question("enter subject name :");
  let mark = parseInt(readline.question("enter mark :"));
  console.log(functionList.editMark(classDetails.students, id, subject, mark));
} else if (response === 5) {
  let className = "Class A";
  let teacher = readline.question("enter new teacher name :");
  console.log(functionList.changeTeacher(classDetails, className, teacher));
} else if (response === 6) {
  let id = parseInt(readline.question("enter ID of the student :"));
  console.log(functionList.deleteStudent(classDetails.students, id));
} else if (response === 7) {
  let subject = readline.question("enter subject name :");
  functionList.deleteSubject(classDetails.students, subject);
} else if (response === 8) {
  let subject = readline.question("enter subject name :");
  console.log(functionList.topperOfSubject(classDetails.students, subject));
} else if (response === 9) {
  let subject = readline.question("enter subject name :");
  console.log(functionList.avarageOfSubject(classDetails.students, subject));
} else if (response === 10) {
  console.log(functionList.sortingByName(classDetails.students));
} else if (response === 11) {
  let subject = readline.question("enter subject name :");
  console.log(functionList.sortingByMarks(classDetails, subject));
} else if (response === 12) {
  let id = parseInt(readline.question("enter ID of the student :"));
  console.log(functionList.findTotalMark(classDetails.students, id));
} else {
  console.log("Please enter a valid response");
}
