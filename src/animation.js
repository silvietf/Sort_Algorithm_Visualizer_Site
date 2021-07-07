/*ソートアルゴリズムで棒を操作。*/

//*今回はバブルソートのみ。→なるべく拡張性を持たせたい=sort_filesの中にあるプログラムを選択できるようにしたい。
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
//animejsで入れ替えアニメーションを起こす関数
function change_stick(origin, target, origin_place, target_place) {
    let distance = target_place - origin_place;
    anime({
        targets: '#' + origin.id,
        translateY: 30.5 * distance //この値だときれいに収まる。
    });
    anime({
        targets: '#' + target.id,
        translateY: -29.5 * distance //この値だときれいに収まる。
    })
}
//idを入れ替える関数
function change_id(origin, target) {
    let t = origin.id;
    console.log(origin.id);
    origin.id = target.id;
    console.log(target.id);
    target.id = t;
}
//! 上３つの関数の順序はarray⇒stick→id

let s = 'on';
// anime({
//     targets:'#square5',
//     translateY:-29.5*4
// });
// anime({
//     targets:'#square1',
//     translateY:30.5*4
// });
//*バブルソート
/**メモ
 * アロー演算子：引数=>処理
 * !await関数はasync内でしか使えない
 * !setIntervalの中にsetIntervalは使えない。
 */
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
            await wait(500);

            if (c[i] > c[j] && s == 'on') {

                change_color(me, '#00ff00');
                change_color(target, '#00ff00');
                change_array(i, j);
                change_stick(me, target, i, j);
                wait(100);
                change_id(me, target);
                change_color(me, '#dc143c');
                change_color(target, '#00bfff');

            }
            change_color(target, '#00bfff');
        }
        if (i == n - 1) {
            //!i==n-1のときにはfor(let j=0; ....){}を除外してしまう。→await wait(200)で赤色の棒を人が認識できるように。
            await wait(500);
        }
        for (let k = 0; k < n; k++) {
            //色の初期化
            let clear = document.getElementById('square' + String(k + 1));
            change_color(clear, '#000000');
        }
    }
}
stick_animation();