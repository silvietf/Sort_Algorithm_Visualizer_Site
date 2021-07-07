/*バブルソート*/
/**メモ
 * アロー演算子：引数=>処理
 * !await関数はasync内でしか使えない
 * !setIntervalの中にsetIntervalは使えない。
 */
const stick_animation_bubble = async () => {
    for (let i = 0; i < n-1; i++) {
        for (let j = 0; j < n-1; j++) {
            //赤色表示
            let me = document.getElementById('square' + String(j + 1));
            change_color(me, '#dc143c');
            //青棒表示
            let target = document.getElementById('square' + String(j + 2));
            change_color(target, '#00bfff');
            await wait(250);
            if (c[j] > c[j+1]) {
                change_color(me, '#00ff00');
                change_color(target, '#00ff00');
                change_array(j, j+1);
                await wait(250);

                change_stick(me, target);
                await wait(250);

                change_color(me, '#dc143c');
                change_color(target, '#00bfff');
            }
            change_color(me,'#000000');
            change_color(target,'#000000');
        }
    }
    for (let k = 0; k < n; k++) {
        //色の初期化
        let clear = document.getElementById('square' + String(k + 1));
        change_color(clear, '#000000');
    }
}
stick_animation_bubble();