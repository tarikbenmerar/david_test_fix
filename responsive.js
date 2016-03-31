function resizeIframe() {
	var originalWidth = 1060;
	var iframe = document.getElementById('linklay_iframe');
	var width = document.getElementById('container_div').offsetWidth;
	if (width < originalWidth) {
		var ratio = width / originalWidth;
		iframe.style.webkitTransform = "scale(" + ratio + ")";
		iframe.style.MozTransform = "scale(" + ratio + ")";
		iframe.style.msTransform = "scale(" + ratio + ")";
		iframe.style.OTransform = "scale(" + ratio + ")";
		iframe.style.transform = "scale(" + ratio + ")";

		iframe.style.webkitTransformOrigin = "top left";
		iframe.style.MozTransformOrigin = "top left";
		iframe.style.msTransformOrigin = "top left";
		iframe.style.OTransformOrigin = "top left";
		iframe.style.transformOrigin = "top left";

	} else {
		iframe.style.webkitTransform = "scale(1)";
		iframe.style.MozTransform = "scale(1)";
		iframe.style.msTransform = "scale(1)";
		iframe.style.OTransform = "scale(1)";
		iframe.style.transformOrigin = "scale(1)";
	}
}
window.onresize = resizeIframe;
resizeIframe();
