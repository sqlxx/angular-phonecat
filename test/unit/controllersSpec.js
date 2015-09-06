'use strict';

describe('PhoneListCtrl', function(){
  beforeEach(module('phonecatApp'));

  it('should create "phones" module with 3 phones', inject(function($controller){
    var scope = {},
      ctrl = $controller('PhoneListCtrl', {$scope:scope});

    expect(scope.phones.length).toBe(3);
  }));
});
