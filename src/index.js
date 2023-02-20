import "./style.css";
import projectIcon from "./images/format.svg";
import deleteIcon from "./images/delete.svg";
import editIcon from "./images/edit.svg";
import { isToday, isThisWeek, parseISO } from "date-fns";

let myProjects = [];

const project = (title) => {
  let _title = title;
  let tasks = [];
  return {
    _title,
    tasks,
    addTask(task) {
      tasks.push(task);
    },
    removeTask(index) {
      tasks.splice(index, 1);
    },
  };
};

const task = (title, description, date, priority, projectTitle) => {
  let _title = title;
  let _description = description;
  let _date = date;
  let _priority = priority;
  let _project = projectTitle;
  return {
    _title,
    _description,
    _date,
    _priority,
    _project,
  };
};

const inbox = project("Inbox");
myProjects.push(inbox);

const taskTitle = document.getElementById("taskTitle");
const taskDescription = document.getElementById("taskDescription");
const taskDate = document.getElementById("taskDate");
const taskPriority = document.getElementById("taskPriority");
const taskProject = document.getElementById("taskProject");
const plus = document.getElementById("plus_button");
const close = document.getElementById("close");
const addProject = document.getElementById("addProject");
const closeProject = document.getElementById("closeProject");
const projectName = document.getElementById("projectName");
const submitProject = document.getElementById("submitProject");
const submitTask = document.getElementById("submit");
const titleInfo = document.getElementById("titleInfo");
const descriptionInfo = document.getElementById("descriptionInfo");
const dateInfo = document.getElementById("dateInfo");
const priorityInfo = document.getElementById("priorityInfo");
const projectInfo = document.getElementById("projectInfo");
const todayButton = document.getElementById("today");
const weekButton = document.getElementById("week");

const closeInfo = document.getElementById("closeTaskInfo");

const refreshForm = () => {
  taskTitle.value = taskTitle.defaultValue;
  taskDescription.value = taskDescription.defaultValue;
  taskDate.value = taskDate.defaultValue;
  taskPriority.value = taskPriority.defaultValue;
  taskProject.value = taskProject.defaultValue;
};

function openForm() {
  document.getElementById("addPopup").style.display = "block";
}

function closeForm() {
  document.getElementById("addPopup").style.display = "none";
}

function openProjectForm() {
  document.getElementById("addProjectPopup").style.display = "block";
}

function closeProjectForm() {
  document.getElementById("addProjectPopup").style.display = "none";
}

function openTaskInfo() {
  document.getElementById("taskModal").style.display = "block";
}

function closeTaskInfo() {
  document.getElementById("taskModal").style.display = "none";
}

plus.onclick = () => {
  openForm();
  displayProjectOptions();
};
close.onclick = () => {
  refreshForm();
  closeForm();
};

submitTask.onclick = (e) => {
  e.preventDefault();
  const newTask = task(
    taskTitle.value,
    taskDescription.value,
    taskDate.value,
    taskPriority.value,
    taskProject.value
  );
  const projectIndex =
    taskProject.options[taskProject.selectedIndex].getAttribute("index");
  myProjects[projectIndex].addTask(newTask);
  console.log(projectIndex);
  console.log(myProjects);
  closeForm();
  refreshForm();
};

addProject.onclick = openProjectForm;
closeProject.onclick = closeProjectForm;

submitProject.onclick = (e) => {
  if (projectName.value.length > 0) {
    e.preventDefault();
    const newProject = project(projectName.value);
    myProjects.push(newProject);
    projectName.value = projectName.defaultValue;
    closeProjectForm();
    displayProjects();
  }
};

closeInfo.onclick = closeTaskInfo;

window.onclick = function (event) {
  let modal = document.getElementById("addPopup");
  let modalProject = document.getElementById("addProjectPopup");
  let modalInfo = document.getElementById("taskModal");
  if (event.target == modal) {
    refreshForm();
    closeForm();
  } else if (event.target == modalProject) {
    closeProjectForm();
  } else if (event.target == modalInfo) {
    closeTaskInfo();
  }
};

const createProjectIcon = () => {
  const myProjectIcon = new Image();
  myProjectIcon.src = projectIcon;
  myProjectIcon.classList.add("icon");
  return myProjectIcon;
};

const createDeleteIcon = () => {
  const myDeleteIcon = new Image();
  myDeleteIcon.src = deleteIcon;
  myDeleteIcon.classList.add("icon");
  return myDeleteIcon;
};

const createEditIcon = () => {
  const myEditIcon = new Image();
  myEditIcon.src = editIcon;
  myEditIcon.classList.add("icon");
  return myEditIcon;
};

