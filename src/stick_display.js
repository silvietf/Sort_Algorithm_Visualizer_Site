/*棒の表示に関する事。*/
let a=document.getElementById('squares');   //追加する親
let b=new Array(n); //四角形のノードたち

let d="Array={";    //サイトに表示する棒の大きさ
https://github.com/silvietf/-
//*サイトに配列の値を表示する
for (let i = 0; i < n-1; i++) {
    d=d+String(c[i])+",";
}
d=d+String(c[n-1])+"}";
//*サイトに今回の配列の大きさを表示。
let e=document.createElement('div');
e.textContent=d;
a.appendChild(e);

//*棒の追加。
for(let i=0; i<n; i++){
    //*以下の3文で要素を追加。
    b[i]=document.createElement('div');
    b[i].id="square"+String(i+1);
    b[i].setAttribute('id','square'+String(i+1));
    //*以下の１文でCSSを追加。
    //!同じ属性に連続で使用すると「上書き」される。
    b[i].setAttribute('style','margin:10px;width:'+String(20*c[i])+'px;height:20px;background-color:rgb(0,0,0);');
    //*接合
    a.appendChild(b[i]);
}

