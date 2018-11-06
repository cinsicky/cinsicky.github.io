// JavaScript Document
$(document).ready(function(){
	$("#quiz").on('submit', function(event){		//I wait that the user submit the "quiz" form
		event.preventDefault();
		var total_points = 0;		//Initial value for total_points
		
		var answer1 = $("#question1 input:checked").val();		//This can be true or false	(or None)
		if (answer1==="true"){		// I check if the answer is true
			$("#question1").append("<div style='color:green;font-size:18px;font-family:arial'>Correct!</div>");
			total_points +=1;		// I increase the value of total_points
			}
		else{
			$("#question1").append("<div style='color:red; font-size:18px;font-family:arial'>Wrong! Maybe you need to review the page again</div>");
			}
		
		var answer2 = $("#question2 input:checked").val();		//This can be true or false	(or None)	
		if (answer2==="true"){		// I check if the answer is true
			$("#question2").append("<div style='color:green;font-size:18px;font-family:arial'>Correct!</div>");
			total_points +=1;		// I increase the value of total_points
			}
		else{
			$("#question2").append("<div style='color:red;font-size:18px;font-family:arial;'>Wrong! Maybe you need to review the page again</div>");
			}
		
		$("#quiz").append("<div style='color:blue;font-size:18px;font-family:arial;padding:20px 0px;'>You answered correctly to " + 
		total_points + " questions</div>");		// I write how many correct answers the user selected
		
		});
	});