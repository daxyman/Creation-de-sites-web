/* 
example 1
const list = [1,2,3,4,5];
let total = 0;
let count = 0;
for(i=0;i<list.length;i++){
    if(list[i]%2==0){
        total+=list[i];
        count++;
    }
    
}
alert(total);
alert(count);
*/

let isblack = true;
function changeBackgroundclr() {
    if(isblack){
        document.body.style.backgroundColor = "pink";
        isblack = !isblack;
    }else{document.body.style.backgroundColor = "blue";
        isblack = !isblack;
    }
}

