const students = [{
    name: "Tanya",
    course: 3,
    subjects: {
      math: [4, 4, 3, 4],
      algorithms: [3, 3, 3, 4, 4, 4],
      data_science: [5, 5, 3, 4],
    }
  }, {
    name: "Victor",
    course: 4,
    subjects: {
      physics: [5, 5, 5, 3],
      economics: [2, 3, 3, 3, 3, 5],
      geometry: [5, 5, 2, 3, 5]
    }
  }, {
    name: "Anton",
    course: 2,
    subjects: {
      statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
      english: [5, 3],
      cosmology: [5, 5, 5, 5]
    }
  }];
    
   // Function 1
  
  function getSubjects(student) {
    const newSubjectsArray = []
    const subjectsOfStudent = Object.keys(student.subjects);
    
    subjectsOfStudent.forEach( subject => {
      const upperCaseSubject =  subject[0].toUpperCase() + subject.substring(1);
      const modifiedSubject = upperCaseSubject.replace();
  
      newSubjectsArray.push(modifiedSubject);
      });
  
    return newSubjectsArray;
    }         
    
  console.log(`Список предметів: ${getSubjects(students[0])}.`)
         
   // Function 2 
  
  function getAverageMark(student) {
    const marks = Object.values(student.subjects);
    const averageMarks = [];
    let averageMark = null;
    
    marks.forEach(array => {
      let sumForSubject = null;
      let averageForSubject = null;
      let i = 0;
  
      while (i < array.length) {
        sumForSubject += array[i];
        i++;
      }
      
      averageForSubject = sumForSubject / array.length
      averageMarks.push(averageForSubject);
    });
    let sumForSubjects = null;
  
    averageMarks.forEach(mark => {
      sumForSubjects += mark;
    });
    
    averageMark = +(sumForSubjects / averageMarks.length).toFixed(2);
    
    return averageMark;
  }
  
  console.log(`Середня оцінка: ${getAverageMark(students[2])}.` );
    
    // Function 3 
  
  function getStudentInfo(student) {
    let studentInfo = {
      course: student.course,
      name: student.name,
      averageMark: getAverageMark(student),
      }
    
    return studentInfo;
  }
  
  console.log(getStudentInfo(students[1]));
    
    // Function 4
    
  function getStudentsNames(array) {
    const names = [];
    
    students.forEach(person => {
      let personName = person.name;
    
      names.push(personName);
    });
    
    return names.sort();
  }
  
  console.log(`Імена учнів у алфавітному порядку: ${getStudentsNames(students)}.`);
    
  // Function 5
  
  function getBestStudent(array) {
    const allAverageMarks = [];
  
    array.forEach(student => {
      allAverageMarks.push(getAverageMark(student));
    });
  
    const maxAverageMark = Math.max(...allAverageMarks);
    let bestStudents = [];
  
    array.forEach(student => {
      if ( getAverageMark(student) === maxAverageMark) {
        bestStudents.push(student.name);
      }
    });
  
     return bestStudents;
  }
  
  console.log(`Кращий студент ${getBestStudent(students)}.`);
  
  // Function 6
  
  function calculateWordLetters(word) {
    const arrayFromWord = word.split('');
    let wordObject = {};
    
    arrayFromWord.forEach(letter => {
      let letterQuantity = 0;
      let letterObject = {};
  
      for (let i = 0; i < arrayFromWord.length; i++) {
        if (arrayFromWord[i] === letter) {
          letterQuantity += 1; 
        }
      }
  
      letterObject[letter] = letterQuantity;
      Object.assign(wordObject, letterObject);
    })
    
    return wordObject;
  }
  
  console.log(calculateWordLetters("test"));