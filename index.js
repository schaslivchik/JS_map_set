"use strict";

console.group('Map')
// Создайте коллекцию Map из этого массива.
const arr = new Map([
  [1, "first"],
  [3, "third"],
]);

// Получите список ключей и значений отдельно.
console.log('arr.keys() :>> ', [...arr.keys()]);
console.log('arr.values() :>> ', [...arr.values()]);

for(let [keys, value] of arr){
  console.log(`keys: ${keys}, value: ${value}`)
}

arr.forEach((value,keys) => {
  console.log(`keys: ${keys}, value: ${value}`)
});

// Получите текущее количество элементов.
console.log('текущее количество элементов:>> ', arr.size);

// Добавьте и удалите элемент
arr.set(2, 'second')
arr.delete(1);
console.log('обновленные элементы вхождения :>> ', arr);


// Произведите поиск по ключу
console.log('поиск по ключу arr.get(2) :>> ', arr.get(2));
console.groupEnd()


console.group('Set')
// Создайте коллекцию Set с начальными значениями 1,2,3. 
const set = new Set();
set.add(1);
set.add(2);
set.add(3);
console.log(set)

// С помощью метода has проверьте наличие элемента со значением 3, а затем элемента со значением 4.
console.log('set.has(3) :>> ', set.has(3));
console.log('set.has(4) :>> ', set.has(4));

// Добавите еще несколько элементов.
set.add(4);
set.add(5);

//С помощью цикла for-of переберите ее значения и выведите в консоль.
for(let value of set){
 console.log('value :>> ', value);
}

//Найдите сумму этих значений.
let sum = 0;
[...set].forEach(e => sum += e)
console.log('sum :>> ', sum);

// Удалите элемент 2.
set.delete(4);
set.delete(5);

//Очистите всю коллекцию.
set.clear();
console.log('set.clear() :>> ', set);


//Из массива [1,6,9,4,9,1,5,6] получить массив уникальных значений.
const arr2 = new Set([1,6,9,4,9,1,5,6])
console.log('[1,6,9,4,9,1,5,6] :>> ', [...arr2]);


//Из массивов [1,6,9,4,9,1,5,6] и [5, 10, 11] получить один массив уникальных значений.
const arrFromArrays = [...[1,6,9,4,9,1,5,6], ...[5, 10, 11]]
const uniqueArray = new Set(arrFromArrays)
console.log('full array :>> ',arrFromArrays)
console.log('unique array :>> ', [...uniqueArray]);
console.groupEnd()




