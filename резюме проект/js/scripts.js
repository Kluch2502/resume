const addSectionButton = document.getElementById('add-section-button');
const dropdownContent = document.getElementById('dropdown-content');
const sectionsContainer = document.getElementById('sections-container');
let hideTimeout;

addSectionButton.addEventListener('click', function() {
    dropdownContent.classList.toggle('show');
});

addSectionButton.addEventListener('mouseenter', function() {
    clearTimeout(hideTimeout);
    dropdownContent.classList.add('show');
});

addSectionButton.addEventListener('mouseleave', function() {
    hideTimeout = setTimeout(function() {
        dropdownContent.classList.remove('show');
    }, 300); // Задержка в миллисекундах перед скрытием списка
});

dropdownContent.addEventListener('mouseenter', function() {
    clearTimeout(hideTimeout);
    dropdownContent.classList.add('show');
});

dropdownContent.addEventListener('mouseleave', function() {
    hideTimeout = setTimeout(function() {
        dropdownContent.classList.remove('show');
    }, 300); // Задержка в миллисекундах перед скрытием списка
});

const buttonsConfig = [
    { id: 'skills-button', className: 'skill', content: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'] },
    { id: 'additional-info-button', className: 'additional-info', content: ['Курс по дизайну', 'Участие в хакатонах'] },
    { id: 'languages-button', className: 'languages', content: ['Английский', 'Русский', 'Испанский'] },
    { id: 'driving-license-button', className: 'driving-license', content: ['Категория B', 'Категория C'] }
];

buttonsConfig.forEach(button => {
    document.getElementById(button.id).addEventListener('click', function() {
        if (button.id === 'skills-button') {
            addSkillsSection();
        } else if (button.id === 'additional-info-button') {
            addAdditionalInfoSection();
        } else if (button.id === 'languages-button') {
            addLanguagesSection();
        } else if (button.id === 'driving-license-button') {
            addDrivingLicenseSection();
        }
        if (button.id === 'driving-license-button') {
            document.getElementById(button.id).remove();
        }
    });
});

function addSkillsSection() {
    const section = document.createElement('div');
    section.className = 'section';

    const title = document.createElement('h2');
    title.textContent = 'Навыки';
    section.appendChild(title);

    const form = document.createElement('form');
    form.innerHTML = '<label for="skill">Навык:</label><input type="text" id="skill" name="skill"><br><label for="level">Уровень владения:</label><input type="text" id="level" name="level">';
    section.appendChild(form);

    sectionsContainer.insertBefore(section, sectionsContainer.firstChild);
}

function addAdditionalInfoSection() {
    const section = document.createElement('div');
    section.className = 'section';

    const title = document.createElement('h2');
    title.textContent = 'Дополнительная информация';
    section.appendChild(title);

    const form = document.createElement('form');
    form.innerHTML = '<label for="additional-info">Дополнительная информация:</label><input type="text" id="additional-info" name="additional-info">';
    section.appendChild(form);

    sectionsContainer.insertBefore(section, sectionsContainer.firstChild);
}

function addLanguagesSection() {
    const section = document.createElement('div');
    section.className = 'section';

    const title = document.createElement('h2');
    title.textContent = 'Языки';
    section.appendChild(title);

    const form = document.createElement('form');
    form.innerHTML = '<label for="language">Язык:</label><input type="text" id="language" name="language"><br><label for="language-level">Уровень владения:</label><input type="text" id="language-level" name="language-level">';
    section.appendChild(form);

    sectionsContainer.insertBefore(section, sectionsContainer.firstChild);
}

function addDrivingLicenseSection() {
    const section = document.createElement('div');
    section.className = 'section';

    const title = document.createElement('h2');
    title.textContent = 'Водительские права';
    section.appendChild(title);

    const checkboxes = document.createElement('div');
    checkboxes.innerHTML = '<input type="checkbox" id="category-a" name="category-a"><label for="category-a">Категория A</label><br><input type="checkbox" id="category-b" name="category-b"><label for="category-b">Категория B</label><br><input type="checkbox" id="category-c" name="category-c"><label for="category-c">Категория C</label><br><input type="checkbox" id="category-d" name="category-d"><label for="category-d">Категория D</label><br><input type="checkbox" id="category-e" name="category-e"><label for="category-e">Категория E</label><br>';
    section.appendChild(checkboxes);

    sectionsContainer.insertBefore(section, sectionsContainer.firstChild);
}


//