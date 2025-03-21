// Базовый класс сотрудника (Employee)
// Содержит основные свойства и методы, общие для всех типов сотрудников

class Employee {
    /**
     * Конструктор базового класса Employee
     * @param {string} firstName - Имя сотрудника
     * @param {string} lastName - Фамилия сотрудника
     * @param {number} age - Возраст сотрудника
     * @param {string} position - Должность
     * @param {string} organization - Организация
     * @param {boolean} hasChildren - Наличие детей
     * @param {string} hireDate - Дата принятия на работу
     */
    constructor(firstName, lastName, age, position, organization, hasChildren, hireDate) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.position = position;
        this.organization = organization;
        this.hasChildren = hasChildren;
        this.hireDate = hireDate;
        // Генерируем уникальный ID для каждого сотрудника
        this.id = Date.now() + Math.floor(Math.random() * 1000);
    }

    // Методы-геттеры для получения значений свойств
    getFirstName() {
        return this.firstName;
    }
    getLastName() {
        return this.lastName;
    }
    getAge() {
        return this.age;
    }
    getPosition() {
        return this.position;
    }
    getOrganization() {
        return this.organization;
    }
    getHasChildren() {
        return this.hasChildren;
    }
    getHireDate() {
        return this.hireDate;
    }
    getId() {
        return this.id;
    }

    // Методы-сеттеры для установки значений свойств
    setFirstName(firstName) {
        this.firstName = firstName;
    }
    setLastName(lastName) {
        this.lastName = lastName;
    }
    setAge(age) {
        this.age = age;
    }
    setPosition(position) {
        this.position = position;
    }
    setOrganization(organization) {
        this.organization = organization;
    }
    setHasChildren(hasChildren) {
        this.hasChildren = hasChildren;
    }
    setHireDate(hireDate) {
        this.hireDate = hireDate;
    }

    /**
     * Метод для получения полного имени сотрудника
     * @return {string} Фамилия и имя сотрудника
     */
    getFullName() {
        return `${this.lastName} ${this.firstName}`;
    }

    /**
     * Метод для удаления сотрудника из массива
     * Возвращает новый массив без текущего сотрудника
     * @param {Array} entities - Массив сотрудников
     * @return {Array} Новый массив без текущего сотрудника
     */
    delete(entities) {
        return entities.filter(entity => entity.id !== this.id);
    }

    /**
     * Метод для получения типа сущности
     * @return {string} Тип сущности (employee)
     */
    getEntityType() {
        return "employee";
    }

    /**
     * Метод для получения всех свойств сотрудника в виде объекта
     * Используется для отображения в таблице
     * @return {Object} Объект со свойствами сотрудника
     */
    getAllProperties() {
        return {
            "Фамилия": this.lastName,
            "Имя": this.firstName,
            "Возраст": this.age,
            "Должность": this.position,
            "Организация": this.organization,
            "Наличие детей": this.hasChildren ? "Да" : "Нет",
            "Дата принятия": new Date(this.hireDate).toLocaleDateString()
        };
    }
}

/**
 * Класс Водитель (Driver) - наследуется от Employee
 * Расширяет базовый класс дополнительными свойствами и методами
 */
class Driver extends Employee {
    /**
     * Конструктор класса Driver
     * @param {string} firstName - Имя сотрудника
     * @param {string} lastName - Фамилия сотрудника
     * @param {number} age - Возраст сотрудника
     * @param {string} position - Должность
     * @param {string} organization - Организация
     * @param {boolean} hasChildren - Наличие детей
     * @param {string} hireDate - Дата принятия на работу
     * @param {string} licenseCategory - Категория водительских прав
     * @param {number} experience - Стаж вождения в годах
     */
    constructor(firstName, lastName, age, position, organization, hasChildren, hireDate, licenseCategory, experience) {
        // Вызываем конструктор родительского класса
        super(firstName, lastName, age, position, organization, hasChildren, hireDate);
        // Добавляем специфичные для водителя свойства
        this.licenseCategory = licenseCategory;
        this.experience = experience;
    }

    // Геттеры для специфичных свойств
    getLicenseCategory() {
        return this.licenseCategory;
    }
    getExperience() {
        return this.experience;
    }

    // Сеттеры для специфичных свойств
    setLicenseCategory(licenseCategory) {
        this.licenseCategory = licenseCategory;
    }
    setExperience(experience) {
        this.experience = experience;
    }

    /**
     * Переопределение метода получения типа сущности
     * @return {string} Тип сущности (driver)
     */
    getEntityType() {
        return "driver";
    }

    /**
     * Переопределение метода получения всех свойств
     * Включает базовые свойства и добавляет специфичные для водителя
     * @return {Object} Объект со всеми свойствами водителя
     */
    getAllProperties() {
        // Получаем базовые свойства от родительского класса
        const baseProps = super.getAllProperties();
        // Добавляем специфичные свойства водителя
        return {
            ...baseProps,
            "Категория прав": this.licenseCategory,
            "Стаж вождения": `${this.experience} лет`
        };
    }
}

/**
 * Класс Слесарь (Mechanic) - наследуется от Employee
 * Расширяет базовый класс дополнительными свойствами и методами
 */
