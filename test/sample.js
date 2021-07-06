let i=0;
while(true) {
    i++;
    let test=setInterval(() => {
        console.log('i='+i);
        if (i==10) {
            clearInterval(test);
            break;
        }
    }, 1000);
}
//!setIntervalの中身の処理より、whileの処理が優先される。
