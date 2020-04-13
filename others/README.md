## Javascript

# 5)
```JS
    function one() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('Exec One');
                resolve(true);
            }, 500);
            
        });
    }

    function two() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('Exec Two');
                resolve(true);
            }, 800);
        });        
    }

    function exec(){
        Promise.all([one(), two()]).then(() => {
            console.log('Successfully finished all');
        }). catch(() => console.log('If it fails'));
    }
```
# 6)

```JS
    function one() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('Exec One');
                resolve(true);
            }, 500);
            
        });
    }

    function two() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('Exec Two');
                resolve(true);
            }, 800);
        });        
    }

    async function exec(){
      await one().catch(() => console.log('If it fails'));
      await two().catch(() => console.log('If it fails'));
      console.log('Successfully finished all');
    }
```

# 7)
## A) Será apresentado Quatro vez o numero 4, por que o "i" do for esta declarado como var e nesse caso como var fica fora do escopo o timeout vai pegar o valor do "i" quando ele sair do for.

## B)
```JS
    for(let i = 0; i <= 3; i++) {
    setTimeout(function() { console.log(i); }, 100);
    }
```
# 8)
```JS
for(let i = 1; i <= 100; i++) {
    let concatString = '';
    const mod3 = i%3;
    const mod5 = i%5;

    if(mod3 === 0)
        concatString+='Fizz';

    if(mod5 === 0)
        concatString+='Buzz';
    console.log(`${i} ${concatString}`);
}
```
# 9)
```JS
x = x + y;
y = x - y;
x = x - y;
```
## DEVOPS

# 10)
```sh
    ps -el | grep 'Z'
    sudo kill -9 NÚMERO DO PID
```

# 11) 
```sh
    ps -el | grep 'node'
```

# 12)
```sh
00,22  10,22  *  *  *   /usr/local/foo-bar.sh

```