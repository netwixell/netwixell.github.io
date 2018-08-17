var conf={
	geo:{
		"method": "point",
		"token" : '76793d5test0cf77',///
	},
	carry:{
		"method": "carry",
		"type_company" : 0,
		"code": "194300",///
		"token" : "76793d5test0cf77",///
		//"weight" : 4.2,///
		//"x" : 14,///
		//"y" : 32,///
		//"z" : 20,///
	},
	delivery:{
		"method": "delivery",
		"type_company" : 0,
		"city" : "Москва",///
		"token" : "76793d5test0cf77",///
		"area" : "Москва",///
		"address" : "Москва, Тверская 6",///
		//"x" : 10,///
		//"y" : 10,///
		//"z" : 10,///
	}
};
var mod={
	geo:function(json){
		var answer = document.getElementsByClassName('result')[0];
		var send_data = null;
		var xhr = new XMLHttpRequest();
		xhr.open("POST", 'https://axiomus.ru/calc/api_geo.php', true);
		xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		xhr.timeout = 30000;
		for(key in json) {
	 	 	if(send_data === null)
				send_data = key+'='+json[key];
			else
				send_data = send_data+'&'+key+'='+json[key];
		}	
		xhr.send(send_data); 					
		xhr.onreadystatechange = function(){
			if(xhr.readyState === 4 && xhr.status === 200){			
				var arr=JSON.parse(xhr.responseText);
				arr=arr.pvz;
				for (var i = 0; i < arr.length; i++) {
					var el=document.createElement('div');
					el.innerHTML='<p>'+arr[i].company+'</p>'+'<p>'+arr[i].name+'</p>'+'<p>'+arr[i].address+'</p>'+'<p>'+arr[i].schedule+'</p>'+'<p>'+arr[i].dist+'</p>'+'<p>'+arr[i].distance+'</p>';
					answer.appendChild(el);
				}
			}
		};
		xhr.ontimeout = function(){	
			answer.innerHTML = 'Время ожидания (30 секунд) истекло :(';
		};
		xhr.onerror = function(){
			answer.innerHTML = 'Ошибка отправки запроса!';
		};		
	},
	delivery:function(json){
		var answer = document.getElementsByClassName('result')[1];
		var send_data = null;
		var xhr = new XMLHttpRequest();
		xhr.open("POST", 'https://axiomus.ru/calc/calc.php', true);
		xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		xhr.timeout = 30000;
		for(key in json) {
			if(send_data === null){
				send_data = key+'='+json[key];
			}else{
				send_data = send_data+'&'+key+'='+json[key];
			}
		}	
		xhr.send(send_data); 					
		xhr.onreadystatechange = function(){
			if(xhr.readyState === 4 && xhr.status === 200){		
				answer.innerHTML = xhr.responseText;
			}else{
				answer.innerHTML = 'Ошибка запроса!';
			}
		};
		xhr.ontimeout = function(){	
			answer.innerHTML = 'Время ожидания (30 секунд) истекло :(';
		};
		xhr.onerror = function(){
			answer.innerHTML = 'Ошибка отправки запроса!';
		};		
	},
	carry:function(json){
		var answer = document.getElementsByClassName('result')[2];
		var send_data = null;
		var xhr = new XMLHttpRequest();
		xhr.open("POST", 'https://axiomus.ru/calc/calc.php', true);
		xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		xhr.timeout = 30000;
		for(key in json) {
	 	 	if(send_data === null){
				send_data = key+'='+json[key];
			}else{
				send_data = send_data+'&'+key+'='+json[key];
			}
		}	
		xhr.send(send_data); 					
		xhr.onreadystatechange = function(){
			if(xhr.readyState === 4 && xhr.status === 200){
				answer.innerHTML = xhr.responseText;
			}else{
				answer.innerHTML = 'Ошибка запроса!';
			}
		};
		xhr.ontimeout = function(){	
			answer.innerHTML = 'Время ожидания (30 секунд) истекло :(';
		};
		xhr.onerror = function(){
			answer.innerHTML = 'Ошибка отправки запроса!';
		};
	}
}