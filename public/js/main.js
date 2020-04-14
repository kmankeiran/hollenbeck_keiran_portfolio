// this is a partially revealing module pattern - just a variation on what we've already done


(function(){

    const form = document.querySelector('form'), submit = form.querySelector('.submit-button');
    console.log("SEAF Fired");
    
    //save shortcut to button in DOM
    var button = document.querySelector("#button");
    var burgerCon = document.querySelector("#burgerCon")
    
    function hamburgerMenu() {
        console.log("Clicked Worked")
        burgerCon.classList.toggle("slideToggle");
        button.classList.toggle("expanded");
    }
    
    function handleMail(event) {
        
        event.preventDefault();

        // formdata will be the values of the fields the user fills out (the inputs)
        // maildata is an object we'll build and send through with those values

        let formdata = new FormData(form),

            maildata = {};

        // parse the form data (it's an iterable, so you have to do it this way)
        // and populate the maildata object with the input values (the formdata entries)

        for (let [key, value] of formdata.entries()) {
            maildata[key] = value;
        }

        let url = `/mail`;

        // use the POST superglobal which is more secure than GET, and hit the /mail route in index.js
        // inside the routes folder. this will take in the formdata we're sending, and use that to send our email

        fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-type': 'application/json'
            },
            body: JSON.stringify(maildata)
        })
            .then(res => res.json())
            .then(data => {
                // remove this when testing is done and everything is working
                console.log(data);

                if (data.response.includes("OK")) {
                    // we successfully sent an email via gmail and nodemailer!
                    // flash success here, reset the form
                    form.reset();
                    alert("email was sent!"); // DO NOT use alerts. they are so hacky and gross.
                }
            }) // this will be a success or fail message from the server
            .catch((err) => console.log(err));
        console.log('tried sending mail');
    }
    button.addEventListener("click", hamburgerMenu);
    form.addEventListener('submit', handleMail);
})();

const myVM = (() => {
    // get the user buttons and fire off an async DB query with Fetch
    let userButtons = document.querySelectorAll('.u-link'),
        lightbox = document.querySelector('.lightbox');
    
    function renderSocialMedia(socialMedia) {
        return `<ul class="u-social">
                ${socialMedia.map(item => `<li>${item}</li>`).join('')}
            </ul>`
    }

    function parseUserData(person) { // person is the database result
        let targetDiv = document.querySelector('.lb-content'),
            targetImg = lightbox.querySelector('img');
        
        let bioContent = `
            <p>${person.Info}<p>
            <hr>
            <h4>Link:</h4>
            <p>${person.Link}<p>
        `;

        console.log(bioContent);

        targetDiv.innerHTML = bioContent;
        targetImg.src = person.imgsrc;

        lightbox.classList.add('show-lb');
    }

    function getUserData(event) {
        event.preventDefault(); // kill the default a tag behaviour (don't navigate anywhere)
        // debugger;
        // find the image closest to the anchor tag and get its src property
        let imgSrc = this.previousElementSibling.getAttribute('src');

        let url = `/users/${this.getAttribute('href')}`; // /1

        fetch(url) // go get the data 
            .then(res => res.json()) // parse the json result into a plain object
            .then(data => {
                console.log("my database result is: ", data)

                data[0].imgsrc = imgSrc;

                parseUserData(data[0]);
            })
            .catch((err) => {
                console.log(err)
            });
    }

    userButtons.forEach(button => button.addEventListener('click', getUserData));

    lightbox.querySelector('.close').addEventListener('click', function() {
        lightbox.classList.remove('show-lb');
    });

})();