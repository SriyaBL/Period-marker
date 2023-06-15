
window.addEventListener('DOMContentLoaded', () => {

    const trackButton = document.getElementById('track-button');
    const periodList = document.getElementById('period-list');



    trackButton.addEventListener('click', function () {
        const currentDate = new Date();
        const formattedDate = `${currentDate.getDay()}, ${currentDate.getDate()} - ${currentDate.getMonth() + 1} - ${currentDate.getFullYear()}`;

        const periodDates = JSON.parse(localStorage.getItem('periodDates'));
        periodDates.push(formattedDate);

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
                renderPeriodItems();
            });

            listItem.appendChild(deleteButton);
            periodList.appendChild(listItem);

        }

    }


});