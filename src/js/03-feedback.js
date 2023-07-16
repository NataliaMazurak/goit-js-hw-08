import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form');

const emailInput = document.querySelector('input[name="email"]');
const messageInput = document.querySelector('textarea[name="message"]');

const LOCALSTORAGE_KEY = 'feedback-form-state';

feedbackForm.addEventListener('submit', onFormSubmit);
feedbackForm.addEventListener('input', throttle(handleSubmit, 500));

populateForm();
const savedForm = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)) || {};

// onFormSubmit - очищає поля форми та видаляє дані з localStorage

function onFormSubmit(event) {
  event.preventDefault();
  event.currentTarget.reset();
  localStorage.removeItem(LOCALSTORAGE_KEY);
  console.log(savedForm)
}

// handleSubmit - отримуємо та оновлюємо дані форми в localStorage

function handleSubmit(event) {
  savedForm[event.target.name] = event.target.value;
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(savedForm));
 

}

// populateForm() - заповняємо поля форми значеннями що збережені в localStorage

function populateForm(event) {
    const savedForm = localStorage.getItem(LOCALSTORAGE_KEY);
 
    if (savedForm) {
    const formFields = JSON.parse(savedForm);
    emailInput.value = formFields.email;
    messageInput.value = formFields.message;
  
    }
  
  }