

// var audio = new Audio('alert.mp3');


const Spiner = document.getElementById('spiner');
const Active = document.getElementById('Active');

Active.addEventListener('click', () => {
    Spiner.classList.remove('switch')
})


const ClearForm = () => {
    var name = document.getElementById('name').value;
    name = '';
}


function SendMail() {



    var templateParams = {
        to_name: "Bhardwaj Infotect team",
        from_name: document.getElementById('name').value,
        project_name: document.getElementById('project').value,
        message: document.getElementById('message').value,

    };

    emailjs.send('service_dzj3mlq', 'template_shtugeo', templateParams)
        .then(function (response) {

            console.log('SUCCESS!', response.status, response.text);
            document.getElementById("contactForm").reset();
            Spiner.classList.add('switch')


        }, function (error) {
            console.log('FAILED...', error);
        });
}


