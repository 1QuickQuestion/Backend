/**
 * ResponsesController
 *
 * @description :: Server-side logic for managing responses
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
    average: function(req, res) {
        var id = req.params["id"];
        var query = { "questionId": id };

        Responses.find(query).groupBy("questionId").average("numberValue").exec(
            function (error, response) {
                return res.send(response);
            });

}
}
