function sendInfo() {
    const dateInput = document.getElementById("date_date").value;
    const activityInput = document.getElementById("date_activity").value;

    if (dateInput && activityInput){
        emailjs.init("Edxpg2OxBPnfdYYVC");

        var templateParams = {
            day: `Day: ${dateInput}`,
            activity: `Activity: ${activityInput}`,
        };

        console.log(templateParams);

        emailjs.send("service_s8w819o", "template_8kqoxui", templateParams)
            .then(function(response) {
                console.log("SUCCESS!", response.status, response.text);
                alert("Sendt notifikation, glæder mig! <3");
            }, function (error) {
                console.log("Failed...", error);
                alert("Kunne ikke sende notifikation... prøv igen senere. :c");
            });
    }
    else {
        alert("dag og activitet skal udfyldes :>");
    }
}