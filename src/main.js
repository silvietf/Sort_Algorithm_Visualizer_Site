/*グローバル変数など*/
var n=10;    //要素数、棒の数（グローバル変数）
var c=new Array(n); //棒の大きさ（グローバル変数）
//*棒の大きさを乱数生成
for (let i = 0; i < n; i++) {
    //!0の値だと棒が表示されないので、今回はceil・・・切り上げを使用。
    c[i]=Math.ceil(Math.random()*10);
}

/*ソートアルゴリズムで棒を操作するときに使う関数*/
//色切り替えの関数
function change_color(element, rgbcolor) {
    //!rgbは'#000000'のように指定する。
    element.style.backgroundColor = rgbcolor;
    //例：change_color(document.getElementById('square1'),'#9b9b9b');
};
//一定時間待つ関数（delay関数） 参考サイト：https://himenon.github.io/docs/javascript/wait/
const wait = async (ms) => new Promise(resolve => setTimeout(resolve, ms));
//棒の大きさc[]を入れ替える関数（ここにソートアルゴリズムを書くのもあり）
function change_array(origin_array_num, target_array_num) {
    let t = c[origin_array_num];
    c[origin_array_num] = c[target_array_num];
    c[target_array_num] = t;
}
//animejsで入れ替えアニメーションを起こす関数→今回は棒の切り替えで終わり
function change_stick(origin, target) {
    let t=origin.style.width;
    origin.style.width=target.style.width;
    target.style.width=t;

}
