var goods_id = $.getQueryString('goods_id');

$.ajax({
	'url': 'http://lc.shudong.wang/api_goods.php?goods_id='+goods_id,
	'type': 'GET',
	'dataType': 'json',
	'success': function(response) {
		var obj = response.data[0];
		console.log(obj);
		var oDiv = document.createElement('div');
		oDiv.className = "details";
		var oImg = document.createElement('img');
		oImg.src = obj.goods_thumb;
		oDiv.appendChild(oImg);

		var oP = document.createElement('p');
		oP.innerText = obj.goods_desc;
		oDiv.appendChild(oP);

		

		
		document.body.appendChild(oDiv);
	}
})