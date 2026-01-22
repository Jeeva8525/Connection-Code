let xmlDoc;
document
  .getElementById("fileInput")
  .addEventListener("change", async function (event) {
    const file = event.target.files[0];
    console.log(file);

    if (!file) {
      console.log("File not found!");
      return;
    }

    const reader = new FileReader();
    reader.onload = function (eve) {
      const xmlText = eve.target.result;
      // console.log(xmlText)

      const parser = new DOMParser();
      xmlDoc = parser.parseFromString(xmlText, "text/xml");
      // console.log(xmlDoc)
      callIt(xmlDoc);
    };

    reader.readAsText(file);
  });

function callIt(xmlDoc) {
  const displayTable = document.getElementById("displayTable");

  const students = xmlDoc.getElementsByTagName("student");

  for (let student of students) {
    const name = student.getElementsByTagName("name")[0].textContent;
    const rollNo = student.getElementsByTagName("rollNo")[0].textContent;
    const percentage = student.getElementsByTagName("percentage")[0].textContent;
    const presentTag = document.createElement("input");
    presentTag.type = "checkbox";

    displayTable.innerHTML += `
            <tr>
				<td>${rollNo}</td>
				<td>${name}</td>
                <td><input type='checkbox' class='attendanceInputTags'></td>
				<td>${percentage}%</td>
            </tr>
        `;
  }
}

function exportAsJSON() {
  const Attendance = {};
  const regularStudents = [];

  const students = xmlDoc.getElementsByTagName("student");

  const PresentList = document.getElementsByClassName("attendanceInputTags");

  for (let x = 0; x < students.length; x++) {
    const name = students[x].getElementsByTagName("name")[0].textContent;
    const rollNo = students[x].getElementsByTagName("rollNo")[0].textContent;

    const isPresent = PresentList[x].checked;
    const percentage =
      students[x].getElementsByTagName("percentage")[0].textContent;

    regularStudents.push({
      name,
      rollNo,
      isPresent,
      percentage,
    });
  }

  Attendance.regular_students = regularStudents;

  const stringJSON = JSON.stringify(Attendance, null, 2);
  const blob = new Blob([stringJSON], { type: "application/json" });
  const path = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = path;
  link.download = "student JSON";
  link.click();
}
