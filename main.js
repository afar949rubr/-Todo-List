const addBtn = document.getElementById("add-button")
const addProject = document.getElementById("enter-input")
const formProjectResult = document.getElementById("new-project-value")
let newProjectList = document.getElementById("new-project")


function judgeInputBox(addProject) {
  const value = addProject.value
  if (value === '') {
    return false
  } else {
    return true
  }
}

function addNewProject() {
  if (judgeInputBox(addProject)) {
    const formProjectVaule = addProject.value
    const newDom = document.createElement('li')
    let a = 0 
    newDom.innerHTML = '<div>' + formProjectVaule + '</div>' + '<button id=delete-button' + a + '>刪除</button>'
    newProjectList.appendChild(newDom)
    a++
    deleteAddProject(newProjectList)
  } else {
    alert("輸入欄位不得為空")
  }
}

function deleteAddProject() {
  let deleteBtn = document.getElementById("delete-button")
  newProjectList.removeChild(deleteBtn)
}

addBtn.addEventListener("click",addNewProject)

