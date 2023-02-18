/*varibles-storing data in memories
        var-old
        let-new
        const-can't modify the values*/
        ///var///
        var a=5;
        var b=6;
        var result=a+b;
        document.write(result);
        ///local function////
        var a=9;
        function local(){
            var a=5;
            var b=4;
            var result=a*b;
            document.write(result);
        }
        local();
        document.write(a);
        ///using let key word///
        let name="kee"
        let msg="my name is  "+name+"  i love kambanae";
        document.write(msg);
        ////using const key word///
        const Name="kee";
        const dob="april 8 2002";
        let infrm="i like "+Name+" she born on "+dob;
        document.write(infrm);
