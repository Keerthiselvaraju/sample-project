/*----------------OBJECT-------ntt =>behaviour and character ------------*/
        /*1)object literal
         2)intence of object
         3)object constructor
        */

     //---------------------------Object literal-------------------
     var actor={
        hero1:"kamban",
        age:20,
        qualification:"mbbs",
     };
     document.write("actor name is "+actor.hero1+"  age is  "+actor.age+"  his qualification  "+actor.qualification);
        //------------------------Instance object-------------
        var tree = new Object();
        tree.treename = "Mango",
            tree.years = 23,
            tree.season = "season"

        document.write(tree.treename + " " + tree.years + " " + tree.season);
        //------------------------Object constructor-----------
        function fun(name, years) {
            this.name = name;
            this.age = years;
        };
        var obj= new fun("apple", 24);
        document.write(obj.name);

        //object.assign()

        var emp = {
            id: 111,
            name: "A",
            salary: "45000"
        };

        var empobj = {};

        var assign = Object.assign(empobj, emp);
        document.write(empobj.id);
        document.write(assign);  //object object*/

  