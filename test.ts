abstract class AbstractFood {
  abstract readonly name: string;
  abstract readonly duration: number;
}

class CrabOmelet implements AbstractFood {
  name = "Crab Omelet";
  duration = 7;
}

class PadThai implements AbstractFood {
  name = "Pad Thai";
  duration = 11;
}

class TomYumKung implements AbstractFood {
  name = "Tom Yum Kung";
  duration = 13;
}

class Restaurant {
  cook(order: string): AbstractFood[] {
    
    // Write your code here.
    
    return [];
  }

  process(order: string): string {
    const foods = this.cook(order);
    return foods.map((f) => f.name).join(',')
  }
}


//Test should be named "test{number of the test, starting with 1} name of the test"
QUnit.test("test1", function (assert) {
    const order = "Crab Omelet x2, Pad Thai x2, Tom Yum Kung x1, Crab Omelet x1";
    const res = new Restaurant();
    const result = res.process(order);
    assert.equal(result, "Crab Omelet,Pad Thai,Tom Yum Kung,Crab Omelet,Crab Omelet,Pad Thai");
});
