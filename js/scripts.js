$(document).ready (function() {


    var currentList;

    $("form#list-form").submit(function(event) {
        event.preventDefault();
        listInput = $("input#list-input").val();
        var list = {name: listInput, tasks: []}
        $(".list-of-lists").append('<li class="list-item">' + list.name + '</li>');
        // masterLibrary[listInput] = [];

        $("input#list-input").val("");

        $(".list-item").last().click(function() {
            $('.task-input').show();
            $("#current-list-name").text(list.name);
            $("#current-tasks").text("");
            currentList = list
            currentList.tasks.forEach(function(task) {
            $("#current-tasks").append('<li>' + '<input type="checkbox" >' + task + '</li>');
            });
        });
    });

    $("form#task-form").submit(function(event) {
        event.preventDefault();
        var task = $("input#task-input").val();
        $("#current-tasks").append('<li>' + '<input type="checkbox">' + task + '</li>');
        currentList.tasks.push(task);
        $("input#task-input").val("");
        });

});












// $(document).ready (function () {
//     $("form#new-task").submit (function () {
//         var inputTaskName = $("input#new-task-name").val();
//         var inputTaskOwner = $("input#new-task-owner").val();
//         var inputCompleteMonth = $("select#new-complete-month").val();
//         var inputCompleteDay = $("select#new-complete-day").val();
//         var inputPriority = $("select#new-priority").val();
//         var isTaskDone = false;
//         var taskText = "No";
//         var newTask = {taskName: inputTaskName, taskOwner: inputTaskOwner,
//                     taskCompleteMonth: inputCompleteMonth,
//                     taskCompleteDay: inputCompleteDay,
//                     taskPriority: inputPriority,
//                     taskDone: isTaskDone};

//         $("ul#tasks").append("<li><input type='checkbox' id='task-done' value='0'><span class='task'>" + newTask.taskName + "</span></li>");

//         $("input#task-done").click(function() {
//             if ($(this).is(":checked")) { // the checkbox was checked
//                 newTask.taskDone = true;
//             } else { // the checkbox was unchecked
//                 newTask.taskDone = false;
//             };
//             $(".task-complete").text(taskText);
//         });

//         $("input#new-task-name").val("");
//         $("input#new-task-owner").val("");
//         $("select#new-complete-month").val("July");
//         $("select#new-complete-day").val("16");

//         $(".task").last().click(function () {
//             $("#show-task").show();
//             $("#show-task h2").text(newTask.taskName);
//             $(".task-name").text(newTask.taskName);
//             $(".task-owner").text(newTask.taskOwner);
//             $(".task-complete-date").text(newTask.taskCompleteMonth + " " +
//                                           newTask.taskCompleteDay);
//             $(".task-priority").text(newTask.taskPriority);
//             taskText = "No";
//             if (newTask.taskDone) {
//                 taskText = "Yes"
//             } else {
//                 taskText = "No";
//             };
//             $(".task-complete").text(taskText);

//         });

//     event.preventDefault();

//     });
// });
