/*挿入ソート*/
const stick_animation_selection = async () => {
    for (let i = 1; i < n; i++) {
        //赤色表示
        let me = document.getElementById('square' + String(i + 1));
        change_color(me, '#dc143c');
        for (let j = 0; j < i; j++) {
            //青棒表示
            let target = document.getElementById('square' + String(j + 1));
            change_color(target, '#00bfff');
            await wait(500);
            if (c[j] >c[i]) {
                change_color(me, '#00ff00');
                change_color(target, '#00ff00');
                // change_array(i, j);
                await wait(250);

                //*splice()を使ってソート済み配列に赤棒を追加。d.splice(a,b,c)＝配列dの番号aの前にcを挿入。bは上書きされる配列番号の数。b=0で元のdの内容が右shiftされる。cなしで削除
                let styles = new Array(i + 1);
                for (let k = j; k < i; k++) {
                    styles[k] = document.getElementById('square' + String(k + 1)).style.width;

                }
                //棒の大きさ変更
                //赤帽をそれより大きい棒の前に挿入
                styles.splice(j, 0, me.style.width);
                //もとあった赤帽を削除
                styles.splice(i+1,1);
                //配列cにc[i]をspliceで挿入。
                c.splice(j,0,c[i]);
                //もともとあったc[i]をspliceで削除
                c.splice(i+1,1);
                console.log(styles);
                //変更を画面に反映
                for (let k = j; k <= i; k++) {
                    document.getElementById('square' + String(k + 1)).style.width = styles[k];
                }


                // change_stick(me, target);

                await wait(250);
                change_color(me, '#dc143c');
                change_color(target, '#00bfff');

            }
            change_color(target, '#000000');
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
stick_animation_selection();