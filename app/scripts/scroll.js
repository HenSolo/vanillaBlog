var animatedScroll = function(frameAmount, duration) {
	this.frameAmount = frameAmount;
	this.duration = duration;
	this.frameAmount = this.duration * this.frameAmount;
	this.frameDurationInMs = this.duration / this.frameAmount * 1000;
	this.distancePerFrame = function(distance){
		return distance / this.frameAmount;
	};
};
function recursiveScroll(targetId, distance, frameAmount, frameDurationInMs, i) {
	if (i === undefined) i = 0;
	i++;
	var scrollPos = document.body.scrollTop || document.documentElement.scrollTop;
	if(frameAmount === i) {
		var targetPos = document.getElementById(targetId).offsetTop - widgetsConfig.scroll.paddingTop;
		if(targetPos === scrollPos) return;
		return setTimeout(function(){ window.scrollTo(0, targetPos); }, frameDurationInMs);
	}
	window.scrollTo(0, scrollPos + distance);
	setTimeout(function(){ recursiveScroll(targetId, distance, frameAmount, frameDurationInMs, i); }, frameDurationInMs);
};
function mScrollTo(mAnimatedScroll, targetId) {
	var start = document.body.scrollTop || document.documentElement.scrollTop;
	var stop = document.getElementById(targetId).offsetTop;
	if (start === stop) return;
	var distance = stop - start - widgetsConfig.scroll.paddingTop;
	console.log(targetId, mAnimatedScroll.distancePerFrame(distance), mAnimatedScroll.frameAmount, mAnimatedScroll.frameDurationInMs);
	recursiveScroll(targetId, mAnimatedScroll.distancePerFrame(distance), mAnimatedScroll.frameAmount, mAnimatedScroll.frameDurationInMs);
};
