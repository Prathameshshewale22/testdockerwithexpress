prodarr=[{pid:"1",pname:"prod-1",price:200},
{pid:"2",pname:"prod-2",price:300},
{pid:"3",pname:"prod-3",price:400}];

exports.insert=function(ob){
    prodarr.push(ob);
};

exports.length=function(ob){
    return prodarr.length;
};

exports.search=function(ob){
    for(var p of prodarr){
        if(p.pid===ob){
            return p;
        }
    }
}