// Object to keep track of button states
var buttonA = { isSelected: false, id: "a" };
var buttonB = { isSelected: false, id: "b" };
var buttonC = { isSelected: false, id: "c" };
var buttonD = { isSelected: false, id: "d" };
var buttonE = { isSelected: false, id: "e" };
var buttonF = { isSelected: false, id: "f" };
var buttonG = { isSelected: false, id: "g" };
var buttonH = { isSelected: false, id: "h" };
var buttonI = { isSelected: false, id: "i" };

// Counters for the number of wrong buttons and selected buttons
var wrongButtonCount = 0; // Number of incorrect buttons
var selectedButtonCount = 0; // Number of selected buttons
var selectedButtonIds = []; // Array to store IDs of selected buttons
var correctButtons = ["c", "d", "h", "i"]; // Buttons that need to be selected to be correct

// Function to toggle the state of buttons
function toggleButtonState(button) {
    // Change the button color and add it to the selectedButtonIds list if not already selected
    if (!selectedButtonIds.includes(button.id)) {
        document.getElementById(button.id).style.color = "black";
        selectedButtonIds.push(button.id);
    }
    // Update counters based on the button's state
    if (!button.isSelected) {
        selectedButtonCount++;
        if (!correctButtons.includes(button.id)) {
            wrongButtonCount++;
        }
    }
    button.isSelected = true;
}

// Function to validate the selection of buttons
function validateSelection() {
    // Check if the button configuration is correct
    var isCorrectConfiguration = !buttonA.isSelected && !buttonB.isSelected &&
                                 buttonC.isSelected && buttonD.isSelected &&
                                 !buttonE.isSelected && !buttonF.isSelected &&
                                 !buttonG.isSelected && buttonH.isSelected &&
                                 buttonI.isSelected;

    var confirmationElement = document.getElementById("confirmation");

    if (selectedButtonCount === 4) {
        if (isCorrectConfiguration) {
            // Display "Correct" message and color the buttons green
            confirmationElement.innerHTML = "Correct";
            confirmationElement.style.color = "green";
            for (var i = 0; i < selectedButtonIds.length; i++) {
                document.getElementById(selectedButtonIds[i]).style.color = "green";
            }
        } else {
            // Display the number of wrong buttons and color them red
            confirmationElement.innerHTML = wrongButtonCount + " button(s) is/are wrong";
            confirmationElement.style.color = "darkred";
            for (var i = 0; i < selectedButtonIds.length; i++) {
                document.getElementById(selectedButtonIds[i]).style.color = "red";
            }
        }
    } else {
        // Display a message indicating the number of buttons must be four and color the buttons black
        confirmationElement.innerHTML = "The number of selected buttons must be *four";
        confirmationElement.style.color = "black";
        confirmationElement.style.fontSize = "5px";
        for (var i = 0; i < selectedButtonIds.length; i++) {
            document.getElementById(selectedButtonIds[i]).style.color = "black";
        }
    }
}

// Function to reset the button states
function resetSelection() {
    // Reset counters and button states
    wrongButtonCount = 0;
    selectedButtonCount = 0;
    selectedButtonIds = [];
    buttonA = { isSelected: false, id: "a" };
    buttonB = { isSelected: false, id: "b" };
    buttonC = { isSelected: false, id: "c" };
    buttonD = { isSelected: false, id: "d" };
    buttonE = { isSelected: false, id: "e" };
    buttonF = { isSelected: false, id: "f" };
    buttonG = { isSelected: false, id: "g" };
    buttonH = { isSelected: false, id: "h" };
    buttonI = { isSelected: false, id: "i" };

    // Reset button contents and colors
    var buttonIds = ["a", "b", "c", "d", "e", "f", "g", "h", "i"];
    for (var i = 0; i < buttonIds.length; i++) {
        document.getElementById(buttonIds[i]).innerHTML = "0";
        document.getElementById(buttonIds[i]).style.color = "white";
    }
    // Clear the confirmation message
    document.getElementById("confirmation").innerHTML = "";
}
