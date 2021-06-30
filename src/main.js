let n=10;    //*要素数
let a=document.getElementById('squares');   //*追加する親
let b=new Array(n); //*四角形のノードたち
//:色々追加。
for(let i=0; i<n; i++){
    //:以下の3文で要素を追加。
    b[i]=document.createElement('div');
    b[i].id="square"+String(i+1);
    b[i].setAttribute('id','square'+String(i+1));
    //:以下の１文でCSSを追加。
    //!同じ属性に連続で使用すると「上書き」される。
    //?見た目良くなる方法はありそう？
    b[i].setAttribute('style','margin:10px;width:500px;height:50px;background-color:rgb(0,0,0);');
    //:接合
    a.appendChild(b[i]);
}
