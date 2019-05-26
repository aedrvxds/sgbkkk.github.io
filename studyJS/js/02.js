
/*
 * querySelector()函数获取标题，把标题的引用储存到myHeading
 * 然后把myHeading变量的属性 textContent(标题内容)修改为“Hello world !”
 * 这两个函数均来自于文档对象模型（DOM）api，用于控制文档
 */
let myHeading = document.querySelector('h1');

myHeading.textContent = 'Hello world !';

/*
 * 变量是存储值的容器。要声明一个变量，先输入关键字let，然后输入合适的名称：
 * 运算符号：加+ 、 减- 、乘* 、除/ 、赋值= 、 等于=== 、 不等于 !== 、 取非！（如果逻辑为真返回false） 
 */

/*
 * document.querySelector('html').onclick() = function(){
	alert('dont tauch');
}
 */
let myImg = document.querySelector('img');

/*
 * 先判断 src里的值在通过getAttribute和setAttribute改变src里的值
 */
myImg.onclick = function(){
	let mySrc = myImg.getAttribute('src');
	if(mySrc ==='img/20180628004438406.png'){
		myImg.setAttribute('src','img/20180628004443903.png');
	}else{
		myImg.setAttribute('src','img/20180628004438406.png');
	}
}

//获取 name 参数  设置出个性化欢迎信息
function setHeading(name){
	let myHeading = document.querySelector('h2');
	myHeading.textContent = '这个网页的制作者可太酷了，'+name+'!';
}

/*
 * prompt()类似于alter()函数 用户输入的数据会在确认后存入myName里
 * 调用localStorageAPI，可以将数据存储在浏览器中供后续获取localStorage.setItem(一个数据项,把myName变量复制给它);
 */
function setUserName(){
	let myName = prompt('请输入你的名字');
	localStorage.setItem('name',myName);
	setHeading(myName);
}

/*
 * getItem()开始尝试取得浏览器中保存的name值
 * !storedName 当storeName不存在时为真
 * 否则调用setHeading
 */
let storedName = localStorage.getItem('name');
if(!storedName){
	setUserName();
}else{
	setHeading(storedName);
}

let myButton = document.querySelector('button');
myButton.onclick = setUserName;
