
document.querySelector('.btn-group .btn[href="resume.html"]').addEventListener('click', function (event) {
    event.preventDefault();
    showLoader('resume.html');
});