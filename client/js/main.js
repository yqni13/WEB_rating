function rate(e) {
    const stars = document.getElementsByClassName('star');
    [...stars].map((star) => star.classList.remove('hovered'));
    e.classList.add('hovered');

    let points = ['Bad', 'Hope', 'Average', 'Good', 'Excellent'];
    document.getElementById('rating').innerHTML = points[e.getAttribute('data-value') - 1];
    console.log(e.getAttribute('data-value'));
}