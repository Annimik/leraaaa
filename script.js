document.addEventListener('DOMContentLoaded', () => {
    const windows = [
        { id: 'window-eyes', modalId: 'modal-eyes' },
        { id: 'window-warmth', modalId: 'modal-warmth' },
        { id: 'window-crafts', modalId: 'modal-crafts' }
    ];

    const modals = {};
    const closeButtons = {};

    // 1. Получение ссылок на элементы
    windows.forEach(item => {
        modals[item.id] = document.getElementById(item.modalId);
        closeButtons[item.id] = modals[item.id].querySelector('.close-button');
    });

    // 2. Функция для открытия модала
    function openModal(modalElement) {
        modalElement.classList.remove('hidden');
        // Блокируем прокрутку основного тела, пока открыто модальное окно
        document.body.style.overflow = 'hidden';
    }

    // 3. Функция для закрытия модала
    function closeModal(modalElement) {
        modalElement.classList.add('hidden');
        document.body.style.overflow = 'auto'; // Возвращаем прокрутку
    }

    // 4. Назначение обработчиков кликов на окна дома
    windows.forEach(item => {
        const windowElement = document.getElementById(item.id);
        const modalElement = modals[item.id];

        windowElement.addEventListener('click', () => {
            openModal(modalElement);
        });

        // Обработчик закрытия по крестику
        closeButtons[item.id].addEventListener('click', () => {
            closeModal(modalElement);
        });
    });

    // 5. Закрытие по клику вне модального окна
    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', (e) => {
            // Проверяем, был ли клик сделан непосредственно на фоне модала, а не на его содержимом
            if (e.target.classList.contains('modal')) {
                closeModal(modal);
            }
        });
    });
});