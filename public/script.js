$(document).ready(async function(){
    const students = await $.getJSON('/students/api')
    console.log(students)
    listStudents(students)

    $(`#codeField`).focus();

    $(`#inputForm`).on(`submit`, function(e){
        e.preventDefault();
        createStudent()
    })
})

function listStudents(students){
    for (let student of students){
        listStudent(student)
    }
}

function listStudent(student){
    let elem = $(`
    
    <div class="card" style="width: 18rem; margin-top: 1rem;">
    <div class="card-body">
        <h5 class="card-title">${student.first_name} ${student.last_name}</h5>
    </div>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">${student.code}</li>
        <li class="list-group-item">${student.mail}</li>
        <li class="list-group-item">${student.major}</li>
    </ul>
    </div>
    `)
    $('#student-list').prepend(elem);
    elem.data('id', student._id)

}

async function createStudent(){
    const code = $('#codeField').val();
    const first_name = $('#firstNameField').val();
    const last_name = $('#lastNameField').val();
    const mail = $('#mailField').val();
    const major = $('#majorField').val();
    const createdStudent = await $.post('students/api', {code, first_name, last_name,mail, major})
    $('#codeField').val('');
    $('#firstNameField').val('');
    $('#lastNameField').val('');
    $('#mailField').val('');
    $('#majorField').val('');
    $('#codeField').focus();

    listStudent(createdStudent);
}