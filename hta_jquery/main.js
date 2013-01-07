require( ["jquery"], function($) {
		$(function(){
			window.resizeTo(500,500);
			
			//隐藏loading界面
			$('#loading').fadeOut("slow");
			
			//显示主界面
			$('#main').fadeIn("fast");

			//动态添加按钮并绑定事件
			test_btn = $('<input type=button value=TEST />').css({
				width	: "100px",
				clear	: "both",
				padding	: "10px",
				margin	: "20px",
				display	: "none"
			}).bind('click',function(){ alert('TEST clicked!') });
			$('#main').append( test_btn );
			$(test_btn).fadeIn("slow");
			
			//动态添加输入框
			test_text = $('<input type=text value=TEST />').css({
				width	: "200px",
				clear	: "both",
				height	: "36px",
				margin	: "20px",
				display	: "none"
			}).bind('click',function(event){ $(event.target).val('textbox focus in.'); });
			$('#main').append( test_text );
			$(test_text).fadeIn("slow");
			
			//退出按钮
			exit_btn =$('<input type=button value=EXIT />').css({
				width	: "100px",
				clear	: "both",
				padding	: "10px",
				margin	: "20px",
				backgroundColor: "red",
				color	: "white",
				display	: "none"
			}).bind('click',function(){
				if( confirm(' EXIT? ') )
				{
					window.close();
				}
			});
			$('#main').append( exit_btn );
			$(exit_btn).fadeIn("slow");	
		});
	});