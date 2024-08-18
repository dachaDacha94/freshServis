let acc = document.getElementsByClassName("answer__accordeon");
let i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener('click', function() {
        this.classList.toggle('active');

        let content = this.nextElementSibling;
        if (content.style.display === 'block') {
            content.style.display == 'none';
        } else {
            content.style.display = 'block';
        }
    });
}