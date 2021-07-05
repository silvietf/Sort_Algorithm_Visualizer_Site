/*ソートアルゴリズムで棒を操作。*/


//*今回はバブルソートのみ。→なるべく拡張性を持たせたい=sort_filesの中にあるプログラムを選択できるようにしたい。
let time_red=0; //select_stick_redlの時間調節。
let time_blue=0;    //select_stick_blueの時間調節。
//色切り替えの関数
function change(element, rgbcolor) {
    //!rgbは'#000'のように指定する。
    element.style.backgroundColor = rgbcolor;
    //例：change(document.getElementById('square1'),'#9b9b9b');
};
//一定時間待つ関数（delay関数） 参考サイト：https://himenon.github.io/docs/javascript/wait/
const wait = async (ms) => new Promise(resolve => setTimeout(resolve, ms));
// anime({
//     targets:"#square1",
//     translateY:10
// });
/**基本処理手順
 * 1. 自分の参照してる棒(me)を赤色で表示。
 * 2. 入れ替え対象の棒(target)を青色で表示。
 * 3. 1.の棒をtranslateY:20  by animejs
 * 4. 2.の棒をtranslateY:-20で入れ替えする。 by animejs
 * 5. 次の棒に移動して繰り返す。
 * ※ 処理ごとにdelay操作をする。→シークバー(slider.js)で調節。
 * 課題：１つのsetIntervalの中で全ての処理を収める。
 */

//*バブルソート
//!setIntervalの中にsetIntervalは使えない。
//!await関数はasync内でしか使えない
/** setIntercal()の代わりにconst wait = async (ms) => new Promise(resolve => setTimeout(resolve, ms));を使ってみる
 * アロー演算子：引数=>処理
 */
const stick_animation=async()=>{
    for (let i = 0; i < n; i++) {
        //赤色表示
        let me = document.getElementById('square' + String(i + 1));
        change(me, '#dc143c');
        for (let j = 1; j < n; j++) {
            let target = document.getElementById('square' + String(j + 1)); //!j=n-1のときにtargetが振り切れる可能性あり！
            await wait(1000);
            console.log("target.id="+target.id);
            change(target, '#00bfff');
        }
    }
}
stick_animation();