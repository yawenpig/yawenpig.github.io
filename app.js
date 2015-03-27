$(function(){

	var currText=' ';
	var operator=' ';
	//用來switch
	var currAns=' ';
	//存currText

	function render(){
		$('#message').text(currText);
	};

	$('#button1').on('click',function(){
		currText=currText+'1';
		render();
	});

	$('#button2').on('click',function(){
		currText=currText+'2';
		render();
	});

	$('#button3').on('click',function(){
		currText=currText+'3';
		render();
	});

	$('#button4').on('click',function(){
		currText=currText+'4';
		render();
	});

	$('#button5').on('click',function(){
		currText=currText+'5';
		render();
	});

	$('#button6').on('click',function(){
		currText=currText+'6';
		render();
	});

	$('#button7').on('click',function(){
		currText=currText+'7';
		render();
	});

	$('#button8').on('click',function(){
		currText=currText+'8';
		render();
	});

	$('#button9').on('click',function(){
		currText=currText+'9';
		render();
	});

	$('#button0').on('click',function(){
		currText=currText+'0';
		render();
	});

	$('#buttonclean').on('click',function(){
		currText=0;
		render();
		currText=' ';
	});

	$('#buttonplus').on('click',function(){
		currAns=currText;
		currText=' ';
		operator=1;
	});

	$('#buttonminus').on('click',function(){
		currAns=currText;
		currText=' ';
		operator=2;
	});

	$('#buttonmultiply').on('click',function(){
		currAns=currText;
		currText=' ';
		operator=3;
	});

	$('#buttondivide').on('click',function(){
		currAns=currText;
		currText=' ';
		operator=4;
	});

	function caculate (temp1,temp2) {
		var answer=' ';
		//最後算出來的結果
		temp1=parseFloat(temp1);
		temp2=parseFloat(temp2);

		switch(operator){
			case 1:
			answer=temp1+temp2;
			break;

			case 2:
			answer=temp1-temp2;
			break;

			case 3:
			answer=temp1*temp2;
			break;

			case 4:
			answer=temp1/temp2;
			break;

			default:
			return;
			break;
		}

		currText=answer;
		currAns=' ';
		return answer;
	}

	$('#buttonequal').on('click',function(){
		$('#message').text(caculate(currAns,currText,operator));
	});
	//等於鍵
});	