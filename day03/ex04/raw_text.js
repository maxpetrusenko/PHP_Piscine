//get HTML from DOM (not really HTML from the server but an interrupted one - the plus is that it is immediate to fetch).
(function hello(){
    "use strict";
  
    var d = document.createElement("div");
    d.style.cssText = "max-width:500px; max-height:200px; background-color:rgba(223,223,223,.7); border:3px solid rgba(0,0,0,.5); padding:5px; margin:10px; overflow-x:hidden; overflow-y:auto; word-break:break-word; font-family:'Courier New',Consolas,Lucida Console,monospace,sans-serif; text-shadow:.3px .3px rgba(0,0,0,.2),-0.3px -0.3px rgba(0,0,0,.2); border-radius:5px; box-shadow:1px 1px 5px rgba(0,0,0,.3),-1px -1px 5px rgba(0,0,0,.3)";
    d.appendChild(document.createTextNode(document.querySelector('html').innerHTML));
    document.querySelector('body').appendChild(d);
  }());