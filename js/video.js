window.addEventListener("load", function() {
	var video = document.querySelector(".video");
	video.load();
	console.log("Good job opening the window");
	// TO DO : Initialize the video element and turn off autoplay and turn off looping
	video.autoplay = false;
	video.loop = false;
	// document.querySelector("#volume").innerHTML = slider.value + "%";
});

window.onload=function(){
	var video = document.querySelector(".video");
	document.querySelector("#play").addEventListener("click", function() {
		console.log("Play Video");
		video.play();
		// TO DO : update the volume info
		video.volume = slider.value / 100;
		document.querySelector("#volume").innerHTML = slider.value + "%";
	});

	document.querySelector("#pause").addEventListener("click", function() {
		video.pause();
	});

	document.querySelector("#slower").addEventListener("click", function() {
		var current_speed = video.playbackRate;
		video.playbackRate = current_speed * 0.9;
		console.log(video.playbackRate);
	});

	document.querySelector("#faster").addEventListener("click", function() {
		var current_speed = video.playbackRate;
		video.playbackRate = current_speed / 0.9;
		console.log(video.playbackRate);
	});

	document.querySelector("#skip").addEventListener("click", function() {
		var current_time = video.currentTime;
		if (current_time + 10 > video.duration) {
			video.currentTime = 0;
		} else {
			video.currentTime = current_time + 10;
		}
		console.log(video.currentTime);
	});

	document.querySelector("#mute").addEventListener("click", function() {
		if (video.muted) {
			document.querySelector("#mute").innerHTML = "Mute";
		} else {
			document.querySelector("#mute").innerHTML = "Unmute";
		}
		video.muted = !video.muted;
	});

	document.querySelector("#slider").addEventListener("change", function() {
		var slider = document.querySelector("#slider");
		video.volume = slider.value / 100;
		document.querySelector("#volume").innerHTML = slider.value + "%";
	});

	document.querySelector("#vintage").addEventListener("click", function() {
		document.querySelector(".video").classList.add("oldSchool");
	});

	document.querySelector("#orig").addEventListener("click", function() {
		document.querySelector(".video").classList.remove("oldSchool");
	});
};