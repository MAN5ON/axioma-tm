# Task Manager (Тестовое задание для Аксиоматики)
*(Текст задачи после описания функционала)*

Приложение реализовано на [**`Angular`**](https://angular.io/). 

Вёрстка всех элементов - [**`Angular Material`**](https://material.angular.io/).

В приложении есть две основные страницы: 
- страница просмотра;
- страница редактирования;

## ОКНО ПРОСМОТРА:
Список задач выводится в виде таблицы. При наведении на элемент открывается всплывающее окно с кнопками перемещения.
К таблице привязан **Paginator** для удобства отображения.

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
## ТЕКСТ ЗАДАЧИ:

Разработать веб приложение c использованием Angular и router из двух страниц: редактор и просмотр элементов (каждая страница должна открываться по-собственному url). Элемент состоит из наименования, даты создания, даты выполнения, описания.

### На странице редактора, должно быть реализовано следующее:
-Добавление элемента:
  - Добавление необходимо делать с помощью popup состоящего из полей:
  - Название
  - Дата выполнения (Дата + Время)
  - Описание
  - При создании элемента автоматически должно заполняться поле – Дата создания (Дата + Время).
- Копирование элемента;
- Удаление элемента.

### На странице просмотра:

- Вывод списка созданных элементов с датой их создания;
- В заголовке списка должны быть названия колонок: наименование, дата и время создания, дата и время выполнения;
- Выпадающее меню у каждого элемента, предоставляющее возможность переместить элемент выше или ниже по списку;
- При нажатии на элемент открывается popup по аналогии с пунктом 1.a блока выше только на просмотр полей.
- При верстке страниц необходимо использовать одну из следующих библиотек:
  - Taiga UI
  - Ant Design
  - Material
  - Nebular

### Бонусом будет:
- При достижении даты выполнения будет появляться toaster-уведомление с информацией об элементе;
- Валидация и отображение ошибок на полях формы создания;
- В разделе просмотра реализовать фильтрацию по полям: Наименование, Дата выполнения с, Дата выполнения по.
