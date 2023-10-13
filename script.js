document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form');
    const tableBody = document.getElementById('table-body');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const firstName = document.getElementById('first-name').value;
        const lastName = document.getElementById('last-name').value;
        const address = document.getElementById('address').value;
        const pincode = document.getElementById('pincode').value;
        const gender = document.querySelector('input[name="gender"]:checked').value;
        const foodItems = document.querySelectorAll('input[name="food"]:checked');
        const state = document.getElementById('state').value;
        const country = document.getElementById('country').value;

        if (!validateForm(firstName, lastName, address, pincode, gender, foodItems, state, country)) {
            return;
        }

        const newRow = tableBody.insertRow();
        const cell1 = newRow.insertCell(0);
        const cell2 = newRow.insertCell(1);
        const cell3 = newRow.insertCell(2);
        const cell4 = newRow.insertCell(3);
        const cell5 = newRow.insertCell(4);
        const cell6 = newRow.insertCell(5);
        const cell7 = newRow.insertCell(6);
        const cell8 = newRow.insertCell(7);

        cell1.innerHTML = FirstName;
        cell2.innerHTML = LastName;
        cell3.innerHTML = Address;
        cell4.innerHTML = pincode;
        cell5.innerHTML = Gender;
        cell6.innerHTML = getSelectedFood(foodItems); //biriyani,noodles,idly
        cell7.innerHTML = State;
        cell8.innerHTML = Country;

        form.reset();
    });

    //foodItems = [{label: "", value: ""}]

    function getSelectedFood(foodItems) {
        const selectedFood = [];
        foodItems.forEach((item) => {
            selectedFood.push(item.value);
        });
        // ["biriyani","noodles","idly"]
        return selectedFood.join(', ');
        "biriyani,noodles,idly"
    }

    function validateForm(firstName, lastName, address, pincode, gender, foodItems, state, country) {
        if (!firstName || !lastName || !address || !pincode || !gender || foodItems.length < 2 || !state || !country) {
            alert('Please fill out all the required fields correctly.');
            return false;
        }
        return true;
    }
});
