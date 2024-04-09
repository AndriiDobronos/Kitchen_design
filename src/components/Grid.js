//Для начала, давайте разберемся, как можно прочитать данные из файла
// с бинарными данными file.grid в TypeScript. После этого мы сможем
// преобразовать эти данные в форму, пригодную для отображения в React-компоненте.
//
// Для чтения файла в бинарном формате и преобразования его содержимого
// в удобный формат данных, мы можем воспользоваться функциональностью Node.js.
// Для установки соответствующих типов и возможностей работы с файлами нам
// понадобится установить следующие пакеты:
//
// bash
// Copy code
// npm install @types/node
// npm install fs-extra
// После этого мы можем написать скрипт для чтения файла и его обработки.
// Для примера предположим, что данные в файле file.grid представляют
// собой двумерный массив чисел.
//
// typescript
// Copy code
// import * as fs from 'fs-extra';
//
// // Функция для чтения файла и возврата его содержимого
// async function readFile(filePath: string): Promise<Buffer> {
//     try {
//         const data = await fs.readFile(filePath);
//         return data;
//     } catch (error) {
//         console.error('Error reading file:', error);
//         throw error;
//     }
// }
//
// // Функция для преобразования бинарных данных в двумерный массив чисел
// function parseBinaryData(data: Buffer): number[][] {
//     // Ваш код для преобразования бинарных данных в удобный формат
//     // Это может зависеть от того, как именно данные представлены в файле
//     // Предположим, что данные представлены в виде двумерного массива чисел
//     const dataArray: number[][] = []; // Инициализация массива данных
//     // Ваш код парсинга бинарных данных
//     return dataArray;
// }
//
// // Пример использования
// async function main() {
//     try {
//         const binaryData = await readFile('file.grid');
//         const dataArray = parseBinaryData(binaryData);
//         console.log(dataArray); // Для отладки
//         // Теперь у вас есть двумерный массив данных, который можно
//         использовать для отображения в React
//     } catch (error) {
//         console.error('Error:', error);
//     }
// }
//
// // Вызов основной функции
// main();
// Как только данные будут успешно прочитаны и преобразованы в массив, мы можем
// использовать React для отображения этих данных в виде страницы, где цвет будет
// зависеть от значений. Для этого мы можем создать компонент React, который будет
// отображать таблицу и использует значения из массива данных для установки цвета ячеек.
// Вот пример такого компонента:
//
// typescript
// Copy code
// import React from 'react';
//
// interface GridProps {
//     data: number[][];
// }
//
// const GridComponent: React.FC<GridProps> = ({ data }) => {
//     return (
//         <div className="grid-container">
//             {data.map((row, rowIndex) => (
//                 <div key={rowIndex} className="grid-row">
//                     {row.map((value, colIndex) => (
//                         <div key={colIndex} className="grid-cell" style={{ backgroundColor: getColor(value) }} />
//                     ))}
//                 </div>
//             ))}
//         </div>
//     );
// };
//
// // Функция для определения цвета в зависимости от значения
// function getColor(value: number): string {
//     // Пример простой логики выбора цвета на основе значения
//     const maxValue = Math.max(...value.flat());
//     const minValue = Math.min(...value.flat());
//     const averageValue = value.flat().reduce((acc, curr) => acc + curr, 0) / value.flat().length;
//
//     if (value === maxValue) {
//         return 'red';
//     } else if (value === minValue) {
//         return 'blue';
//     } else if (value === averageValue) {
//         return 'yellow';
//     } else {
//         // Можно добавить другие условия выбора цвета, если необходимо
//         return 'white';
//     }
// }
//
// export default GridComponent;
// После этого мы можем использовать этот компонент GridComponent в своем
// React-приложении, передавая ему массив данных, полученных из файла file.grid.
// Важно учесть, что этот код предоставляет основу для вашего проекта, и вам может
// потребоваться внести изменения в зависимости от структуры данных в вашем файле
// и требований к визуализации.



