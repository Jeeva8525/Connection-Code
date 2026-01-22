const studentNameElt = document.getElementById('studentName');
const mark1Elt = document.getElementById('subjectMark1');
const mark2Elt = document.getElementById('subjectMark2');
const mark3Elt = document.getElementById('subjectMark3');

const displayTable = document.querySelector('.display-table table');
console.log(displayTable)
const addStudentButton = document.querySelector('.input-container-button');

let highestMarkEltId;
let highestTotalMark = 0;
let totalElements = 0;

addStudentButton.addEventListener('click', () => {
    let studentName = studentNameElt.value;
    const mark1 = parseInt(mark1Elt.value);
    const mark2 = parseInt(mark2Elt.value);
    const mark3 = parseInt(mark3Elt.value);
    let totalMarks = mark1 + mark2 + mark3;
    let grade = 
        totalMarks > 270 ? 'S' :
        totalMarks > 240 ? 'A' :
        totalMarks > 210 ? 'B' :
        totalMarks > 180 ? 'C' :
        totalMarks > 150 ? 'D' :
                             'U';
    if (totalMarks > highestTotalMark) {
        highestTotalMark = totalMarks;
        /* highestMarkElt = ` <tr>
            <td>${studentName}</td><td>${String(mark1).padStart(2, '0')} | ${String(mark2).padStart(2, '0')} | ${String(mark3).padStart(2, '0')}</td><td>${totalMarks}</td><td>${((totalMarks) / 3).toFixed(2)}%</td><td>${grade}</td>
        </tr>`; */
        highestMarkEltId = "Student"+(totalElements+1);
    }
    displayTable.innerHTML += `
        <tr id="${"Student"+(totalElements+1)}">
            <td>${studentName}</td><td>${String(mark1).padStart(2, '0')} | ${String(mark2).padStart(2, '0')} | ${String(mark3).padStart(2, '0')}</td><td>${totalMarks}</td><td>${((totalMarks) / 3).toFixed(2)}%</td><td>${grade}</td>
        </tr>
    `
    totalElements+=1;
    showHighestScoringStudent();
})

function showHighestScoringStudent() {
    console.log(highestMarkEltId);
}