class Mechanic extends Employee {
    /**
     * Конструктор класса Mechanic
     * @param {string} firstName - Имя сотрудника
     * @param {string} lastName - Фамилия сотрудника
     * @param {number} age - Возраст сотрудника
     * @param {string} position - Должность
     * @param {string} organization - Организация
     * @param {boolean} hasChildren - Наличие детей
     * @param {string} hireDate - Дата принятия на работу
     * @param {string} qualification - Квалификация (разряд)
     * @param {string} specialization - Специализация
     */
    constructor(firstName, lastName, age, position, organization, hasChildren, hireDate, qualification, specialization) {
        // Вызываем конструктор родительского класса
        super(firstName, lastName, age, position, organization, hasChildren, hireDate);
        // Добавляем специфичные для слесаря свойства
        this.qualification = qualification;
        this.specialization = specialization;
    }

    // Геттеры для специфичных свойств
    getQualification() {
        return this.qualification;
    }
    getSpecialization() {
        return this.specialization;
    }

    // Сеттеры для специфичных свойств
    setQualification(qualification) {
        this.qualification = qualification;
    }
    setSpecialization(specialization) {
        this.specialization = specialization;
    }

    /**
     * Переопределение метода получения типа сущности
     * @return {string} Тип сущности (mechanic)
     */
    getEntityType() {
        return "mechanic";
    }

    /**
     * Переопределение метода получения всех свойств
     * Включает базовые свойства и добавляет специфичные для слесаря
     * @return {Object} Объект со всеми свойствами слесаря
     */
    getAllProperties() {
        // Получаем базовые свойства от родительского класса
        const baseProps = super.getAllProperties();
        // Добавляем специфичные свойства слесаря
        return {
            ...baseProps,
            "Квалификация": this.qualification,
            "Специализация": this.specialization
        };
    }
}

/**
 * Класс EntityManager - менеджер сущностей
 * Управляет хранением, добавлением, удалением и отображением сущностей
 */
class EntityManager {
    /**
     * Конструктор класса EntityManager
     * Инициализирует пустой массив сущностей и загружает данные из localStorage
     */
    constructor() {
        this.entities = [];
        this.loadFromStorage();
    }

    /**
     * Метод для загрузки сущностей из localStorage
     * Преобразует JSON в объекты соответствующих классов
     */
    loadFromStorage() {
        // Получаем данные из localStorage
        const storedEntities = localStorage.getItem('entities');
        if (storedEntities) {
            // Парсим JSON
            const parsedEntities = JSON.parse(storedEntities);
            // Преобразуем обычные объекты в экземпляры классов
            this.entities = parsedEntities.map(entity => {
                // Определяем тип сущности по наличию специфичных свойств
                if (entity.licenseCategory) {
                    // Если есть licenseCategory, то это Driver
                    return new Driver(
                        entity.firstName,
                        entity.lastName,
                        entity.age,
                        entity.position,
                        entity.organization,
                        entity.hasChildren,
                        entity.hireDate,
                        entity.licenseCategory,
                        entity.experience
                    );
                } else if (entity.qualification) {
                    // Если есть qualification, то это Mechanic
                    return new Mechanic(
                        entity.firstName,
                        entity.lastName,
                        entity.age,
                        entity.position,
                        entity.organization,
                        entity.hasChildren,
                        entity.hireDate,
                        entity.qualification,
                        entity.specialization
                    );
                } else {
                    // В противном случае это базовый Employee
                    return new Employee(
                        entity.firstName,
                        entity.lastName,
                        entity.age,
                        entity.position,
                        entity.organization,
                        entity.hasChildren,
                        entity.hireDate
                    );
                }
            });
        }
    }

    /**
     * Метод для сохранения сущностей в localStorage
     * Преобразует массив объектов в JSON
     */
    saveToStorage() {
        localStorage.setItem('entities', JSON.stringify(this.entities));
    }

    /**
     * Метод для добавления новой сущности
     * @param {Object} entity - Объект сущности (Employee, Driver, Mechanic)
     */
    addEntity(entity) {
        // Добавляем сущность в массив
        this.entities.push(entity);
        // Сохраняем в localStorage
        this.saveToStorage();
        // Обновляем отображение таблицы
        this.renderTable();
    }

    /**
     * Метод для удаления сущности по ID
     * @param {number} id - ID сущности для удаления
     */
    deleteEntity(id) {
        // Находим сущность по ID
        const entityToDelete = this.entities.find(entity => entity.id === id);
        if (entityToDelete) {
            // Используем метод delete самой сущности для удаления
            this.entities = entityToDelete.delete(this.entities);
            // Сохраняем изменения
            this.saveToStorage();
            // Обновляем отображение
            this.renderTable();
        }
    }

