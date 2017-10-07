//console.log("afdshfsdiofshiofhiofhioafsdif");
window.onload = function(){
	var likeCount = localStorage.getItem('like');
	var loveCount = localStorage.getItem('love');
	var laughCount = localStorage.getItem('laugh');
	var cakeCount = localStorage.getItem('cake');
	var likeImage = document.getElementById('like-image');
	var loveImage = document.getElementById('love-image');
	var laughImage = document.getElementById('laugh-image');
	var cakeImage = document.getElementById('cake-image');
	var likeText = document.getElementById('like-count');
	var loveText = document.getElementById('love-count');
	var laughText = document.getElementById('laugh-count');
	var cakeText = document.getElementById('cake-count');
	var reset = document.getElementById('reset');
	likeText.innerHTML = likeCount;
	loveText.innerHTML = loveCount;
	laughText.innerHTML = laughCount;
	cakeText.innerHTML = cakeCount;
	likeImage.addEventListener('click', function(){
		likeCount++
		localStorage.setItem('like', likeCount);
		likeText.innerHTML = likeCount;
	});
	loveImage.addEventListener('click', function(){
		loveCount++
		localStorage.setItem('love', loveCount);
		loveText.innerHTML = loveCount;
	});
	laughImage.addEventListener('click', function(){
		laughCount++
		localStorage.setItem('laugh', laughCount);
		laughText.innerHTML = laughCount;
	});
	cakeImage.addEventListener('click', function(){
		cakeCount++
		localStorage.setItem('cake', cakeCount);
		cakeText.innerHTML = cakeCount;
	});
	reset.addEventListener('click', function(){
		localStorage.clear();
		likeCount = 0;
		loveCount = 0;
		laughCount = 0;
		cakeCount = 0;
		likeText.innerHTML = likeCount;
		loveText.innerHTML = loveCount;
		laughText.innerHTML = laughCount;
		cakeText.innerHTML = cakeCount;
	});
}