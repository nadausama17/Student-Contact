let nav=document.getElementsByTagName("nav")[0],
fullName=document.getElementById("full-name"),
email=document.getElementById("email"),
phoneNumber=document.getElementById("phone-number"),
message=document.getElementById("message"),
sendBtn=document.getElementById("send-btn"),
links=document.getElementsByClassName("link"),
portflioLink=document.getElementById("portfolio-link"),
aboutLink=document.getElementById("about-link"),
contactMeLink=document.getElementById("contactme-link");

fullName.value="";
email.value="";
phoneNumber.value="";
message.value="";
if(document.documentElement.scrollTop>0 || document.body.scrollTop>0)
{
    nav.style.padding="0.3%";
}

//////////header functions//////////////////
// nav on scroll
window.onscroll=function()
{
    if(window.scrollY>0)
    {
        nav.style.padding="0.3%";
    }
    else
    {
        nav.style.padding="1.2%";
    }
}
//////////////////////////////////////////////

// add link background when clicked in nav bar
function linkActive(link)
{
    // remove all links style
    for(let i=0;i<links.length;i++)
    {
        links[i].style.backgroundColor="";
        links[i].firstChild.style.color="";
    }
    link.style.backgroundColor="#1bbc9b";
    link.firstChild.style.color="#ffffff";
}

// add color and remove it when hovering on link in nav bar
function linkhover(link)
{
    if(link.classList.contains("ahover"))
    {
        link.classList.remove("ahover");
    }
    else
    {
        link.classList.add("ahover");
    }
}
// make events: click, mouseover and mouseout on links
portflioLink.addEventListener("click",function()
{
    linkActive(portflioLink.parentNode);
})
portflioLink.addEventListener("mouseover",function()
{
    linkhover(portflioLink);
})
portflioLink.addEventListener("mouseout",function()
{
    linkhover(portflioLink);
})

aboutLink.addEventListener("click",function()
{
    linkActive(aboutLink.parentNode);
})
aboutLink.addEventListener("mouseover",function()
{
    linkhover(aboutLink);
})
aboutLink.addEventListener("mouseout",function()
{
    linkhover(aboutLink);
})

contactMeLink.addEventListener("click",function()
{
    linkActive(contactMeLink.parentNode);
})
contactMeLink.addEventListener("mouseover",function()
{
    linkhover(contactMeLink);
})
contactMeLink.addEventListener("mouseout",function()
{
    linkhover(contactMeLink);
})
//////////////////////////////////////////////////

///////////////form functions////////////////////
function changeLabelFont(input)
{
    //reset all labels to normal if empty
    if(fullName.value=="")
    resetLabels(fullName);

    if(email.value=="")
    resetLabels(email);

    if(phoneNumber.value=="")
    resetLabels(phoneNumber);

    if(message.value=="")
    resetLabels(message);

    if(input!=null)
    {
    input.parentNode.style.fontSize="80%";
    input.parentNode.style.fontWeight="bold";
    input.parentNode.style.color="rgba(0,0,0,0.2)";
    }
}
function resetLabels(input)
{
    if(input.value=="")
    {
    input.parentNode.style.fontSize="100%";
    input.parentNode.style.fontWeight="normal";
    input.parentNode.style.color="rgba(0,0,0,0.5)";
    }
}

//when input is focused change label style
fullName.addEventListener("focus",function()
{
    changeLabelFont(fullName);
});
//when input is blur send empty argument to only reset labels
fullName.addEventListener("blur",function()
{
    changeLabelFont();
});
email.addEventListener("focus",function()
{
    changeLabelFont(email);
});
email.addEventListener("blur",function()
{
    changeLabelFont();
});
phoneNumber.addEventListener("focus",function()
{
    changeLabelFont(phoneNumber);
});
phoneNumber.addEventListener("blur",function()
{
    changeLabelFont();
});
message.addEventListener("focus",function()
{
    changeLabelFont(message);
});
message.addEventListener("blur",function()
{
    changeLabelFont();
});

// disable the button if one of input is empty
function checkInputs()
{
    if(fullName.value=="" || email.value=="" || phoneNumber.value=="" || message.value=="")
    {
        sendBtn.disabled=true;
        setTimeout(function(){
            sendBtn.disabled=false;
        },500);
    }
}
sendBtn.addEventListener("click",checkInputs);

//input event to show red required alert
fullName.addEventListener("input",function()
{
    // the id of <p> is put in html as "input id"+"-p"
    let paragraph=document.getElementById(fullName.id+"-p");
    if(fullName.value!="")
    {
        paragraph.style.visibility="hidden";
        fullName.style.borderBottom="1px solid rgb(0, 0, 0, 0.2)";
    }
    else
    {
        paragraph.style.visibility="visible";
        fullName.style.borderBottom="1px solid rgb(189, 65, 65)";
    }
})
email.addEventListener("input",function()
{
    let paragraph=document.getElementById(email.id+"-p");
    if(email.value!="")
    {
        paragraph.style.visibility="hidden";
        email.style.borderBottom="1px solid rgb(0, 0, 0, 0.2)";
    }
    else
    {
        paragraph.style.visibility="visible";
        email.style.borderBottom="1px solid rgb(189, 65, 65)";
    }
})
phoneNumber.addEventListener("input",function()
{
    let paragraph=document.getElementById(phoneNumber.id+"-p");
    if(phoneNumber.value!="")
    {
        paragraph.style.visibility="hidden";
        phoneNumber.style.borderBottom="1px solid rgb(0, 0, 0, 0.2)";
    }
    else
    {
        paragraph.style.visibility="visible";
        phoneNumber.style.borderBottom="1px solid rgb(189, 65, 65)";
    }
})
message.addEventListener("input",function()
{
    let paragraph=document.getElementById(message.id+"-p");
    if(message.value!="")
    {
        paragraph.style.visibility="hidden";
        message.style.borderBottom="1px solid rgb(0, 0, 0, 0.2)";
    }
    else
    {
        paragraph.style.visibility="visible";
        message.style.borderBottom="1px solid rgb(189, 65, 65)";
    }
})