//Хорошо, чтобы получить 16 оттенков цвета от красного до синего,
// мы можем воспользоваться функцией interpolateColor, которая будет
// преобразовывать значения от максимального до минимального в цветовой
// диапазон от красного до синего.
//
// Вот как может выглядеть эта функция и обновленная функция getColor:
//
// typescript
// Copy code
// import React from 'react';
//
// interface GridProps {
//     data: number[][];
// }
//
// const GridComponent: React.FC<GridProps> = ({ data }) => {
//     return (
//         <div className="grid-container">
//             {data.map((row, rowIndex) => (
//                 <div key={rowIndex} className="grid-row">
//                     {row.map((value, colIndex) => (
//                         <div key={colIndex} className="grid-cell" style={{ backgroundColor: getColor(value, data) }} />
//                     ))}
//                 </div>
//             ))}
//         </div>
//     );
// };
//
// // Функция для определения цвета в зависимости от значения
// function getColor(value: number, data: number[][]): string {
//     const minValue = Math.min(...data.flat());
//     const maxValue = Math.max(...data.flat());
//
//     // Преобразование значения в оттенок цвета от красного до синего
//     const interpolatedColor = interpolateColor(value, minValue, maxValue);
//     return interpolatedColor;
// }
//
// // Функция для интерполяции оттенка цвета от красного до синего
// function interpolateColor(value: number, min: number, max: number): string {
//     const normalizedValue = (value - min) / (max - min); // Нормализация значения от 0 до 1
//     const red = Math.round(255 * normalizedValue); // Красный компонент цвета
//     const blue = Math.round(255 * (1 - normalizedValue)); // Синий компонент цвета
//     const green = 0; // Зеленый компонент цвета (можно настроить при необходимости)
//
//     return `rgb(${red}, ${green}, ${blue})`;
// }
//
// export default GridComponent;
// В этой обновленной версии getColor, мы используем функцию interpolateColor,
// чтобы интерполировать значение между красным и синим цветами на основе его
// относительного положения между минимальным и максимальным значениями в массиве данных.
// Функция interpolateColor принимает значение, а также минимальное и максимальное
// значения в массиве данных и возвращает строку, представляющую цвет в формате RGB.



//У 2017 році інженери компанії Mocoding Ukraine працювали над інноваційним проектом.
// Однією з ключових особливостей проекту була можливість відображення температури
// поверхні моря безпосередньо на пляжу. Щоб досягти цієї мети, Mocoding LLC уклала
// партнерство з NASA Earth Data, щоб отримати доступ до щоденного набору даних про
// температуру поверхні моря та інтегрувати їх у пропрієтарну базу даних пляжу Mocoding.
// Щоденний набір даних був приблизно 3 гігабайти розміру, і в процесі обробки його
// було перетворено на набагато менший двовимірний байтовий масив, в якому кожен елемент
// містить температуру поверхні моря у Фаренгейтах для певної широти та довготи.
//
// Для демонстрації функціональності системи та забезпечення маркетингової команди
// високоякісними візуальними матеріалами один з членів команди розробив алгоритм для
// генерації карт теплового спостереження температури поверхні моря.
//


//Завдання
// Як інженер-програміст у компанії Mocoding, вам будуть надані різноманітні складні завдання,
// які збережуть ваш інтерес та сприятимуть вашому професійному зростанню.
// І це одне з таких завдань. Незважаючи на те, що це завдання вже було вирішено,
// воно відображає реальні виклики, з якими ви можете стикнутися в Mocoding.
//
// Вам потрібно створити наступне:
//
// Задано бінарний файл (sst.grid) та порожню карту світу (Empty Image File).
// Бінарний файл має наступні розміри:
//   const BINARY_DIMENSION_X = 36000; const DIMENSION_Y = 17999;
// Згенеруйте теплову карту глобальних температур поверхні моря,
// схожу на зображення вище (Heat-Map Image File).
// Створіть демонстраційний веб-сайт, що дозволяє користувачам завантажувати
// бінарний файл (у форматі zip archive) та відображати отримане зображення.

// Технічні вимоги:
// Проект повинен бути розміщений на вашому обліковому записі GitHub та бути відкритим для публіки.
// Використовуйте лише Typescript.
// Використовуйте Node 18+ та PNPM як менеджер пакетів.
// Використовуйте React для веб-сайту.
// Cтворіть окремі пакети для веб-сайту та компоненту створення зображення.
// Використовуйте mocha та chai для модульних тестів.
// Порожнє зображення світу вважається постійним і може бути включеним як частина пакетів.
// Бінарний файл не вважається постійним і надається лише як приклад.
// Очікування
// Метою цього завдання не є створення готового до використання виробничого коду,
// а оцінка здатності кандидата до його написання. При виконанні цього завдання будь ласка,
// зверніть особливу увагу на наступне:
//
// Спільний стиль кодування - використовуйте eslint та prettier.
// Ми хочемо бачити вашу здатність до створення чистого та організованого коду.
// React - ми хочемо бачити вашу здатність до створення веб-сайтів з використанням React.
// Тестування - ми хочемо бачити вашу здатність до створення модульних тестів.
// NodeJS & Server - ми хочемо бачити вашу здатність до створення серверної частини.
// Підказки:
// Ми розуміємо, що це завдання може зайняти значну кількість часу, особливо для менш
// досвідчених інженерів. Тому ми включили кілька корисних порад, які допоможуть вам
// виконати це виклик.
//
// Vite може допомогти вам швидко розпочати створення веб-сайту.
// Unbuild може допомогти вам швидко розпочати створення бібліотеки.
// Якщо ви не дуже знайомі з React, ви можете створити консольний інтерфейс для
// взаємодії з користувачем.