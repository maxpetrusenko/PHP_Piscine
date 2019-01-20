var n = 0;
localStorage.setItem("n", 0);

function todo_del(who) 
{
	if (confirm("delete ?"))
	{
		who.parentNode.removeChild(who);
		$.removeCookie('the_cookie', { path: '/' });
	}
}


$('#new').click(function() 
		{
			var todo = prompt("New Todo", "");

			if (todo != null) {
				localStorage.setItem("n", (parseInt(n) + 1));
				n = localStorage.getItem("n");
				$('#ft_list').prepend("<div class='todo_div" + n + "' id='" + n + "' onclick=todo_del(this)>" + todo + "</div>");
				var lol = $('#' + n);
				console.log(lol);
				console.log(lol.innerHTML);
			}
		})