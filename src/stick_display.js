/*棒の表示に関する事。*/
let a=document.getElementById('squares');   //追加する親
let b=new Array(n); //四角形のノードたち


//*サイトに配列の値を表示する（grid形式）
let div_container=document.createElement('div');
div_container.setAttribute('class',"container");
a.appendChild(div_container);
let div_row=document.createElement('div');
div_row.setAttribute('class','row');
let div_row_col=new Array(n);
//配列の要素追加
for (let i = 0; i < n; i++) {
    div_row_col[i]=document.createElement('div');
    div_row_col[i].class="col-sm";
    div_row_col[i].setAttribute('class',"col-sm");
    div_row_col[i].textContent=c[i];
    div_row.appendChild(div_row_col[i]);
}
div_container.appendChild(div_row);
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

