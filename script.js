// Getting all buttons on the left and submit button 
const allButtons = document.querySelectorAll('.js-btn-selection');
const nextPage = document.querySelector('.js-submit-btn');
const pageTwo = document.querySelector('.btn-2');
const pageThree = document.querySelector('.btn-3');
const pageFour = document.querySelector('.btn-4');


// The month and year change in the toggle btn
const yearColor = document.querySelector('.js-year');
const monthColor = document.querySelector('.js-month');


// Getting all the display pages
const personalInfoPage = document.querySelector('.js-personal-info');
const monthlyBillingPlan = document.querySelector('.js-monthly-billing-plan');
const monthlyPickOns = document.querySelector('.js-monthly-pick-ons');
const monthlyFinishingUp = document.querySelector('.js-monthly-finishing-up');
const yearlyBillingPlan = document.querySelector('.js-yearly-billing-plan');


// Getting the error from the personal form
const nameError = document.querySelector('.js-name-error');
const emailError = document.querySelector('.js-email-error');
const phoneError = document.querySelector('.js-phone-error');


// Getting all the input fields
const nameInputElement = document.querySelector('.js-name-input');
const emailInputElement = document.querySelector('.js-email-input');
const phoneNumberInputElement = document.querySelector('.js-phone-number-input');


// Getting the monthly plan selection page
const arcadeMonthlyPlan = document.querySelector('.js-monthly-plan-1');
const advancedMonthlyPlan = document.querySelector('.js-monthly-plan-2');
const proMonthlyPlan = document.querySelector('.js-monthly-plan-3');


// Toggle button
const toggleButton = document.querySelector('.js-toggle-btn');
const toggle = document.getElementById("toggle");



function pageTwoDisplay(month, year, monCo, yeCo) {
    month.style.display = 'none';
    year.style.display = 'block';
    monCo.style.color = 'hsl(231, 11%, 63%)';
    yeCo.style.colr = 'hsl(213, 96%, 18%)';
}


function setErrorDisplay(error, message, inputElement) {
    error.style.display = 'block';
    error.innerHTML = message;
    inputElement.style.border = '2px solid hsl(354, 84%, 57%)';
}

function clearErrorDisplay(error, inputElement) {
    error.style.display = 'none';
    inputElement.style.border = '1px solid hsl(217, 100%, 97%)';
}

let isToggled = false;

function toggleBtn() {
    isToggled = !isToggled;
    if (isToggled) {
        pageTwoDisplay(monthlyBillingPlan, yearlyBillingPlan, monthColor, yearColor);
    } else {
        monthlyBillingPlan.style.display = 'block';
        yearlyBillingPlan.style.display = 'none';
        monthColor.style.color = 'hsl(213, 96%, 18%)';
        yearColor.style.color = 'hsl(231, 11%, 63%)';
    }
}




allButtons.forEach((button) => {
    button.addEventListener('click', () => {
        allButtons.forEach((btn) => {
            btn.classList.remove('clicked');
        });
        button.classList.add('clicked');

        if (button.id === 'one') {
            personalInfoPage.style.display = 'block';
            nextPage.style.display = 'block';
            yearlyBillingPlan.style.display = 'none';

            
            nameInputElement.addEventListener('blur', () => {
                if (nameInputElement.value === '' || !isNaN(nameInputElement.value)) {
                    setErrorDisplay(nameError, 'Name cannot be a digit / empty.', nameInputElement);
                } else {
                    clearErrorDisplay(nameError, nameInputElement);
                };
            });

            nameInputElement.addEventListener('input', () => {
                clearErrorDisplay(nameError, nameInputElement);
            });

            emailInputElement.addEventListener('blur', () => {
                if (!emailInputElement.validity.valid || emailInputElement.value.trim() === '') {
                    setErrorDisplay(emailError, 'Email is not valid', emailInputElement);
                } else {
                    clearErrorDisplay(emailError, emailInputElement);
                };
            });

            emailInputElement.addEventListener('input', () => {
                clearErrorDisplay(emailError, emailInputElement);
            });

            phoneNumberInputElement.addEventListener('blur', () => {
                const phoneRegex = /^\+234\d{10}$/;
                if (phoneNumberInputElement.value === '') {
                    setErrorDisplay(phoneError, 'Please enter a phone number', phoneNumberInputElement);
                } else if (!phoneRegex.test(phoneNumberInputElement.value)) {
                    setErrorDisplay(phoneError, "Please  enter a valid phone number in +234 format", phoneNumberInputElement);
                } else {
                    clearErrorDisplay(phoneError, phoneNumberInputElement);
                }
            })

            phoneNumberInputElement.addEventListener('input', () => {
                clearErrorDisplay(phoneError, phoneNumberInputElement);
            })

            nextPage.addEventListener('click', () => {
                const phoneRegex = /^\+234\d{10}$/;
                if (nameInputElement.value !== '' && isNaN(nameInputElement.value) && emailInputElement.validity.valid && emailInputElement.value.trim() !== '' && phoneNumberInputElement.value !== '' && phoneRegex.test(phoneNumberInputElement.value) && button.id === 'one') {
                    monthlyBillingPlan.style.display = 'block'; 
                    personalInfoPage.style.display = 'none';
                    if (button.id === 'one') {
                        button.classList.remove('clicked');
                        pageTwo.classList.add('clicked');
                    }
                }
            })

        } else {
            personalInfoPage.style.display = 'none';
            // nextPage.style.display = 'none';
        }






        if (button.id === 'two') {
            monthlyBillingPlan.style.display = 'block';
            toggleButton.style.display = 'block' ;
            nextPage.style.display = 'block';

            toggle.addEventListener('change', () => {
                toggleBtn();
            });



        } else {
            monthlyBillingPlan.style.display = 'none';
            toggleButton.style.display = 'none';
        }





        if (button.id === 'three') {
            monthlyPickOns.style.display = 'block'; 
            yearlyBillingPlan.style.display = 'none';
            nextPage.style.display = 'block';
        } else {
            monthlyPickOns.style.display = 'none';
        }




        if (button.id === 'four') {
            monthlyFinishingUp.style.display = 'block';
            yearlyBillingPlan.style.display = 'none';
            nextPage.style.display = 'block';

            nextPage.innerHTML = 'Confirm';
        } else {
            monthlyFinishingUp.style.display = 'none';
            nextPage.innerHTML = 'Next Step';
        }
    });
});