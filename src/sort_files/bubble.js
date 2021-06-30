let x=[5,3,9,1,2,4,0];
let t=0;
//:昇順で並べ替え
for (let i = 0; i < x.length; i++) {
    for (let j = 0; j < x.length; j++) {
        if (x[j]>x[j+1]) {
            t=x[j];
            x[j]=x[j+1];
            x[j+1]=t;
        }
    }
}