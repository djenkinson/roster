function MoveViewModel(dataModel, parent) {
    var self = this;
    
    // Masks Moves

    var moveUrl = app.dataModel.siteUrl + "api/Move";

    self.Name = ko.observable(dataModel.name);
    self.Type = ko.observable(dataModel.type);
    self.Text = ko.observable(dataModel.text);
    self.Items = ko.observableArray(dataModel.items);
    self.Items2 = ko.observableArray(dataModel.items2);
    self.Label = ko.observable(dataModel.label);
    self.Condition = ko.observable(dataModel.condition);
    self.expand = ko.observable(false);
    self.toggle = function (item) {
        return self.expand(!self.expand());
    };

    self.HtmlText = ko.observableArray([]);
    
    self.generateHtmlText = function () {
        var textItems = self.Text().split("[list]");
        var count = textItems.length + self.Text().match("[list]").length;
        var listCount = 1;
        textItems.forEach(function (val, i) {
            if (val.length > 0) {
                self.HtmlText().push(new TextItem(val, "text"));
                count = count - 1;
                if (count > 0) {
                    switch (listCount) {
                        case 1:
                            self.HtmlText().push(new TextItem(self.Items(), "list"));
                            break;
                        case 2:
                            self.HtmlText().push(new TextItem(self.Items2(), "list"));
                            break;
                    }
                    listCount++;
                    count = count - 1;
                }
            }
        });
    };
    self.generateHtmlText();
    self.jsonOut = ko.computed(function () {
        return ko.toJSON(self);
    });

    // Functions
    self.selectMove = (move) => {
        parent.selectedMove(move);
    }
    
    return self;
}

function TextItem(item, type) {
    var self = this;

    self.Item = ko.observable(item);
    self.Type = ko.observable(type.toLowerCase());
    self.isText = ko.computed(function () {
        return self.Type() === "text";
    });

}

//app.addViewModel({
//    name: "Home",
//    bindingMemberName: "home",
//    factory: HomeViewModel
//});
