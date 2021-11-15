import './styles.scss'
document.getElementById('btn').addEventListener('click', () => {
    let reqLength = document.getElementById('length')

    fetch("http://localhost:4000/password/" + reqLength.value).then(res => res.json()).then(res => {
        document.getElementById('pass').innerHTML = res.pass
    })

})