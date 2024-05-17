let optionButtons = document.querySelectorAll('.option-button');
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
let listButtons = document.querySelectorAll('.list');

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
    highlighter(listButtons, true);
    highlighter(formatButtons, false);

    // create options for font names 
    fontList.map((value)=>{
        let option=document.createElement('option');
        option.value=value;
        option.innerHTML=value;
        option.style.fontFamily=value;
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
        // exeCommand execute command on selected text
        document.execCommand(command,defaultUi,value);
};


// basic operation which don't need values
optionButtons.forEach(button => {
    button.addEventListener("click",()=>{  
        modifyText(button.id,false,null);  // id of each button is name of operation(command) we want to do 
    });
});


//  operation which need values (e.g font ,colors )

advancOptionButton.forEach(button=>{
    // change event is called when user choose different option from given choice
    button.addEventListener("change",()=>{
        modifyText(button.id,false,button.value);
    });
});

// link
linkButton.addEventListener("click",()=>{
    let userlink=prompt('Enter a url ');
    if (/http/i.test(userlink)) {
        modifyText(linkButton.id,false,userlink);
    }
    else{
        userlink="https:/"+userlink;
        modifyText(linkButton.id,false,userlink);
    }
})



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