const displayProjects = () => {
  const projects = document.getElementById("projects");
  while (projects.hasChildNodes()) {
    projects.removeChild(projects.firstChild);
  }

  myProjects.forEach((element, index) => {
    let project = document.createElement("div");
    project.classList.add("project");
    project.classList.add("tab_button");
    project.setAttribute("index", index);
    project.style.display = "grid";
    const projectIndex = project.getAttribute("index");

    let title = document.createElement("div");
    title.classList.add("projectTitle");
    title.innerText = element._title;

    let remove = document.createElement("button");
    remove.classList.add("removeProject");
    remove.appendChild(createDeleteIcon());
    remove.onclick = () => {
      myProjects.splice(projectIndex, 1);
      displayProjects();
    };

    project.appendChild(createProjectIcon());
    project.appendChild(title);
    project.appendChild(remove);

    projects.appendChild(project);

    project.addEventListener("click", () => {
      currentProjectIndex = projectIndex;
      displayTasks();
    });
  });
};

const displayProjectOptions = () => {
  const projectOption = document.getElementById("taskProject");
  while (projectOption.hasChildNodes()) {
    projectOption.removeChild(projectOption.firstChild);
  }

  myProjects.forEach((element, index) => {
    let option = document.createElement("option");
    option.classList.add("projectOption");
    option.setAttribute("index", index);
    option.value = element._title;
    option.innerText = element._title;

    projectOption.appendChild(option);
  });
};

let currentProjectIndex = 0;

const displayTasks = () => {
  const contentBox = document.getElementById("content");
  while (contentBox.hasChildNodes()) {
    contentBox.removeChild(contentBox.firstChild);
  }

  myProjects[currentProjectIndex].tasks.forEach((element, index) => {
    const task = document.createElement("div");
    task.classList.add("task");
    task.style.display = "flex";
    task.setAttribute("index", index);

    const firstBox = document.createElement("div");
    firstBox.classList.add("firstBox");
    firstBox.style.display = "flex";
    task.appendChild(firstBox);

    const checkBox = document.createElement("div");
    checkBox.classList.add("checkBox");
    firstBox.appendChild(checkBox);

    const checkMark = document.createElement("input");
    checkMark.type = "checkBox";
    checkMark.classList.add("checkMark");
    checkBox.appendChild(checkMark);

    const titleBox = document.createElement("div");
    titleBox.innerText = element._title;
    titleBox.classList.add("titleBox");
    firstBox.appendChild(titleBox);

    checkMark.onclick = () => {
      if (checkMark.checked == true) {
        titleBox.style.textDecoration = "line-through";
      } else {
        titleBox.style.textDecoration = "none";
      }
    };

    const secondBox = document.createElement("div");
    secondBox.classList.add("secondBox");
    secondBox.style.display = "flex";
    task.appendChild(secondBox);

    const detailsButton = document.createElement("button");
    detailsButton.classList.add("detailsButton");
    detailsButton.innerText = "Details";
    secondBox.appendChild(detailsButton);

    detailsButton.onclick = () => {
      titleInfo.innerText = element._title;
      descriptionInfo.innerText = element._description;
      dateInfo.innerText = element._date;
      priorityInfo.innerText = element._priority;
      projectInfo.innerText = element._project;
      openTaskInfo();
    };

    const dateBox = document.createElement("div");
    dateBox.classList.add("dateBox");
    dateBox.innerText = element._date;
    secondBox.appendChild(dateBox);

    const editButton = document.createElement("button");
    editButton.classList.add("editButton");
    editButton.appendChild(createEditIcon());
    secondBox.appendChild(editButton);

    const removeTask = document.createElement("button");
    removeTask.classList.add("removeTask");
    removeTask.appendChild(createDeleteIcon());
    secondBox.appendChild(removeTask);

    removeTask.onclick = () => {
      myProjects[currentProjectIndex].tasks.splice(index, 1);
      displayTasks();
    };

    contentBox.appendChild(task);
  });
};
const displayToday = () => {
  const contentBox = document.getElementById("content");
  while (contentBox.hasChildNodes()) {
    contentBox.removeChild(contentBox.firstChild);
  }
  myProjects.forEach((element, index) => {
    element.tasks.forEach((element, index) => {
      if (isToday(parseISO(element._date)) == false) {
        return;
      }
      const task = document.createElement("div");
      task.classList.add("task");
      task.style.display = "flex";
      task.setAttribute("index", index);

      const firstBox = document.createElement("div");
      firstBox.classList.add("firstBox");
      firstBox.style.display = "flex";
      task.appendChild(firstBox);

      const checkBox = document.createElement("div");
      checkBox.classList.add("checkBox");
      firstBox.appendChild(checkBox);

      const checkMark = document.createElement("input");
      checkMark.type = "checkBox";
      checkMark.classList.add("checkMark");
      checkBox.appendChild(checkMark);

      const titleBox = document.createElement("div");
      titleBox.innerText = element._title;
      titleBox.classList.add("titleBox");
      firstBox.appendChild(titleBox);

      checkMark.onclick = () => {
        if (checkMark.checked == true) {
          titleBox.style.textDecoration = "line-through";
        } else {
          titleBox.style.textDecoration = "none";
        }
      };

      const secondBox = document.createElement("div");
      secondBox.classList.add("secondBox");
      secondBox.style.display = "flex";
      task.appendChild(secondBox);

      const detailsButton = document.createElement("button");
      detailsButton.classList.add("detailsButton");
      detailsButton.innerText = "Details";
      secondBox.appendChild(detailsButton);

      detailsButton.onclick = () => {
        titleInfo.innerText = element._title;
        descriptionInfo.innerText = element._description;
        dateInfo.innerText = element._date;
        priorityInfo.innerText = element._priority;
        projectInfo.innerText = element._project;
        openTaskInfo();
      };

      const dateBox = document.createElement("div");
      dateBox.classList.add("dateBox");
      dateBox.innerText = element._date;
      secondBox.appendChild(dateBox);

      const editButton = document.createElement("button");
      editButton.classList.add("editButton");
      editButton.appendChild(createEditIcon());
      secondBox.appendChild(editButton);

      const removeTask = document.createElement("button");
      removeTask.classList.add("removeTask");
      removeTask.appendChild(createDeleteIcon());
      secondBox.appendChild(removeTask);

      removeTask.onclick = () => {
        myProjects[currentProjectIndex].tasks.splice(index, 1);
        displayTasks();
      };

      contentBox.appendChild(task);
    });
  });
};
todayButton.onclick = () => {
  displayToday();
};

