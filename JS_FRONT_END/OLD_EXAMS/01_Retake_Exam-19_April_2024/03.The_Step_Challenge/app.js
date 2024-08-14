function attachEvents () {

    const BASE_URL = 'http://localhost:3030/jsonstore/records';

    const loadButtonEl = document.getElementById('load-records');
    const gameListEl = document.getElementById('list');

// ****** FORM ******
    const formElement = document.querySelector('#form form');

// ****** FORM BUTTONS ******
    const addButtonEl = document.getElementById('add-record');
    const editButtonEl = document.getElementById('edit-record');

// ****** INPUTS ****** 
    const inputNameEl = document.getElementById('p-name');
    const inputStepsEl = document.getElementById('steps');
    const inputCaloriesEl = document.getElementById('calories');

// ****** CLEAR INPUTS ****** 
    function clearInputs() {
        inputNameEl.value = '';
        inputStepsEl.value = '';
        inputCaloriesEl.value = '';
    }

// ****** LOAD RECORDS ****** 
    async function loadRecords() {
        // clear game list
        gameListEl.innerHTML = '';

        // send GET request
        const response = await fetch(BASE_URL);
        const result = await response.json();
        const records = Object.values(result);

        // create record elements
        const recordElements = records.map((record) =>
            createRecordEl(record.name, record.steps,
                record.calories, record._id));

        // records to game list
        gameListEl.append(...recordElements);


    }

// ****** CREATE RECORD ******
    function createRecordEl(name, steps, calories, id) {
        const pNameEl = document.createElement('p');
        const pStepsEl = document.createElement('p');
        const pCaloriesEl = document.createElement('p');

        pNameEl.textContent = name;
        pStepsEl.textContent = steps;
        pCaloriesEl.textContent = calories;

        const divInfoEl = document.createElement('div');
        divInfoEl.classList.add('info');
        divInfoEl.appendChild(pNameEl);
        divInfoEl.appendChild(pStepsEl);
        divInfoEl.appendChild(pCaloriesEl);

        const changeButtonEl = document.createElement('button');
        changeButtonEl.classList.add('change-btn');
        changeButtonEl.textContent = 'Change';

        // ****** EVENT ON CHANGE ******
        changeButtonEl.addEventListener('click', () => {
            // FILL INPUT FIELDS
            inputNameEl.value = name;
            inputStepsEl.value = steps;
            inputCaloriesEl.value = calories;

            // EDIT BUTTON ACTIVATE
            editButtonEl.removeAttribute('disabled');

            // ADD BUTTON DEACTIVATE
            addButtonEl.setAttribute('disabled', 'disabled');

            // SET ATTRIBUTE ELEMENT TO FORM
            formElement.setAttribute('data-record-id', id);

        });

        const deleteButtonEl = document.createElement('button');
        deleteButtonEl.classList.add('delete-btn');
        deleteButtonEl.textContent = 'Delete';

        // ****** EVENT ON DELETE ******
        deleteButtonEl.addEventListener('click', async () => {
            await fetch(`${BASE_URL}/${id}`, {
                method: 'DELETE',
            });

            // LOAD ALL GAMES
            await loadRecords();
        });

        const divButtonsEl = document.createElement('div');
        divButtonsEl.classList.add('btn-wrapper');
        divButtonsEl.appendChild(changeButtonEl);
        divButtonsEl.appendChild(deleteButtonEl);

        const liRecordEl = document.createElement('li');
        liRecordEl.classList.add('record');
        liRecordEl.appendChild(divInfoEl);
        liRecordEl.appendChild(divButtonsEl);

        return liRecordEl;
    }

// ****** LOAD BUTTON ******
    loadButtonEl.addEventListener('click', loadRecords);

// ****** ADD RECORD ****** 
    async function addRecordHandler() {
        // ****** GET INPUT VALUES ****** 
        const name = inputNameEl.value;
        const steps = inputStepsEl.value;
        const calories = inputCaloriesEl.value;

        // ****** CLEAR INPUTS ******
        clearInputs();

        // ****** CREATE POST REQUEST ******
        await fetch(BASE_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({name, steps, calories}),
        });

        await loadRecords();
    }

// ****** ADD BUTTON ******
    addButtonEl.addEventListener('click', addRecordHandler);

// ****** EDIT RECORD ******
    async function editRecordHandler() {
        // GET INFO FROM INPUT
        const name = inputNameEl.value;
        const steps = inputStepsEl.value;
        const calories = inputCaloriesEl.value;

        // GET ID ELEMENT FROM FORM
        const id = formElement.getAttribute('data-record-id');

        // CLEAR INPUTS
        clearInputs();

        // SEND PUT REQUEST
        await fetch(`${BASE_URL}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({name, steps, calories, _id: id}),
        });

        // LOAD ALL RECORDS
        await loadRecords();

        // EDIT BUTTON DEACTIVATE
        editButtonEl.setAttribute('disabled', 'disabled');

        // ADD BUTTON ACTIVATE
        addButtonEl.removeAttribute('disabled');

        // REMOVE FORM ATTRIBUTE
        formElement.removeAttribute('data-record-id');

    }

// ****** EDIT BUTTON ******
    editButtonEl.addEventListener('click', editRecordHandler)

}

attachEvents();

