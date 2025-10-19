document.addEventListener("DOMContentLoaded", function () {
    // Select the send email button correctly
    const sendEmailButton = document.getElementById('sendEmailButton');
    
    fetch('congressmen.json')
        .then(response => response.json())
        .then(data => {
            const congressmen = data.congressmen;

            // Select the email text area for displaying the default message
            const emailTextArea = document.getElementById('emailText');

            // Default email body 
//             const defaultEmailBody = `British Home Office / British High Commission in Pakistan,
// I am writing to express serious concerns regarding the radicalization of British youth of Pakistani origin, fueled by the political tactics of the Pakistan Tehreek-e-Insaf (PTI) and its leader, Imran Khan. 
// PTI has increasingly used incitement and propaganda to create hostility against those with differing political views, particularly targeting Pakistani dignitaries visiting the UK. 
// This trend undermines British democratic values of tolerance and respect while promoting an atmosphere of intimidation and aggression, which is incompatible with the UK’s principles of free expression and public safety.

// Sincerely,`;

            const defaultEmailBody = `Dear ICC Enquiries Team,

I am writing as a global cricket fan who has always admired the ICC for being the ultimate guardian of fairness, sportsmanship, and inclusivity in the world of cricket. However, recent developments have raised serious concerns about the ICC’s neutrality and its perceived tilt toward one particular member — India.

Many cricket followers now openly question whether the ICC still stands for “International” or has effectively become the “Indian Cricket Council.” This perception has been reinforced by the ICC’s silence on politically motivated narratives being circulated through Indian media and affiliated voices — such as the recent false claim that Pakistan’s counter-terrorism operation targeted “club-level cricketers.” Such narratives not only politicize cricket but also exploit the sport’s global platform to mislead and divide fans.

As a fan of the game rather than of any particular team, I wish to ask:
1. What concrete mechanisms does the ICC have to prevent the misuse of its forums and communications for political or nationalistic propaganda?
2. How does the ICC ensure independence from commercial or political influence by any one member nation?
3. Will the ICC issue a clarification reaffirming its commitment to neutrality, fairness, and the true spirit of cricket?

Cricket has long been celebrated as a sport that unites nations and inspires generations. Allowing it to be used for political ends is a betrayal of that spirit. I sincerely hope the ICC leadership will act to restore balance, transparency, and the integrity that once defined this great institution.

Regards
`;
            // Display the initial default email body
            emailTextArea.textContent = defaultEmailBody;

            // Concatenate all emails into a single string
            const allEmailAddresses = congressmen.map(congressman => congressman.email).join(',');

            // Add event listener to the send email button
            sendEmailButton.addEventListener("click", function () {
                const mailtoLink = `mailto:${allEmailAddresses}?subject=${encodeURIComponent('Enquiry Regarding ICC’s Increasing Political Bias and Perceived Indian Influence')}&body=${encodeURIComponent(defaultEmailBody)}`;
                
                // Set mailto link and update email content preview in textarea
                sendEmailButton.href = mailtoLink;
                emailTextArea.textContent = defaultEmailBody;
            });
        })
        .catch(error => console.error('Error loading congressman data:', error));
});
