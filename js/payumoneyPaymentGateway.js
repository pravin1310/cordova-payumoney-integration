

function payWithPayUMoney() {
    var productInfo = document.getElementById('productInfo').value;
    var amt = document.getElementById('amount').value;
    var name = document.getElementById('firstname').value;
    var mobileNo = document.getElementById('phone').value;
    var email = document.getElementById('email').value;
    var txnid = document.getElementById('txnid').value;
    var address1 = document.getElementById('address1').value;
    var service_provider = document.getElementById('service_provider').value;
    var salt = $('#salt').val();
    var key = $('#key').val();
    var surl = $('#surl').val();
    var furl = $('#furl').val();
    var hash = $('#hash').val();
    var deliveryAddress = $('#deliveryAddress').val();
    var deliveryCustomerName = $('#deliveryCustomerName').val();
    var deliveryCustomerMobile = $('#deliveryCustomerMobile').val();
    var deliveryCustomerEmail = $('#deliveryCustomerEmail').val();

    var orderid;
    orderid = window.sessionStorage.getItem('tempOrderId');
    var postData={
        surl:surl,
        furl:furl,
        productInfo:productInfo,
        amount:amount,
        customername:name,
        mobile:mobileNo,
        email:email,
        txnid:txnid,
        salt:salt,
        key:key,
        address:address1,
        hash:hash,
        orderid:orderid,
        deliveryAddress:deliveryAddress,
        deliveryCustomerName:deliveryCustomerName,
        deliveryCustomerMobile:deliveryCustomerMobile,
        deliveryCustomerEmail:deliveryCustomerEmail
    }

    localStorage.setItem('txnid', postData['txnid']);

    var pageContent = '<html>'+
                        '<head></head>'+
                        '<body>'+
                            '<form id="pauform" action="https://secure.payu.in/_payment" method="post">' +
                                '<input type="hidden" name="key" value="' + key + '">' +
                                '<input type="hidden" name="salt" value="' + salt + '">' +
                                '<input type="hidden" name="productInfo" value="' + productInfo + '">' +
                                '<input type="hidden" name="hash" value="' + hash + '">' +
                                '<input type="hidden" name="service_provider" value="payu_paisa">' +
                                '<input type="hidden" name="furl" value="' + furl + '">' +
                                '<input type="hidden" name="surl" value="' + surl + '">' +
                                '<input type="hidden" name="phone" value="' + mobileNo + '">' +
                                '<input type="hidden" name="email" value="' + email + '">' +
                                '<input type="hidden" name="firstname" value="' + name + '">' +
                                '<input type="hidden" name="amount" value="' + amt + '">' +
                                '<input type="hidden" name="address1" value="' + address1 + '">' +
                                '<input type="hidden" name="txnid" value="' + txnid + '">' +
                            '</form>'+ 
                            '<script type="text/javascript">document.getElementById("pauform").submit();</script>'+
                        '</body>'+
                    '</html>';
   var pageContentUrl = 'data:text/html;base64,' + btoa(pageContent);

   var target = '_blank';
   var options = "location=no,hidenavigationbuttons=yes,hideurlbar=yes,hardwareback=no,fullscreen=yes"
   var ref = cordova.InAppBrowser.open(pageContentUrl, target, options);
   
   ref.addEventListener('loadstart', loadstartCallback);
   ref.addEventListener('loadstop', loadstopCallback);
   ref.addEventListener('loaderror', loaderrorCallback);
   ref.addEventListener('exit', exitCallback);

   function loadstartCallback(event) {
        console.log('Loading started: '  + event.url)
   }

   function loadstopCallback(event) {
      console.log('Loading finished: ' + event.url)
   }

   function loaderrorCallback(error) {
      console.log('Loading error: ' + error.message)
   }

   function exitCallback() {
      //localStorage.removeItem('txnid');
      console.log('Browser is closed...')
   }
}
