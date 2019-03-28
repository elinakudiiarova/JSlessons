# Переменные
Переменные - это способ дать имя значению.
Из переменной можно прочитать значение, и в переменную можно записать значение.

В JS переменные задаются так:
```
var a; // объявление переменной а. Сейчас так не делают.
let b; // объявление переменной b, которой можно присваивать новое значение.
const c = 10; // объявление переменной с и присваивание ей значения. Больше этой переменной присваивать значений нельзя.
```

В переменную можно записать значение:
```
let a;
a = 10;
a = 20;
```

 Из переменной можно прочитать значение:
 ```
 let a = 10;
 console.log(a); // выводим значение а на консоль( чтоб было видно в консоли).
 let b = a; // переменной можно присвоить значение другой переменной.
 ```

 С переменной можно обращаться так же, как и со значением:
```
let a = 10;
let b = a*5; // b == 50
```

## Правила именования переменных:
* Имя переменной должно начинаться с буквы или знака подчеркивания
* Имя переменной может содержать буквы, цифры, знак подчеркивания
* Переменные обычно называют с маленькой буквы, если название переменной включает несколько слов,то каждение слово начинается с большой буквы(не включая заглавную)