const displayWeek = () => {
  const contentBox = document.getElementById("content");
  while (contentBox.hasChildNodes()) {
    contentBox.removeChild(contentBox.firstChild);
  }
  myProjects.forEach((element, index) => {
    element.tasks.forEach((element, index) => {
      if (isThisWeek(parseISO(element._date)) == false) {
        return;
      }
      const task = document.createElement("div");
      task.classList.add("task");
      task.style.display = "flex";
      task.setAttribute("index", index);

      const firstBox = document.createElement("div");
      firstBox.classList.add("firstBox");
      firstBox.style.display = "flex";
      task.appendChild(firstBox);

      const checkBox = document.createElement("div");
      checkBox.classList.add("checkBox");
      firstBox.appendChild(checkBox);

      const checkMark = document.createElement("input");
      checkMark.type = "checkBox";
      checkMark.classList.add("checkMark");
      checkBox.appendChild(checkMark);

      const titleBox = document.createElement("div");
      titleBox.innerText = element._title;
      titleBox.classList.add("titleBox");
      firstBox.appendChild(titleBox);

      checkMark.onclick = () => {
        if (checkMark.checked == true) {
          titleBox.style.textDecoration = "line-through";
        } else {
          titleBox.style.textDecoration = "none";
        }
      };

      const secondBox = document.createElement("div");
      secondBox.classList.add("secondBox");
      secondBox.style.display = "flex";
      task.appendChild(secondBox);

      const detailsButton = document.createElement("button");
      detailsButton.classList.add("detailsButton");
      detailsButton.innerText = "Details";
      secondBox.appendChild(detailsButton);

      detailsButton.onclick = () => {
        titleInfo.innerText = element._title;
        descriptionInfo.innerText = element._description;
        dateInfo.innerText = element._date;
        priorityInfo.innerText = element._priority;
        projectInfo.innerText = element._project;
        openTaskInfo();
      };

      const dateBox = document.createElement("div");
      dateBox.classList.add("dateBox");
      dateBox.innerText = element._date;
      secondBox.appendChild(dateBox);

      const editButton = document.createElement("button");
      editButton.classList.add("editButton");
      editButton.appendChild(createEditIcon());
      secondBox.appendChild(editButton);

      const removeTask = document.createElement("button");
      removeTask.classList.add("removeTask");
      removeTask.appendChild(createDeleteIcon());
      secondBox.appendChild(removeTask);

      removeTask.onclick = () => {
        myProjects[currentProjectIndex].tasks.splice(index, 1);
        displayTasks();
      };

      contentBox.appendChild(task);
    });
  });
};

weekButton.onclick = () => {
  displayWeek();
};

const Books = project("Books");
myProjects.push(Books);

const read = task("read", "read every night", "2023-02-17", "High", "Books");
Books.addTask(read);
displayProjects();
