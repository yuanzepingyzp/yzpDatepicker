var yzpDatepicker=angular.module("app",[]);
yzpDatepicker.directive("yzpDatepicker",function(){
	return{
		scope:{
			month:'@',
			year:'@',
			day:'@',
			placeholder:'@'
		},
		restrict:'E',
		template:'<div class="yzpDatepickerwrap"><input type="text" ng-click=isFocus() ng-model="time" placeholder={{placeholder}} readOnly class="yzpDatepickerinput"><date-picker ng-if="isShow" ng-mouseleave=isBlur()></date-picker></div>',
		link:function(scope){
			scope.isFocus=function(){
				scope.isShow=!scope.isShow;
			}
			scope.isBlur=function(){
				scope.isShow=false;
			}
		}
	}
})
yzpDatepicker.directive("datePicker",function(){
	return{
		restrict:'E',
		template:'<div class="yzpDatepicker"><picker-head></picker-head><picker-body></picker-body></div>'
	}
});
yzpDatepicker.directive("pickerHead",function(){
	return{
		restrict:'E',
		template:'<div class="pickerHead"><h3>请选择日期</h3><button ng-click=prevYear()><<</button><button ng-click=prevMonth()><</button> <span ng-bind="year" readOnly></span><span>年</span><span ng-bind="month" readOnly></span><span>月</span> <button ng-click=nextMonth()>></button><button ng-click=nextYear()>>></button></div>',
		replace:'true',
		link:function(scope){
			scope.prevYear=function(){
					scope.year--;
			}
			scope.nextYear=function(){
				scope.year++;
			}
			scope.prevMonth=function(){
				if(scope.month>1){
					scope.month--;
				}else{
					scope.month=12;
				}
			}
			scope.nextMonth=function(){
				if(scope.month<12){
					scope.month++;
				}else{
					scope.month=1;
				}
				
			}
		}
	}
});
yzpDatepicker.directive("pickerBody",function($filter){
	return{
		restrict:'E',
		template:'<div class="pickerBody"><button ng-repeat="day in days" ng-click=setDay(day)>{{day}}</button></div>',
		link:function(scope){
			scope.setDay=function(day){
				scope.day=day;
				scope.$parent.time=scope.year+'年'+scope.month+'月'+scope.day+'日';
			}
			scope.days=[];
			scope.$watch('month',function(){
				scope.days=$filter('detectmonth')(scope.month,scope.year);
			});
			scope.$watch('year',function(){
				scope.days=$filter('detectmonth')(scope.month,scope.year);
			});
		}
	}
});
yzpDatepicker.filter("detectmonth",function(){
	return function(month,year){
		var smallMonth=[1,4,6,9,11];
		var x=month/1;
		var output=[];
		if(smallMonth.indexOf(x)>=0){
			for(var i=1;i<=30;i++){
				output.push(i);
			}
		}else if(x===2){
			if((year%4===0&&year%100!==0)||(year%400===0)){
				for(var i=1;i<=29;i++){
				output.push(i);
				}
			}else{
				for(var i=1;i<=28;i++){
				output.push(i);
				}
			}
			
		}else{
			for(var i=1;i<=31;i++){
				output.push(i);
			}
		}
	return output;
	}
})
