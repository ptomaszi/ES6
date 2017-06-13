const pi = 3.14;
//pi = 2;

function func(){
    const foo = 10;
    if (true){
        const foo = 20;
        console.log(foo);
    }
    console.log(foo);
}

func();