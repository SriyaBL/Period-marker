
const dayMap = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const monthMap = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

window.addEventListener('DOMContentLoaded', () => {

    const trackButton = document.getElementById('track-button');
    const periodList = document.getElementById('period-list');
    const descriptionElement = document.getElementById('description-input');


    trackButton.addEventListener('click', function () {
        const currentDate = new Date();
        const day = currentDate.getDay();
        const month = currentDate.getMonth();
        const formattedDate = 
        `
        ${currentDate.getDay()}, ${currentDate.getDate()} - ${currentDate.getMonth() + 1} - ${currentDate.getFullYear()}
        
        ${descriptionElement.value}
        `;


        let periodDates = JSON.parse(localStorage.getItem('periodDates'));

        if(!periodDates)
        {
            periodDates = [formattedDate];
        }
        else
        {
            periodDates.push(formattedDate);
        }
        //save date to local storage
        localStorage.setItem('periodDates', JSON.stringify(periodDates));

        renderPeriodItems();
    });

    function renderPeriodItems() {

        periodList.innerHTML = '';
        const periodDates = JSON.parse(localStorage.getItem('periodDates'))

        for (let i = 0; i < periodDates.length; i++) {
            const listItem = document.createElement('li');
            listItem.textContent = periodDates[i];

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.addEventListener('click', (i) => {
                periodDates.splice(i, 1);
                localStorage['periodDates'] = JSON.stringify(periodDates);
                renderPeriodItems();
            });

            listItem.appendChild(deleteButton);
            periodList.appendChild(listItem);

        }

    }

    renderPeriodItems();

});