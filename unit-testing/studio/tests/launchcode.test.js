// launchcode.test.js code:
const launchcode = require('../index.js');

describe("Testing launchcode", function(){

  // Write your unit tests here!
  test('object key "organization" contains value "nonprofit" ', function(){
    expect(launchcode.organization).toEqual('nonprofit');
  });

  test('object key "executiveDirector" contains value "Jeff"', function(){
    expect(launchcode.executiveDirector).toEqual('Jeff');
  });

  test('object key "percentageCoolEmployees" contains value "100"', function(){
    expect(launchcode.percentageCoolEmployees).toEqual(100);
  });

  test('object key "programsOffered" contains 3 values', function(){
    let result = launchcode.programsOffered;
    expect(result[0]).toEqual("Web Development");
    expect(result[1]).toEqual("Data Analysis");
    expect(result[2]).toEqual("Liftoff");
    //expect(launchcode.programsOffered).toContain("Saleforce");
    expect(result.length).toBe(3);
  });

  it("Launchoutput returns Launch! if number passed if only divisible by 2", function(){
    expect(launchcode.launchOutput(4)).toEqual("Launch!");
  })
  it("Launchoutput returns Code! if number passed if only divisible by 3", function(){
    expect(launchcode.launchOutput(9)).toEqual("Code!");
  })
  it("Launchoutput returns Rocks! if number passed if only divisible by 5", function(){
    expect(launchcode.launchOutput(25)).toEqual("Rocks!");
  })
  it("Launchoutput returns LaunchCode! if number passed if only divisible by 2 and 3", function(){
    expect(launchcode.launchOutput(6)).toEqual('LaunchCode!');
  });
  it("Launchoutput returns Code Rocks! if number passed if only divisible by 3 and 5", function(){
    expect(launchcode.launchOutput(15)).toEqual('Code Rocks!');
  });
  it("Launchoutput returns Launch Rocks!  if number passed if only divisible by 2 and 5", function(){
    expect(launchcode.launchOutput(10)).toEqual('Launch Rocks!');
  });
  it("Launchoutput returns LaunchCode Rocks! if number passed if only divisible by 2,3 and 5", function(){
    expect(launchcode.launchOutput(30)).toEqual('LaunchCode Rocks!');
  });
  it("Launchoutput returns Rutabagas! That doesn't work. if number passed if not divisible by 2,3 or 5", function(){
    expect(launchcode.launchOutput(7)).toEqual("Rutabagas! That doesn't work.");
  });
});