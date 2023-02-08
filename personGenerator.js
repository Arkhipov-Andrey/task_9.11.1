const personGenerator = {
    surnameJson: `{  
        "count": 16,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,
    firstNameFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александра",
            "id_2": "Марина",
            "id_3": "Инна",
            "id_4": "Анастасия",
            "id_5": "Дарья",
            "id_6": "Надежда",
            "id_7": "Мария",
            "id_8": "Диана",
            "id_9": "Екатерина",
            "id_10": "Анна"
        }
    }`,
    patronymicMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александрович",
            "id_2": "Максимович",
            "id_3": "Иванович",
            "id_4": "Артемович",
            "id_5": "Дмитриевич",
            "id_6": "Никитич",
            "id_7": "Михаилович",
            "id_8": "Даниилович",
            "id_9": "Егорович",
            "id_10": "Андреевич"
        }
    }`,
    patronymicFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александровна",
            "id_2": "Максимовна",
            "id_3": "Ивановна",
            "id_4": "Артемовна",
            "id_5": "Дмитриевна",
            "id_6": "Никитична",
            "id_7": "Михаиловна",
            "id_8": "Данииловна",
            "id_9": "Егоровна",
            "id_10": "Андреевна"
        }
    }`,
    professionMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Начальник",
            "id_2": "Коммерсант",
            "id_3": "Водитель",
            "id_4": "Слесарь",
            "id_5": "Токарь",
            "id_6": "Каменщик",
            "id_7": "Грузчик",
            "id_8": "Военнослужащий",
            "id_9": "Сварщик",
            "id_10": "Электрик"
        }
    }`,
    professionFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Учитель",
            "id_2": "Бухгалтер",
            "id_3": "Уборщица",
            "id_4": "Ученый",
            "id_5": "Библиотекарь",
            "id_6": "Швея",
            "id_7": "Продавец",
            "id_8": "Диспетчер",
            "id_9": "Секретарь",
            "id_10": "Оператор ЭВМ"            
        }
    }`,

    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator
        return obj.list[prop];
    },

    randomFirstName: function () {
        if (this.person.gender === 'Мужчина') {
            return this.randomValue(this.firstNameMaleJson);
        } else {
            return this.randomValue(this.firstNameFemaleJson);
        };
    },


    randomSurname: function () {
        if (this.person.gender === 'Мужчина') {
            return this.randomValue(this.surnameJson);
        } else {
            return this.randomValue(this.surnameJson) + 'а';
        };
    },

    randomPatronymic: function () {
        if (this.person.gender === 'Мужчина') {
            return this.randomValue(this.patronymicMaleJson);
        } else {
            return this.randomValue(this.patronymicFemaleJson);
        };
    },

    randomProfession: function () {
        if (this.person.gender === 'Мужчина') {
            return this.randomValue(this.professionMaleJson);
        } else {
            return this.randomValue(this.professionFemaleJson);
        };
    },

    randomGender: function () {
        // Случайное число 0-1
        return (this.randomIntNumber()) ? this.GENDER_MALE : this.GENDER_FEMALE;
    },

    randomBirthYear: function () {
        // Получаем случайный год, уточняем обычный или високосный
        const year = this.randomIntNumber(2023, 1940);
        const leapYear = ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) ? true : false;
        // Получаем случайный месяц
        const arrMonth = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
        const numberManth = this.randomIntNumber(arrMonth.length - 1, 0);
        // const numberManth = Math.floor(Math.random() * (arrMonth.length)); // length - 12, random от 0-11
        const month = arrMonth[numberManth];
        // Получаем случайное число месяца, с ограничением числа по количеству дней в месяце и коррекцией февраля (28/29 дней)
        let arrDayPerMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        arrDayPerMonth[1] = (leapYear && numberManth === 1) ? arrDayPerMonth[1] + 1 : arrDayPerMonth[1];
        const number = this.randomIntNumber(arrDayPerMonth[numberManth], 1);
        // const number = Math.floor(Math.random() * arrDayPerMonth[numberManth] + 1);
        // Возвращаем строку с датой
        return `${number} ${month} ${year}`;
    },

    // Собираем персону в единое целое
    getPerson: function () {
        this.person = {};
        this.person.gender = this.randomGender();
        this.person.firstName = this.randomFirstName();
        this.person.surname = this.randomSurname();
        this.person.birthYear = this.randomBirthYear();
        this.person.patronymic = this.randomPatronymic();
        this.person.profession = this.randomProfession();
        return this.person;
    },
};