    /**
     * Метод для отображения таблицы сущностей
     * Создает HTML-таблицу на основе данных всех сущностей
     */
    renderTable() {
        const tableContainer = document.getElementById('tableContainer');

        // Если нет сущностей, показываем сообщение
        if (this.entities.length === 0) {
            tableContainer.innerHTML = '<div class="empty-table">Нет данных для отображения</div>';
            return;
        }

        // Собираем все возможные ключи свойств из всех сущностей
        // Используем Set для исключения дубликатов
        const allKeys = new Set();
        this.entities.forEach(entity => {
            Object.keys(entity.getAllProperties()).forEach(key => allKeys.add(key));
        });

        // Создаем HTML для таблицы
        let tableHTML = '<table>';

        // Создаем заголовок таблицы
        tableHTML += '<thead><tr>';
        allKeys.forEach(key => {
            tableHTML += `<th>${key}</th>`;
        });
        tableHTML += '<th>Действия</th></tr></thead>';

        // Создаем тело таблицы
        tableHTML += '<tbody>';
        this.entities.forEach(entity => {
            tableHTML += '<tr>';
            const properties = entity.getAllProperties();

            // Добавляем ячейки для всех свойств
            allKeys.forEach(key => {
                // Если свойство отсутствует у данной сущности, выводим дефис
                tableHTML += `<td>${properties[key] || '-'}</td>`;
            });

            // Добавляем кнопку удаления с ID сущности
            tableHTML += `<td><button class="delete-btn" data-id="${entity.id}">Удалить</button></td>`;
            tableHTML += '</tr>';
        });

        tableHTML += '</tbody></table>';
        tableContainer.innerHTML = tableHTML;

        // Добавляем обработчики событий для кнопок удаления
        document.querySelectorAll('.delete-btn').forEach(button => {
            button.addEventListener('click', () => {
                const id = parseInt(button.getAttribute('data-id'));
                this.deleteEntity(id);
            });
        });
    }
}

// Инициализируем менеджер сущностей
const entityManager = new EntityManager();

/**
 * Обработчик события изменения типа сущности в выпадающем списке
 * Динамически меняет форму в зависимости от выбранного типа
 */
document.getElementById('entityType').addEventListener('change', function () {
    const dynamicFields = document.getElementById('dynamicFields');
    const entityType = this.value;

    let fieldsHTML = '';

    // В зависимости от типа сущности показываем разные поля
    if (entityType === 'driver') {
        // Поля для водителя
        fieldsHTML = `
            <div class="form-group">
                <label for="licenseCategory">Категория прав:</label>
                <select id="licenseCategory" required>
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
                    <option value="D">D</option>
                    <option value="E">E</option>
                </select>
            </div>
            <div class="form-group">
                <label for="experience">Стаж вождения (лет):</label>
                <input type="number" id="experience" min="0" max="60" required>
            </div>
        `;
    } else if (entityType === 'mechanic') {
        // Поля для слесаря
        fieldsHTML = `
            <div class="form-group">
                <label for="qualification">Квалификация:</label>
                <select id="qualification" required>
                    <option value="1">1 разряд</option>
                    <option value="2">2 разряд</option>
                    <option value="3">3 разряд</option>
                    <option value="4">4 разряд</option>
                    <option value="5">5 разряд</option>
                    <option value="6">6 разряд</option>
                </select>
            </div>
            <div class="form-group">
                <label for="specialization">Специализация:</label>
                <input type="text" id="specialization" required>
            </div>
        `;
    }

    // Обновляем HTML с динамическими полями
    dynamicFields.innerHTML = fieldsHTML;
});

/**
 * Обработчик события отправки формы
 * Создает новую сущность на основе данных формы
 */
document.getElementById('entityForm').addEventListener('submit', function (e) {
    // Предотвращаем стандартное поведение формы
    e.preventDefault();

    // Получаем значения полей формы
    const entityType = document.getElementById('entityType').value;
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const age = parseInt(document.getElementById('age').value);
    const position = document.getElementById('position').value;
    const organization = document.getElementById('organization').value;
    const hasChildren = document.getElementById('hasChildren').checked;
    const hireDate = document.getElementById('hireDate').value;

    let entity;

    // Создаем объект соответствующего класса в зависимости от типа
    if (entityType === 'driver') {
        // Получаем дополнительные поля для водителя
        const licenseCategory = document.getElementById('licenseCategory').value;
        const experience = parseInt(document.getElementById('experience').value);

        // Создаем объект Driver
        entity = new Driver(
            firstName,
            lastName,
            age,
            position,
            organization,
            hasChildren,
            hireDate,
            licenseCategory,
            experience
        );
    } else if (entityType === 'mechanic') {
        // Получаем дополнительные поля для слесаря
        const qualification = document.getElementById('qualification').value;
        const specialization = document.getElementById('specialization').value;

        // Создаем объект Mechanic
        entity = new Mechanic(
            firstName,
            lastName,
            age,
            position,
            organization,
            hasChildren,
            hireDate,
            qualification,
            specialization
        );
    } else {
        // Если тип не выбран, показываем ошибку
        alert('Пожалуйста, выберите тип сотрудника');
        return;
    }

    // Добавляем созданную сущность в менеджер
    entityManager.addEntity(entity);
    // Сбрасываем форму
    this.reset();
    // Очищаем динамические поля
    document.getElementById('dynamicFields').innerHTML = '';
});

// Инициализируем таблицу при загрузке страницы
entityManager.renderTable();