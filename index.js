function getHeight(){
    var h = 100;
    console.log(h + ' px');

    if (h > 50) {
        console.log(h + ' lon hon 50')
    }

}


function getWidth(){
    var w = 100;
    console.log(w + ' px');

    if (w < 500) {
        let h =50;
    }
    console.log(h + ' la height khi w < 50');
}


function sum(a,b){

    return a + b;
}



let d = sum(5,10) * 2;
let e = sum(3,4) * 2;
console.log(d);
console.log(e);



//-------Ket thuc buoi 2----/////


































const sumTwoNumber = (a,b) => a + b


console.log(sumTwoNumber(1,2));

// tim so lon nhat trong ba so nhap vao

const findMax = (a, b, c) => {
    let max = a;
    if(max<b){
        max = b;

    }
    if (max < c) {
        max = c
    }
    return max;
}
console.log('so lon nhat la: ' + findMax(3,2,3));

