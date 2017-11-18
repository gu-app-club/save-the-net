module.exports = {
  send: function(request, response) {
    let name = request.body.name;
    let zip = request.body.zip;
    let message = request.body.message;
    let req = { name: name, zip: zip, message: message };

    response.send(req);
  }
};
