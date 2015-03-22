$(document).ready(function(){

	function SetCircle() {
		$window = $(window);
		width = $window.width();
		height =$window.height();
		diameter = Math.min(width, height);
		topmargin = Math.max((height-diameter)/2,0);
		$('.circlelink').css('height', diameter);
		$('.circlelink').css('width', diameter);
		$('.circlelink').css('margin-top', topmargin);
		$('.circlelink .imgFrame').css('height', diameter);
		$('.circlelink .imgFrame').css('width', diameter);
		$('.curtainFrame').css('top', -1*diameter);
		x0 = width/2;
		y0 = height/2;
	}

	SetCircle();

	$(window).resize(SetCircle);
	
	function R(obj, event) {
		x = event.pageX-x0;
		y = -event.pageY+y0;
		rsq = Math.pow(x, 2) + Math.pow(y, 2);
		r = Math.pow(rsq, .5);
		return r;
	}

	function Theta(obj, event) {
		x = event.pageX-x0;
		y = -event.pageY+y0;
		return Math.atan2(y,x);
	}
	
	$('.maindiv').mousemove(function(event){
		x = event.pageX-x0;
		y = -event.pageY+y0;
		r = Math.round(R(this, event));
		theta = Theta(this, event);
		n = (Math.floor((3.0/(2.0*Math.PI)) * (theta+(Math.PI/6))) + 3) % 3;
		if(r<=diameter/2){
			switch(n){
				case 0:
					$('.region#1').css('opacity', .4);
					$('.region#2').css('opacity', .4);
					$('.region#0').css('opacity', 1);
				break;
				case 1:
					$('.region#0').css('opacity', .4);
					$('.region#2').css('opacity', .4);
					$('.region#1').css('opacity', 1);
				break;
				case 2:
					$('.region#1').css('opacity', .4);
					$('.region#0').css('opacity', .4);
					$('.region#2').css('opacity', 1);
				break;
			}
		}
		else {
			$('.region').css('opacity', 1);
		}
			
		$('#log2').text('x:'+ x + ' y:' + y + ' r:' + r + ' theta:' + theta + "   n: " + n);
	}); 
	
	
	$('.circlelink').click(function(event){
		r = Math.round(R(this, event));
		if(r <=diameter/2){
			theta = Theta(this, event);
			n = (Math.floor((3.0/(2.0*Math.PI)) * (theta+(Math.PI/6))) + 3) % 3;
			//$("#log").text("  x:  " + x + "   y:  " + y +"   r: " + r + "   n: " + n);
			
			switch(n){
				case 0:
					siteaddress = 'http://www.balancecommunity.com/pro-team/benplotkinswing';
					break;
				case 1:
					siteaddress = 'http://www.theoatmeal.com';
					break;
				case 2:
					siteaddress = 'http://www.phys.washington.edu/users/deepg/staff/benPS.shtml';
					break;
			}
			window.location.assign(siteaddress);
		}
	});
	

});
