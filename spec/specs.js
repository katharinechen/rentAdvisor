describe("rentAdvisor", function() {

  it("if there are NO roommates, you pay for everything", function() {
    rentAdvisor(500,0).should.equal(500);
  });

  it("if you have roommates, you have to split it evenly", function() {
    rentAdvisor(500,1).should.equal(250);
  });

  it("if there is one utility, add it to the rent and divide evenly between roommates", function() { 
  	rentAdvisor(500, 1, [100]).should.equal(300); 
  }); 

   it("if there is one utility, add it to the rent and divide evenly between roommates", function() { 
  	rentAdvisor(500, 1, [300]).should.equal(400); 
  }); 

   it("if there is three utilities, add it to the rent and divide evenly between roommates", function() { 
  	rentAdvisor(500, 1, [300, 100, 50]).should.equal(475); 
  }); 

   it("if there are all five utilities, plus rent and 3 roommates", function() { 
      rentAdvisor(1300, 3, [200, 200, 100, 50, 100]).should.equal(487.50); 
   }); 

});


