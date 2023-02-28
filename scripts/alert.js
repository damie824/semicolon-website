const form = document.getElementById('join-form-id');
const bg = document.getElementById('form-bg')
const submitMsg = document.getElementById('submit-msg');

function onSubmit(event) {
    event.preventDefault();
    bg.style.width = '100%';
    form.style.display = 'none';
    submitMsg.style.display = 'block';
}
