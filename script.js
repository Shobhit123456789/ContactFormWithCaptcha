(function(){
    const fonts = ["cursive"];
    let captchaValue = "";
    function gencaptcha()
    {
        let value = btoa(Math.random()*1000000000);
        value = value.substr(0,5 + Math.random()*5);
        captchaValue = value;
    }

    function setcaptcha()
    {
        let html = captchaValue.split("").map((char)=>{
            const rotate = -20 + Math.trunc(Math.random()*30);
            const font = Math.trunc(Math.random()*fonts.length);
            return`<span
            style="
            transform:rotate(${rotate}deg);
            font-family:${font[font]};
            "
           >${char} </span>`;
        }).join("");
        document.querySelector(".login-form #captcha .preview").innerHTML = html;
    }

    function initCaptcha()
    {
        document.querySelector(".login-form #captcha .captcha-refersh").addEventListener("click",function(){
            gencaptcha();
            setcaptcha();
        });

        gencaptcha();
        setcaptcha();
    }
    initCaptcha();

    document.querySelector(".login-form .form-button").addEventListener("click",function(){
        let inputcaptchavalue = document.querySelector(".login-form #captcha input").value;

        if (inputcaptchavalue === captchaValue) 
        {
            alert("Log in success");
        }
        else
        {
            alert("Invalid Captcha");
        }
    });
})();