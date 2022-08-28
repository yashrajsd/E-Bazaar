$("#farmer").on("click",function(){
    $("#farmerSignIn").slideToggle();
    $("#customer-sign-in").slideToggle();
    $("#farmer-sign-in").slideToggle();
    $("#welcome-text-1").slideToggle();
})

$("#customer").on("click",function(){
    $("#customerSignIn").slideToggle();
    $("#farmer-sign-in").slideToggle();
    $("#customer-sign-in").slideToggle();
    $("#welcome-text-2").slideToggle();
})

$("#return-1").on("click",function(){
    $("#farmerSignIn").slideToggle();
    $("#customer-sign-in").slideToggle();
    $("#farmer-sign-in").slideToggle();
    $("#welcome-text-1").slideToggle();
})

$("#return-2").on("click",function(){
    $("#customerSignIn").slideToggle();
    $("#farmer-sign-in").slideToggle();
    $("#customer-sign-in").slideToggle();
    $("#welcome-text-2").slideToggle();
})