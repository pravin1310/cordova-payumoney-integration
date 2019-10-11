# Payumoney payment gateway integration with cordova app

A process for integrat payumoney payment gateway in cordova android application
# Required components
1) Install Inappbrowser plugin in your cordova project
Run following command in your project

**cordova plugin add cordova-plugin-inappbrowser**

OR 

Visit [cordova-plugin-inappbrowser](https://cordova.apache.org/docs/en/latest/reference/cordova-plugin-inappbrowser/)

## Call following function in your project
    Include payumoneyPaymentGateway.js in your project
    
    <script src="js/payumoneyPaymentGateway.js"></script>
    Call the following function after click on payment button
    
    payWithPayUMoney();
    



## Handle response on your server for surl and furl
Here surl handle success payumoney payment response on server as usual we provide in web integration
like http://www.abc.com/payumoneysuccessresponse and furl http:/www.abc.com/payumoneyfailureresponse

## Handle response in function exitCallback()

//Handle

function exitCallback() {

          //Handle your response 
          
          //first check your payment status from database using your transection id
          
          //if payment success than remove txnid from local storage and nevigate to your customer order page otherwise nevigate to your cart list page and try to start payment again
          
}

//



##Thank's
