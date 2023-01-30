# windowsXPonHTML
Данный проект создан не для коммерческого использования, а лишь в рамках обучения и для развлечения. 
Каждый может использовать его по своему усмотрению, без каких-либо ограничений.
Всем добра!
Автор: © SaberSoft https://sabersoft.ru/

НАЧАЛО - Модальное окно с формой приема данных - НАЧАЛО

    <!--НАЧАЛО -- Разметка модального окна -- НАЧАЛО-->

        <div class="popup__bg">
            <form class="popup">
                <img src="img/close.png" class="close-popup">
                <label>
                    <input type="text" name="name">
                    <div class="label__text">
                        Ваше имя
                    </div>
                </label>
                <label>
                    <input type="tel" name="tel">
                    <div class="label__text">
                        Ваш телефон
                    </div>
                </label>
                <label>
                    <textarea name="message"></textarea>
                    <div class="label__text">
                        Ваше сообщение
                    </div>
                </label>
                <button type="submit">Отправить</button>
            </form>
        </div>

        <a href="#" class="open-popup">Открыть попап</a>

    <!--КОНЕЦ -- Разметка модального окна -- КОНЕЦ-->


    // !!!НАЧАЛО JS КОДА!!!

        let popupBg = document.querySelector(".popup__bg"); // Фон попап окна
        let popup = document.querySelector(".popup"); // Само окно
        let openPopupButtons = document.querySelectorAll(".open-popup"); // Кнопки для показа окна
        let closePopupButton = document.querySelector(".close-popup"); // Кнопка для скрытия окна

        openPopupButtons.forEach((button) => {
        // Перебираем все кнопки
        button.addEventListener("click", (e) => {
            // Для каждой вешаем обработчик событий на клик
            e.preventDefault(); // Предотвращаем дефолтное поведение браузера
            popupBg.classList.add("active"); // Добавляем класс 'active' для фона
            popup.classList.add("active"); // И для самого окна
        });
        });

        closePopupButton.addEventListener("click", () => {
        // Вешаем обработчик на крестик
        popupBg.classList.remove("active"); // Убираем активный класс с фона
        popup.classList.remove("active"); // И с окна
        });

        document.addEventListener("click", (e) => {
        // Вешаем обработчик на весь документ
        if (e.target === popupBg) {
            // Если цель клика - фон, то:
            popupBg.classList.remove("active"); // Убираем активный класс с фона
            popup.classList.remove("active"); // И с окна
        }
        });

    // !!!КОНЕЦ JS КОДА!!!

    /* НАЧАЛО СТИЛЕЙ */

        .popup__bg {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        opacity: 0;
        /* // Скрываем фон и сам попап */
        pointer-events: none;
        /* // Запрещаем ему быть целью событий */
        /* transition: 0.5s all; */
        }

        /* // При добавлении класса 'active' */
        .popup__bg.active {
        opacity: 1;
        /* // Показываем фон и попап */
        pointer-events: all;
        /* // Возвращаем события */
        /* transition: 0.5s all; */
        }

        .popup {
        border: 2px solid #245edb;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) scale(0);
        /* // Центрируем и масштабируем в 0 само окно */
        background: #fff;
        width: 400px;
        padding: 25px;
        /* transition: 0.5s all; */
        }

        /* // При добавлении класса 'active' */
        .popup.active {
        transform: translate(-50%, -50%) scale(1);
        /* // Так же центрируем и плавно увеличиваем */
        /* transition: 0.5s all; */
        }
        /* Конец важной части */
        /* Далее код для стилизации формы */
        .close-popup {
        position: absolute;
        top: 10px;
        right: 10px;
        cursor: pointer;
        }

        .popup label {
        width: 100%;
        margin-bottom: 25px;
        display: flex;
        flex-direction: column-reverse;
        }

        .popup .label__text {
        font-size: 14px;
        text-transform: uppercase;
        font-weight: 500;
        color: #cfd0d3;
        margin-bottom: 5px;
        }

        .popup input {
        height: 45px;
        font-size: 18px;
        border: none;
        outline: none;
        border-bottom: 1px solid #cfd0d3;
        }

        .popup input:focus {
        border-bottom: 1px solid #2982ff;
        }

        .popup input:focus + .label__text {
        color: #2982ff;
        }

        .popup textarea {
        resize: none;
        width: 100%;
        height: 150px;
        border: none;
        outline: none;
        border-bottom: 1px solid #cfd0d3;
        font-size: 18px;
        padding-top: 5px;
        }

        .popup textarea:focus {
        border-bottom: 1px solid #2982ff;
        }

        .popup textarea:focus + .label__text {
        color: #2982ff;
        }

        .popup button {
        width: 100%;
        height: 45px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
        font-size: 18px;
        border: 2px solid #2982ff;
        background: #2982ff;
        cursor: pointer;
        text-transform: uppercase;
        /* transition: 0.5s all; */
        }

        .popup button:hover {
        background: #fff;
        color: #2982ff;
        /* transition: 0.5s all; */
        }

    /*КОНЕЦ СТИЛЕЙ*/

КОНЕЦ - Модальное окно с формой приема данных - КОНЕЦ
