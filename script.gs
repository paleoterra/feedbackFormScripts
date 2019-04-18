function myFunction(e){
  var items = e.response.getItemResponses();
  var message = "Thank you for your feedback!  Here are your responses:\n";
  var email = ""
  for (i in items){
    message += "Question: " + items[i].getItem().getTitle() + "\n";
    message += "Response: " + items[i].getResponse() + "\n\n";
    if (items[i].getItem().getTitle() == 'Email') {
      email = items[i].getResponse()
    }
  }

  if (email.indexOf("@")>-1) {
      MailApp.sendEmail (email, "Feedback Responses for Thomas Moore", message);
  }
}