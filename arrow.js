const arrows =document.querySelectorAll(".fa-arrow-right");
const body =document.querySelector(".main");

//const parent = arrows.parentElement;
//const nextslide = parent.nextElementSibling;
		


arrows.forEach((arrow)=>{
	arrow.addEventListener("click", slider, false);
	
	function slider(){
		const input = arrow.previousElementSibling;
		//console.log(input);
		
		const parent= arrow.parentElement;
		//console.log(parent);
		
		const nextEle= parent.nextElementSibling;
		console.log(nextEle);
		if(input.type==="text" && validataUserName(input)){
			parent.classList.add("inactive");
			parent.classList.remove("active");
			nextEle.classList.add("active");
		}else if(input.type==="email" && validateEmail(input)){
			parent.classList.add("inactive");
			parent.classList.remove("active");
			nextEle.classList.add("active");
				
		}else if(input.type==="password" && validataUserName(input)){
			parent.classList.add("inactive");
			parent.classList.remove("active");
			nextEle.classList.add("active");
			
		}else{
			parent.style.animation="shakeit 0.5s ease";
		}
		
//check for animation end
		parent.addEventListener("animationend", ()=>{
			parent.style.animation="";
			
		});
		
		
		
		
	
	
//validate username 
	function validataUserName(userinput){
			if(userinput.value.length < 6){
			error("red")
				
			}else{
			error("green")
			return true;
			}
	}

	//validate email
	function validateEmail(emailinput){
		const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
		if(regex.test(emailinput.value)){
			
			error("green");
			return true
		}else{
			error("red");
			return
	}



	}





	
	//error function
function error(color){
	body.style.background=color;
	
}

}
});

