var navUl = document.getElementById('nav-ul');
var goodsUl = document.getElementById('goods-ul');
$.ajax({
	"url": 'http://lc.shudong.wang/api_cat.php',
  	"type": "GET",
  	"dataType": "json",
  	"success": function(response){
  		var oNavLiTemplateStr = document.getElementById('nav-li-template').innerHTML;
		   console.log(response);
   
		for (var i = 0; i < response.data.length; i++) {
      	var obj = response.data[i];
      	 // if (i === 4 || i === 9) {
     	 if (i % 3 === 2) {
       		 obj.className = 'red';
      		}
		// obj.cat_name = '(' + obj.cat_name + ')';
     	 navUl.innerHTML += $.compile(oNavLiTemplateStr, obj);

	   
	      
  		}
	},
	 "error": function(message) {
    	console.log(message);
	}
});


var searchBtn = document.getElementById('search-btn');
if(searchBtn) {
	searchBtn.addEventListener('click', function() {
		console.log('click');
		var searchText = document.getElementById('search-text').value;
		console.log(searchText);
		location.href = 'search.html?search_text=' + searchText;
	});
}
