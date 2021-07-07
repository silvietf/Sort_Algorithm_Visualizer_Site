/*ソートアルゴリズムで棒を操作。*/

//*今回はバブルソートのみ。→なるべく拡張性を持たせたい=sort_filesの中にあるプログラムを選択できるようにしたい。
let time_red = 0; //select_stick_redlの時間調節。
let time_blue = 0; //select_stick_blueの時間調節。
//色切り替えの関数
function change_color(element, rgbcolor) {
    //!rgbは'#000'のように指定する。
    element.style.backgroundColor = rgbcolor;
    //例：change_color(document.getElementById('square1'),'#9b9b9b');
};
//一定時間待つ関数（delay関数） 参考サイト：https://himenon.github.io/docs/javascript/wait/
const wait = async (ms) => new Promise(resolve => setTimeout(resolve, ms));


//*バブルソート
/**メモ
 * アロー演算子：引数=>処理
 * !await関数はasync内でしか使えない
 * !setIntervalの中にsetIntervalは使えない。
 */
console.log(document.getElementById('square10').style.backgroundColor);
const stick_animation = async () => {
    for (let i = 0; i < n; i++) {
        //赤色表示
        let me = document.getElementById('square' + String(i + 1));
        change_color(me, '#dc143c');
        for (let j = i + 1; j < n; j++) {
            //青棒表示
            let target = document.getElementById('square' + String(j + 1));
            //!await wait(100)をここに挟むと色blue⇒black切り替えが一瞬で行われるので注意！！
            change_color(target, '#00bfff');
            await wait(100);

            // if (c[i] > c[j]) {

            //     change_color(me, '#dc143c');
            // }
            change_color(target, '#00bfff');
        }
        if (i==n-1) {
            //!i==n-1のときにはfor(let j=0; ....){}を除外してしまう。→await wait(200)で赤色の棒を人が認識できるように。
            await wait(200);
        }
        for (let k = 0; k < n; k++) {
            //色の初期化
            let clear = document.getElementById('square' + String(k + 1));
            change_color(clear, '#000000');
        }
    }
}
stick_animation();