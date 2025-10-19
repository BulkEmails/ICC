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

            const defaultEmailBody = `Dear ICC Officials,

As a Pakistani citizen and lifelong cricket fan, I am writing with deep disappointment over the increasingly partisan and politically influenced posture of the International Cricket Council — or as many fans now sadly call it, the “Indian Cricket Council.”

The ICC’s silence and selective approach to issues where India’s political narratives are involved have become glaring. By allowing its platform and banner to be used to amplify baseless propaganda — such as the recent claim that Pakistan’s counter-terrorism action targeted “club-level cricketers” — the ICC has strayed far from its founding principles of fairness, neutrality, and integrity.

This narrative, originated and fueled by Indian media and their Afghan proxies, is not only false but also malicious. It deliberately exploits cricket’s emotional value to mislead global audiences and malign Pakistan — a full and equal member of the ICC family. Your silence in the face of this politicization amounts to complicity.

Cricket is meant to unite, not divide. The ICC was established to safeguard the game from exactly this kind of political contamination. Yet today, the organization appears captive to one country’s political and commercial influence — betraying the trust of millions of fans worldwide who once saw the ICC as a symbol of global sportsmanship.

I urge the ICC leadership to immediately:
1. Reassert its neutrality and distance itself from politically motivated narratives.
2. Condemn the misuse of cricket platforms for propaganda against any member nation.
3. Recommit to the ICC’s true spirit — fairness, inclusivity, and the global growth of cricket, especially women’s and youth participation.

If the ICC continues down this path, it risks being remembered not as the guardian of cricket but as an instrument of selective politics — a sad decline from “International” to “Indian” Cricket Council.

Respectfully,
`;
            // Display the initial default email body
            emailTextArea.textContent = defaultEmailBody;

            // Concatenate all emails into a single string
            const allEmailAddresses = congressmen.map(congressman => congressman.email).join(',');

            // Add event listener to the send email button
            sendEmailButton.addEventListener("click", function () {
                const mailtoLink = `mailto:${allEmailAddresses}?subject=${encodeURIComponent('ICC Must Stop Acting Like the “Indian Cricket Council')}&body=${encodeURIComponent(defaultEmailBody)}`;
                
                // Set mailto link and update email content preview in textarea
                sendEmailButton.href = mailtoLink;
                emailTextArea.textContent = defaultEmailBody;
            });
        })
        .catch(error => console.error('Error loading congressman data:', error));
});
