let Scr = document.getElementById('Scr');
buttons = document.querySelectorAll('button');
let ScrValue = '';
for(item of buttons)
{
	item.addEventListener('click', (e)=>
	{
		buttonText = e.target.innerText;
		console.log('Button text is' , buttonText);
		if(buttonText =='C')
		{
			ScrValue = "";
			Scr.value = ScrValue;
		}
		
		else if(buttonText == '=')
		{
			Scr.value = eval(ScrValue);
		}
		
		else
		{
			ScrValue += buttonText;
			Scr.value = ScrValue; 
		}
	
	})
	
	
}