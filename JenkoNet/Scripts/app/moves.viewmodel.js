function MovesViewModel(data) {
    var self = this;

    self.moveList = ko.observableArray([]);
    self.selectedMove = ko.observable();

    // Initialise
    self.setMoveList = function (data) {
        let moveArr = [];
        ko.utils.arrayForEach(data, function (move) {
            let moveVM = new MoveViewModel(move, self);
            moveArr.push(moveVM);
        });
        self.moveList(moveArr);
    }
    self.setMoveList(data);

    // Functions
    self.selectMove = (move) => {
        if (move) {
            self.selectedMove(move);
        }
    }

}