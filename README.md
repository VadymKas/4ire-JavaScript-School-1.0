# 4ire-JavaScript-School-1.0

## Описание задания #1

Вам нужно оформить программу конвертер валют, используя пройденные темы.

Программа должна уметь переводить 5 валют друг в друга (валюты на ваше усмотрение). Пользователь вводит сначала название валюты, затем вводит сумму, и название валюты в которую хочет перевести, после чего получает ответ (для общения с пользователем используем prompt и alert подробнее 
Если пользователь ввел что-то неверно, нужно повторить ввод этой информации. 
По окончании конвертации спросить у пользователя хочет ли он произвести конвертацию еще раз. Если да - то повторить все о'и. Если нет - выполнить выход из программы.


## Описание задания #2

Реализовать функцию для подсчета n-го обобщенного числа Фибоначчи.

Написать функцию для подсчета n-го обобщенного [числа Фибоначчи](https://ru.wikipedia.org/wiki/%D0%A7%D0%B8%D1%81%D0%BB%D0%B0_%D0%A4%D0%B8%D0%B1%D0%BE%D0%BD%D0%B0%D1%87%D1%87%D0%B8). Аргументами на вход будут три числа - F0, F1, n, где F0, F1 - первые два числа последовательности (могут быть любыми целыми числами), n - порядковый номер числа Фибоначчи, которое надо найти. Последовательнось будет строиться по следующему правилу F2 = F0 + F1, F3 = F1 + F2 и так далее.

Считать с помощью модального окна браузера число, которое введет пользователь (n).
С помощью функции посчитать n-е число в обобщенной последовательности Фибоначчи и вывести его на экран.
Пользователь может ввести отрицательное число - результат надо посчитать по такому же правилу (F-1 = F-3 + F-2).


## Описание задания #3

Реализовать функцию фильтра массива по указанному типу данных

**Технические требования:**

- Написать функцию filterBy(), которая будет принимать в себя 2 аргумента. Первый аргумент - массив, который будет содержать в себе любые данные, второй аргумент - тип данных.
- Функция должна вернуть новый массив, который будет содержать в себе все данные, которые были переданы в аргумент, за исключением тех, тип которых был передан вторым аргументом. То есть, если передать массив ['hello', 'world', 23, '23', null], и вторым аргументом передать 'string', то функция вернет массив [23, null].
