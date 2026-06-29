fetch("./dates.json").then((response) => response.json()).then((response) => {
    const files = response.files;
    const slides = response.slides;
    const links = response.links;
    const feedbackContainer = response.feedback;
    
    if (!checkDates(files, 'files')) {
        document.getElementsByClassName('no-files')[0].style.display = 'none';
    }
    
    if (!checkDates(slides, 'slides')) {
        document.getElementsByClassName('no-slides')[0].style.display = 'none';
    }
    
    if (!checkDates(links, 'links')) {
        document.getElementsByClassName('no-links')[0].style.display = 'none';
    }
    
    checkDates(feedbackContainer, 'feedback-container');
});

function checkDates(dates, parentClassName) {
    var hide = true;
    const dateTime = new Date();
    dates.forEach((obj) => {
        if (dateTime > new Date(obj.release_date)) {
            document.querySelectorAll("." + parentClassName + ' .' + obj.class_name).forEach(element => {
                element.style.display = 'block';
            })
            hide = false;
        }
    });
    return hide;
}

document.getElementById('feedback-form').addEventListener('submit', (event) => {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const feedback = document.getElementById('feedback').value;

    if (email) {
        return;
    } else  {
        // save the feedback to a json file on the server
        fetch("./feedback.php", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: feedback
        }).then(() => {
            document.getElementById('feedback-submitted').style.display = 'block';
            setTimeout(() => {
                document.getElementById('feedback-submitted').style.display = 'none';
                document.getElementById('feedback-form').reset();
            }, 3000);
        });
    }
});
