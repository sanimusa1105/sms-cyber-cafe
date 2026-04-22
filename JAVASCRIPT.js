function pay(service, amount) {
  let handler = PaystackPop.setup({
    key: "pk_live_fba73fa133f02ce28d23821214334f01c450ac52",
    email: "customer@email.com",
    amount: amount * 100,
    currency: "NGN",

    callback: function(response) {
      fetch("http://localhost:5000/pay", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({service, amount})
      });

      alert(service + " unlocked successfully!");
    }
  });

  handler.openIframe();
}