function showPic (whichpic){
	var source = whicpic.getAttribute("href");//通过元素获取展示图片
	var id1 = getElementById("id1"); //通过id获取占位符图片
	id1.setAttribute("src",source); //两个参数第一个为属性名，第二为属性值==id1.src=source;
}




/*
 * 
 * 事件处理函数
 * 
 * 
 */



