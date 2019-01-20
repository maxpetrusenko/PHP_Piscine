// function showSource(){;
//   var source = "<html>";
//   source += document.getElementsByTagName('html')[0].innerHTML;
//   source += "</html>";
//   //now we need to escape the html special chars, javascript has escape
//   //but this does not do what we want
//   source = source.replace(/</g, "&lt;").replace(/>/g, "&gt;");
//   //now we add <pre> tags to preserve whitespace
//   source = "<pre>"+source+"</pre>";
//   //now open the window and set the source as the content
//   sourceWindow = window.open('','Source of page','height=800,width=800,scrollbars=1,resizable=1');
//   sourceWindow.document.write(source);
//   sourceWindow.document.close(); //close the document for writing, not the window
//   //give source window focus
//   if(window.focus) sourceWindow.focus();
// }

//this works
(function(){
  var xhr = new XMLHttpRequest();
  xhr.responseType = "text";
  xhr.onreadystatechange = function(e){
    var 
      xhr = e.target
      , d = document.createElement("div")
      ;

    if(xhr.DONE !== xhr.readyState) return;

    d.style.cssText = "max-width:500px; max-height:200px; background-color:rgba(223,223,223,.7); border:3px solid rgba(0,0,0,.5); padding:5px; margin:10px; overflow-x:hidden; overflow-y:auto; word-break:break-word; font-family:'Courier New',Consolas,Lucida Console,monospace,sans-serif; text-shadow:.3px .3px rgba(0,0,0,.2),-0.3px -0.3px rgba(0,0,0,.2); border-radius:5px; box-shadow:1px 1px 5px rgba(0,0,0,.3),-1px -1px 5px rgba(0,0,0,.3)";

    d.appendChild(document.createTextNode(xhr.responseText));
    document.querySelector('body').appendChild(d);
  }
  xhr.open("GET", String(window.location.href), true);
  xhr.send();
}());