const today = new Date();
const month = today.getMonth()
const year = today.getFullYear()
const firstDay = new Date(year, month, 1);
const dayWeek = firstDay.getDay();
const daysInMonth = new Date(year, month+1, 0).getDate()


const monthDisp = document.getElementById("Month")
switch(month+1) {
    case 0: monthDisp.innerText = "January" // Jan
    case 1: monthDisp.innerText = "Feburary" // Feburary
    case 2: monthDisp.innerText = "March" // March
    case 3: monthDisp.innerText = "April" // April
    case 4: monthDisp.innerText = "May" // May
    case 5: monthDisp.innerText = "June" // June
    case 6: monthDisp.innerText = "July" // July
    case 7: monthDisp.innerText = "August" // August
    case 8: monthDisp.innerText = "September" // September
    case 9: monthDisp.innerText = "October" // October
    case 10: monthDisp.innerText = "November" // November
    case 11: monthDisp.innerText = "December" // December
}
monthDisp.innerText += " " + year;

const calendarDays = document.getElementsByClassName("calendar-day");
for (let i = 0; i < calendarDays.length; i++) {
    const day = calendarDays[i];
    if (i < dayWeek) { day.innerHTML = ""

    } else if (i-dayWeek < daysInMonth){
        day.innerHTML = ((i-dayWeek)+1) + "<button class='add-event-button'></button>"
    } else {day.innerHTML = ""}
   
}

// Functionality for adding/editing events form
const goBackButton = document.getElementById("goBack");
const addEventForm = document.getElementById("addEventForm");
const calendar = document.getElementById("calendar");
const eventsPage = document.getElementById("eventsPage");
const addEventContainer = document.getElementById("addEventContainer");

function goBackEvent(e) {
    console.log("goBack triggered");
    eventsPage.setAttribute("hidden", "");
    calendar.removeAttribute("hidden");
    addEventForm.reset();
}

goBackButton.addEventListener("click", goBackEvent);


// Functionality for going to the add events page when clicking an empty day
function addButtonClick(e) {
    console.log("triggered addEvent");
    calendar.setAttribute("hidden", "");
    eventsPage.removeAttribute("hidden");
}

for (let day of calendarDays) {
    let addButton = day.querySelector(".add-event-button");
    if (addButton) {
        addButton.addEventListener("click", addButtonClick);
    }
}

// Define an array to store events
let events = [];

// Store event input fields and reminder list
let eventDateInput = document.getElementById("eventDate");
let eventTitleInput = document.getElementById("eventTitle");
let eventDescriptionInput = document.getElementById("eventDescription");
let reminderList = document.getElementById("reminderList");

// Counter to generate unique event IDs
let eventIdCounter = 1;

// Function to add events
function addEvent() {
    if (!eventDateInput || !eventTitleInput || !eventDescriptionInput) {
        console.error("Missing event input elements in HTML.");
        return;
    }

	let date = eventDateInput.value;
	let title = eventTitleInput.value;
	let description = eventDescriptionInput.value;

    if (!date || !title) {
        alert("Date and title required");
        return;
    }

    // Create a new event object
    const event = {
        id: eventIdCounter++,
        date: date,
        title: title,
        description: description
    };

    events.push(event); // Store event

    // Reset the form
    eventDateInput.value = "";
    eventTitleInput.value = "";
    eventDescriptionInput.value = "";

    updateCalendarDots();
    updateReminderList();
}

// Function to delete an event by ID
function deleteEvent(eventId) {
	 events = events.filter(event => event.id !== id);

    updateCalendarDots();
    updateReminderList();
}
