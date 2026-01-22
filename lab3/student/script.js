document.getElementById('fileInput').addEventListener('change', async function (event) {
    const file = event.target.files[0];
    // console.log(file)

    if (!file) {
        console.log('File not found!')
        return;
    }
    
    const reader = new FileReader();
    let xmlDoc;
    reader.onload = function (eve) {
        const xmlText = eve.target.result;
        // console.log(xmlText)

        const parser = new DOMParser();
        xmlDoc =  parser.parseFromString(xmlText, 'text/xml')
        // console.log(xmlDoc)
        callIt(xmlDoc)
    }

    reader.readAsText(file)
    
})

function getGrade(average) {
    if (average >= 90) return 'A';
    if (average >= 80) return 'B';
    if (average >= 70) return 'C';
    if (average >= 60) return 'D';
    return 'F';
}


function callIt(xmlDoc) {
    const displayTable = document.getElementById('displayTable');
    displayTable.innerHTML = `<tr>
        <th>Name</th><th>Id</th><th>Dept</th><th>Mark1</th><th>Mark2</th><th>Mark3</th><th>Total</th><th>Average</th><th>Grade</th>
    </tr>`;

    const students = xmlDoc.getElementsByTagName('student');
    
    for (let student of students) {
        const name = student.getElementsByTagName('name')[0].textContent;
        const id = student.getElementsByTagName('id')[0].textContent;
        const dept = student.getElementsByTagName('dept')[0].textContent;
        const mark1 = parseInt(student.getElementsByTagName('mark1')[0].textContent) || 0;
        const mark2 = parseInt(student.getElementsByTagName('mark2')[0].textContent) || 0;
        const mark3 = parseInt(student.getElementsByTagName('mark3')[0].textContent) || 0;

        const total = mark1 + mark2 + mark3;
        const average = total / 3;
        
        let grade = 'F';
        if (average >= 90) grade = 'A';
        else if (average >= 80) grade = 'B';
        else if (average >= 70) grade = 'C';
        else if (average >= 60) grade = 'D';

        let rowClass = "";
        if (average >= 90) {
            rowClass = "topper";
        } else if (average < 40) {
            rowClass = "failed";
        }

        displayTable.innerHTML += `
            <tr class="${rowClass}">
                <td>${name}</td>
                <td>${id}</td>
                <td>${dept}</td>
                <td>${mark1}</td>
                <td>${mark2}</td>
                <td>${mark3}</td>
                <td>${total}</td>
                <td>${average.toFixed(2)}</td>
                <td>${grade}</td>
            </tr>
        `;
    }
}
