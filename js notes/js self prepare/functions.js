function welcome(name){
    let type="i m greeting "+name+" she is very cute girl";
    document.write(type);
}
welcome("kee")
////anonymous function//
var type=function(){
    var a=2;
    var b=3;
    var result=a+b;
    document.write(result);
}
type();
/////generator function-----using for loop//////
function* bond(){
    yield "kee";
    yield 41;
    yield "kamban";
    yield 36;
}
var obj=bond();
for(var k of obj){
    document.write(k);
}
/////Generator function---second method////
let seq={
    start:1,
    end:20,
    [Symbol.iterator](){
        return{
            current:this.start,
            last:this.end,
            next(){
                if(this.current<=this.last){
                    return{
                        done:false,
                        value:this.current++,

                    };
                }else{
                    return{
                        done:true,
                    }
                }
            }

        }
    }
}
document.write([0,...seq]);
/////generator function----spread operator/////
function* numbers(){
    yield "kee";
    yield "kulfa";
    yield "suuu";
}
var spread=["kumbikai","kumban",...numbers()];
document.write(spread);
////constructor function///
var minus=new Function('x','y','return x+y')
        document.write(minus("kee","kam")+"<br>");
//////first type------without arguments--------------arrow function///
        var nam=()=>{
            document.write(10);
        }
        nam();
//////second type-----with arguments--and return type-------------arrow function////       
var nam=(kee)=>{
    return kee ;
} 
document.write(nam(20));
/////third type---with arguments--without return type---------------arrow function////
var nam=(add)=> add%9;
document.write(nam(50));
/////Nested Function////
function Nested(){
    clr();
}
function clr(){
    document.getElementsByTagName("input").value="";
}




