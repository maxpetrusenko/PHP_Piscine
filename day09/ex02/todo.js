// function add() {
//     var answer = prompt("what you want to add?");
//     if (answer != "") {
//         var node = document.createElement('LI')
//         var text = document.createTextNode(answer);
//         node.appendChild(text)
//         document.getElementById('todo').insertAdjacentElement('afterbegin',node)
//     }
//     var listItems = document.getElementsByTagName("li"); // or document.querySelectorAll("li"); 
//     for (var i = 0; i < listItems.length; i++) {
//         listItems[i].onclick = function() {
//             if(confirm("are you sure you want to delete this record?"))
//                 this.parentNode.removeChild(this);
//         }
// 	}

// }


var toDoList = {
    //To Do List
    toDos: [],
    
    // To Do List Methods
    addToDos: function(toDoText){
      this.toDos.unshift(toDoText);
    },

    deleteToDos: function(position){
      this.toDos.splice(position, 1);
    },

    saveCookie: function(){
      document.cookie = "toDoList=" + this.toDos.join();
    },

    loadCookie: function(){
      var cookie = "; " + document.cookie;
      var parts = cookie.split("; toDoList=");
      if (parts.length == 2) {
        str = parts.pop().split(";").shift();
        arr = str.split(",");
        if (arr[0] != "") {
          this.toDos = arr;
        }
      }
    }
  };
  
  //Display list
  var view = {
    displayToDos: function(){
      var ft_list = document.querySelector("#ft_list");
      ft_list.innerHTML = '';
      for(var i = 0; i < toDoList.toDos.length; i++){
        var toDo = toDoList.toDos[i];
        if (toDo != "") {
        var toDosLi = document.createElement("div");
        toDosLi.setAttribute("class", "toDo");
        toDosLi.setAttribute("id", `${i}`);
        toDosLi.setAttribute("onclick", "handlers.deleteToDo(this.id)");
        toDosLi.textContent = toDo;
        ft_list.appendChild(toDosLi);
        }
      }
    }
  }

  //Event handlers
  var handlers = {

    onLoad: function(){
      toDoList.loadCookie();
    },
    
    addToDo: function(){
      var task = prompt("What's the task you want to add?");
      if (task != '' && task != null) {
        toDoList.addToDos(task);
        view.displayToDos();
        toDoList.saveCookie();
      }
    },
    
    deleteToDo: function(id){
      if (confirm("are you sure you want to delete task?")) {
        var toDoPosition = Number(id);
        toDoList.deleteToDos(toDoPosition);
        view.displayToDos();
        toDoList.saveCookie();
      }
    }
  }

  //window onload
  window.onload = function(event) {
    handlers.onLoad();
    view.displayToDos();
  }