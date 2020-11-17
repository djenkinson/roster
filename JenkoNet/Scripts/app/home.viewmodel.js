function HomeViewModel(app, dataModel) {
    var self = this;
    self.myHometown = ko.observable("");

    // Masks Moves

    var moveUrl = app.dataModel.siteUrl + "api/Move";
    self.moves = ko.observable();

    Sammy(function () {
        this.get('#home', function () {
            $.ajax({
                method: 'get',
                url: moveUrl,
                contentType: "application/json; charset=utf-8",
                headers: {
                    'Authorization': 'Bearer ' + app.dataModel.getAccessToken()
                },
                success: function (data) {
                    self.moves(new MovesViewModel(data));

                    //self.moveList(data);
                }
            });
        });
        this.get('/', function () { this.app.runRoute('get', '#home'); });
    });

    return self;
}

app.addViewModel({
    name: "Home",
    bindingMemberName: "home",
    factory: HomeViewModel
});
