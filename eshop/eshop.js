$('document').ready(function(){
	loadGoods();
});

function loadGoods(){
//načítaní zboží
$.getJSON('goods.json', function (data) {
	console.log(data);
})
}