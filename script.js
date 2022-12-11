var tl = localStorage.getItem("taskList");
var taskList = [];
taskList = tl ? JSON.parse(tl) : [];

$(document).ready(() => {
  // Load tasks from local storage
  if (taskList.length > 0) {
    taskList.forEach((task) => {
      $("#tasklist").append(`
                <div class="justify-content-center flex mb-4 row listItem">
                <div class="col-lg-10 col-md-8 text-left">${task}</div>
                
                <div class="col divIcon"><button class="btn btn-outline remove"><i class="bi bi-x fa-2x"></i></button></div>
                </div>`);
    });
  }

  // Code
  $("#addtaskbtn").click(() => {
    let v = $("#addtask").val();
    if (v != "") {
      taskList.push(v);
      $("#tasklist").append(`
        <div class="justify-content-center flex mb-4 row listItem">
        <div class="col-lg-10 col-md-8 bv text-left">${v}</div>
        
        <div class="col divIcon"><button class="btn btn-outline remove"><i class="bi bi-x fa-2x"></i></button></div>
        </div>`);
      $("#addtask").val("");
        localStorage.setItem("taskList", JSON.stringify(taskList));
    }
  });

  $("#tasklist").on("click", ".remove", function () {
    let index = $(this).parent().parent().index();
    $(this).parent().parent().remove();
    taskList.splice(index, 1);
    localStorage.setItem("taskList", JSON.stringify(taskList));
  });
});
