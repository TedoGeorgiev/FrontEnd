window.addEventListener("load", solve);

function solve() {

    const typeInputEl = document.getElementById('type');
    const ageInputEl = document.getElementById('age');
    const genderInputEl = document.getElementById('gender');

    const adoptButtonEL = document.getElementById('adopt-btn');

    const ulListElements = document.getElementById('adoption-info');
    const ulAdoptedElements = document.getElementById('adopted-list');


    function clearInputs () {
        typeInputEl.value = '';
        ageInputEl.value = '';
        genderInputEl.value = '';
    }

    function createLiElement(type, age, gender) {
        const pNameEl = document.createElement('p');
        const pAgeEl = document.createElement('p');
        const pGenderEl = document.createElement('p');
        pNameEl.textContent = `Pet:${type}`;
        pAgeEl.textContent = `Age:${age}`;
        pGenderEl.textContent = `Gender:${gender}`;

        const articleElement = document.createElement('article');
        articleElement.appendChild(pNameEl);
        articleElement.appendChild(pGenderEl);
        articleElement.appendChild(pAgeEl);

        const editButtonEl = document.createElement('button');
        editButtonEl.classList.add('edit-btn');
        editButtonEl.textContent = 'Edit';

        editButtonEl.addEventListener('click', () => {
            typeInputEl.value = type;
            ageInputEl.value = age;
            genderInputEl.value = gender;
            liElement.remove();
        })

        const doneButtonEl = document.createElement('button');
        doneButtonEl.classList.add('done-btn');
        doneButtonEl.textContent = 'Done';

        doneButtonEl.addEventListener('click', () => {
            divButtonsEl.remove();
            const clearButtonEl = document.createElement('button');
            clearButtonEl.classList.add('clear-btn');
            clearButtonEl.textContent = 'Clear';

            clearButtonEl.addEventListener('click', () => {
                liElement.remove();
            });

            liElement.appendChild(clearButtonEl);

            ulAdoptedElements.appendChild(liElement);
        });

        const divButtonsEl = document.createElement('div');
        divButtonsEl.classList.add('buttons');
        divButtonsEl.appendChild(editButtonEl);
        divButtonsEl.appendChild(doneButtonEl);

        const liElement = document.createElement('li');
        liElement.appendChild(articleElement);
        liElement.appendChild(divButtonsEl);

        return liElement;
    }

    adoptButtonEL.addEventListener('click', (e) => {
        e.preventDefault();

        const type = typeInputEl.value;
        const age = ageInputEl.value;
        const gender = genderInputEl.value;
        if (!type || !age || !gender) {
            return;
        }

        const liElement = createLiElement(type, age, gender);
        ulListElements.appendChild(liElement);

        clearInputs();
    });
}