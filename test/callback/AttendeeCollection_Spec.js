describe('Conference.attendeeCollection', function() {
    describe('contains(attendee)', function () {
    });

    describe('add(attendee)', function () {
    });

    describe('remove(attendee)', function () {
    });

    describe('iterate(callback)', function () {
        var collection, callbackSpy;

        function addAttendeesToCollection(attendeeArray) {
            attendeeArray.forEach(function(attendee) {
                collection.add(attendee);
            });
        }

        function verifyCallbackWasExecutedForEachAttendee(attendeeArray) {
            expect(callbackSpy.calls.count()).toBe(attendeeArray.length);

            var allCalls = callbackSpy.calls.all();
            for(var i = 0;i<allCalls.length();i++) {
                expect(allCalls[i].args[0]).toBe(attendeeArray[i]);
            }
        }

        beforeEach(function () {
            collection = Conference.attendeeCollection();
            callbackSpy = jasmine.createSpy();
        });
    });


})