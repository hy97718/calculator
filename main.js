// データ
let result = "";
// =で計算したかどうか
let is_calculator = false;
// 初期表示
window.onload = function () {
result = document.getElementById('result');
};

// Cキー押下
function clear_click(){
result.value = "0";
is_calculator = false;
}

// 数字キー押下
function num_click(val){
if(is_calculator)result.value = "0";
is_calculator = false;  

if(result.value =="0" && val == "0"){
    result.value = "0";
}else if(result.value == "0" && val == "."){
    result.value = "0.";
}else if(result.value == "0"){
    result.value = val;
}else{
    result.value += val;
}
}
//小数点キー押下
//function decimal_click(val){
    //result.value = result.value.slice(0, -1) + val;
//}
// 演算子キー押下
function ope_click(val){
if(is_calculator)is_calculator = false;

if(is_ope_last()){
    result.value = result.value.slice(0, -1) + val;
} else {
    result.value += val;
}
}
// =キークリック
function equal_click(){
if(is_ope_last())result.value = result.value.slice(0, -1);

let temp = new Function("return " + result.value.replaceAll("*", "*").replaceAll("/", "/"))();
if(temp == Infinity || Number.isNaN(temp)){
    result.value = "Error";
}else{
    result.value = temp;
    is_calculator = true;
}
}

// 入力されている値が演算子かどうか
function is_ope_last(){
    return ["+","-","*","/","."].includes(result.value.toString().slice(-1));
}