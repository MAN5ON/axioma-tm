# Task Manager
Приложение реализовано на [**`Angular`**](https://angular.io/). 

Вёрстка всех элементов - [**`Angular Material`**](https://material.angular.io/).

В приложении есть две основные страницы: 
- страница просмотра;
- страница редактирования;

## ОКНО ПРОСМОТРА:
Список задач выводится в виде таблицы. При наведении на элемент открывается всплывающее окно с кнопками перемещения.
К таблице привязан пагинатор для удобства отображения.

## ОКНО РЕДАКТОРА:

Выводится список задач и следующие кнопки управления:
- New Task (открывает форму создания новой задачи. Время создания заполняется автоматически)
- Copy (дублирует выбранные элементы)
- Delete (удаляет выбранные элементы)

**`p.s.`**

*При дублировании элемента по сути вызывается функция create, которая создаёт новую задачу с параметрами старой, но с сгенерированным id, чтобы при удалении выбранного элемента, удалялся только он, но не его клоны.*

## РЕАЛИЗОВАННЫЕ БОНУСЫ:
- TOASTER (Snackbar в Angular Material)

- ВАЛИДАЦИЯ ФОРМЫ НОВОГО ЭЛЕМЕНТА:
  1. все поля формы - **`required`**;
  2. текст задачи - минимум **5** символов, максимум - **200**;
  3. выбор даты только начиная с текущего дня(выходные не включены);
  4. если при создании формы deadline уже прошел, то задача автоматически устанавливает deadline на следующие 24 часа (например если юзер в **18:00** водит задачу с датой: current day : **15:00**, то deadline изменит поле на next day : **18:00**)

- ФИЛЬТРАЦИЯ ПО ПОЛЯМ *(при клике на заголовок)*

---
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
