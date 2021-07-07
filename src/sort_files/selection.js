/*選択ソート*/
const stick_animation_selection = async () => {
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
            console.log(me);
            if (c[i] > c[j]) {
                change_color(me, '#00ff00');
                change_color(target, '#00ff00');
                change_array(i, j);
                await wait(250);

                change_stick(me, target);

                await wait(250);
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
stick_animation_selection();