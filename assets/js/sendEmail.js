function sendMail(contactForm) {
    emailjs.send("service_pmip5uq", "template_k637uf9", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "project_request": contactForm.projectsummary.value
    }).then(
        function (response) {
            console.log("SUCCESS", response);
        },
        function (error) {
            console.log("FAILED", error);
        });
}