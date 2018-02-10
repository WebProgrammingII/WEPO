/* MakeBelieveJS demonstration */
(function () {
    function mElem(elem, length) {
        this.elem = elem.length === 1 ? elem[0] : elem;
        this.length = length;
    }

    mElem.prototype.nextSibling = function () {
        var nextSiblings = [];

        for (var i = 0; i < this.length; i++) {
            var nextSibling = this.elem[i].nextElementSibling;
            if (nextSibling) {
                nextSiblings.push(new mElem(nextSibling, 1));
            }
        }

        return nextSiblings;
    };

    mElem.prototype.previousSibling = function () {
        if (this.elem.previousSibling) {
            return new mElem(this.elem.previousSibling, 1);
        }
        return {};
    };

    var innerMakeBelieve = function(query) {
        var elem = document.querySelectorAll(query);

        if (elem) {
            // The encapsulation object
            return new mElem(elem, elem.length);
        }
        return {};
    };

    // Attach the outer function to the window object
    window.__ = innerMakeBelieve;
})();

// 1. Declare the __ variable and assign to the window object

// 2. Create the basic query handler

// 3. Create the encapsulation object

// 4. Define a method called nextSibling()

// 5. Define a method called previousSibling()
