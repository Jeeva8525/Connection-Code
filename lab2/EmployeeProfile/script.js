let employees = [
    {
        name : 'Tom Cruise',
        position : 'Software Engineer',
        age : '30',
        department : 'Technology Department',
        imageUrl : 'https://m.media-amazon.com/images/I/51BMaDP4L2L._AC_UF894,1000_QL80_.jpg',
        description : 'Tom Cruise is a 30-year-old Software Engineer working in the Technology Department'
    }
]


const employeeDetails = document.querySelector('.employee-details');
const imageContainer = document.querySelector('.image-container');

const descriptionElt = document.querySelector('.description');
for (const employee of employees) {

    imageContainer.innerHTML = `
        <img src='${employee.imageUrl}' style="width:150px; height:auto">
    `
    //change this ---
    console.log(employee)
    employeeDetails.innerHTML = `
        <p>name : ${employee.name}</p>
        <p>Position : ${employee.position}</p>
        <p>Age : ${employee.age}</p>
        <p>Department : ${employee.department}</p>
    `
    descriptionElt.innerHTML = `
        <p>${employee.description}</p>
    ` 
}
