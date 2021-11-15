import './styles.scss'
document.getElementById('btn').addEventListener('click', () => {
    let reqLength = document.getElementById('length')

    fetch("https://passgen-abelgarcia2.netlify.app/:4000" + reqLength.value).then(res => res.json()).then(res => {
        document.getElementById('pass').innerHTML = res.pass
    })

})