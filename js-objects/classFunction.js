// classMain used to run this file
const readline = require("readline-sync");

// Add new student
addStudent = (studentArray, name, id) => {
  for( let i =0; i < studentArray.length;i++){
  if (  studentArray[i].id===id) {
    return "The ID is already used for anouther student"
  }
  }
  let marks = [];
  let test = {
    name,
    id,
    marks
  };
  studentArray.push(test);
  return studentArray;
};


// enter students mark and subject
enterMark4Student = (studentArray, inputId, subject, mark) => {
  marks = { subject, mark };
  let length = studentArray.length;
  for (let i = 0; i < length; i++) {
    if (studentArray[i].id == inputId) {
      // this for loop for the subject's that already extisting in the object
      for (let j = 0; j < studentArray[i].marks.length; j++) {
        if (studentArray[i].marks[j].subject == subject) {
          studentArray[i].marks[j].mark = mark;
          return studentArray[i];
        }
      }
      studentArray[i].marks.push(marks);
      return studentArray[i];
    }
  }
};


// for enter multiple student details
enterMark4Students = (arrayStudent, subject) => {
  let length = arrayStudent.length;
  for (let i = 0; i < length; i++) {
    let mark = readline.question(
      "enter " + arrayStudent[i].name + "'s  mark of " + subject + " : "
    );
    enterMark4Student(arrayStudent, arrayStudent[i].id, subject, mark);
    console.log(arrayStudent[i].marks);
  }
};


// for edit student mark
editMark = (studentArray, inputId, inputSubject, InputMark) => {
  return enterMark4Student(studentArray, inputId, inputSubject, InputMark);
};


// change class teacher
changeTeacher = (classDetails, inputClassName, inputTeacherName) => {
  if (classDetails.name === inputClassName) {
    classDetails.teacherName = inputTeacherName;
  }
  return classDetails;
};


// delete a student
deleteStudent = (arr, inputId) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].id === inputId) {
      arr.splice(i, 1);
    }
  }
  return arr;
};


// delete a subject entry from all the students
deleteSubject = (arr, inputSubject) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].marks) {
      for (let j = 0; j < arr[i].marks.length; j++) {
        if (arr[i].marks[j].subject === inputSubject) {
          arr[i].marks.splice(j, 1);
        }
      }
    }
    console.log(arr[i]);
  }
  return arr;
};


// find topper student editMarkin a given subject.
topperOfSubject = (arr, inputSubject) => {
  let topStudent = "",
    top = 0;
  for (let i = 0; i < arr.length; i++) {
    let marksArray = arr[i].marks;
    if (marksArray) {
      for (let j = 0; j < marksArray.length; j++) {
        if (marksArray[j].subject === inputSubject) {
          top = marksArray[j].mark > top ? marksArray[j].mark : top;
          topStudent = marksArray[j].mark === top ? arr[i].name : topStudent;
        }
      }
    }
  }
  return (
    topStudent +
    " is the top scorer in " +
    inputSubject +
    ". He scored " +
    top +
    " marks in " +
    inputSubject
  );
};


// find avarage marks in a given subject
avarageOfSubject = (arr, inputSubject) => {
  let avg = 0;
  for (let i = 0; i < arr.length; i++) {
    let arrayMark = arr[i].marks;
    if (arrayMark) {
      for (let j = 0; j < arrayMark.length; j++) {
        if (arrayMark[j].subject === inputSubject) {
          avg += arrayMark[j].mark;
        }
      }
    }
  }
  avg = avg / arr.length;
  return avg + " mark is the avarage in " + inputSubject;
};


// sort list by name
sortingByName = studentArr => {
  studentArr.sort((student1, student2) =>
    student1.name.localeCompare(student2.name)
  );
  return studentArr;
};


// sort by marks of a given subject
sortingByMarks = (schoolClass, subject) => {
  schoolClass.students.sort((student1, student2) => {
    let arraysubjects1 = student1.marks;
    let arraysubjects2 = student2.marks;
    checkSubject1 = arraysubjects1 => arraysubjects1.subject === subject;
    checkSubject2 = arraysubjects2 => arraysubjects2.subject === subject;
    return (
      student2.marks[arraysubjects2.findIndex(checkSubject2)].mark -
      student1.marks[arraysubjects1.findIndex(checkSubject1)].mark
    );
  });
  return schoolClass;
};


// findout total mark gained by a student
findTotalMark = (studentArr, id) => {
  for (let i = 0; i < studentArr.length; i++) {
    if (studentArr[i].id === id) {
      let markArr = studentArr[i].marks;
      var sum = markArr.reduce(function(a, b) {
        return a + b.mark;
      }, 0);
      console.log("total marks of " + studentArr[i] + " is " + sum);
      studentArr[i].totalMarks = sum;
    }
  }
  return studentArr;
};


module.exports = {
  addStudent,
  enterMark4Student,
  enterMark4Students,
  editMark,
  changeTeacher,
  deleteStudent,
  deleteSubject,
  findTotalMark,
  topperOfSubject,
  avarageOfSubject,
  sortingByName,
  sortingByMarks
};
