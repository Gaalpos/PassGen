import './styles.scss'
document.getElementById('btn').addEventListener('click', () => {
    let reqLength = document.getElementById('length')

    fetch("https://pas-gen.herokuapp.com/password/" + reqLength.value).then(res => res.json()).then(res => {
        document.getElementById('pass').innerHTML = res[0].pass
    })

})