let optionButtons = document.querySelectorAll('.options');
let advancOptionButton = document.querySelectorAll('.adv-option-button');
let fontName = document.getElementById('fontName');
let fontSizeRef = document.getElementById('fontSize');

let writtingArea = document.getElementById('text-input');
let linkButton = document.getElementById('createLink');
let unlinkButton = document.getElementById('unLink');

let alignButtons = document.querySelectorAll('.align');
let spacingButtons = document.querySelectorAll('.spacing');

let formatButtons = document.querySelectorAll('.format');
let scriptButtons = document.querySelectorAll('.script');

// font-list

let fontList = [
    "Arial", "Verdana", "Times New Roman", "Roboto", "Courier New", "Garmond", "Georgia"
];


// Initial settings
const initializer = () => {
    // function calls for highlighting button
    // no highlighting for link,unlink, list ,redo undo , because they are one time opertaions
    highlighter(alignButtons, true);
    highlighter(spacingButtons, true);
    highlighter(scriptButtons, true);
    highlighter(formatButtons, false);

    // create options for font names 
    fontList.map((value)=>{
        let option=document.createElement('option');
        option.value=value;
        option.innerHTML=value;
        fontName.appendChild(option);  //append html element
    })

    // fontsize
    for (let i = 1; i < 8; i++) {
        let option=document.createElement('option');
        option.value=i;option.innerHTML=i;
        fontSizeRef.append(option);
    }
    fontSizeRef.value=3;


}

// main logic
const modifyText=(command,defaultUi,value)=>{
    
}





// for hightlightling clicked button
const highlighter = (className, needsRemoval) => {
    className.forEach((button) => {
        button.addEventListener("click", () => {
            // needsRemoval means only one button will be highlight and other would be normal

            if (needsRemoval) {
                let alreadyactive = false;

                // if currently clicked element is already active
                if (button.classList.contains('active')) {
                    alreadyactive = true;
                }

                // remove highlight from other buttons
                highlighterRemover(className);  // this removes active class from every button of given class name

                if (!alreadyactive) {  //this active button which is click now
                    // highlight clicked button
                    button.classList.add('active');
                }
            }
            else {
                button.classList.toggle('active');
            }
        })
    });
}

const highlighterRemover = (className) => {
    className.forEach((button) => {
        button.classList.remove('active');
    })
}

window.onload = initializer();

