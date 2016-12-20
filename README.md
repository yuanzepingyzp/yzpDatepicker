# yzpDatepicker
基于angularjs的datePicker组件
##EXAMPLE
###html code
```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset='utf-8'>
		<title>yzpDatepicker</title>
		<link rel="stylesheet" type="text/css" href="css/yzpDatepicker.css">
	</head>
	<body ng-app="app">
		<yzp-datepicker month="12" year=2017 day=20 placeholder="请输入时间"></yzp-datapicker>
		<script type="text/javascript" src='js/angular.js'></script>
		<script type="text/javascript" src='js/yzpDatepicker.js'></script>
	</body>
</html>
```
##API
```html
<yzp-datepicker month="12" /*bind month for the input*/
                year=2017 /*bind year for the input*/
                day=20 /*bind day for the input*/
                placeholder="请输入时间"/*define the placeholder of the input*/
></yzp-datapicker>
```
