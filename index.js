var names="hassan"
function grobalscope(){
    console.log(name)
}
grobalscope()
function localscope(){
    let name="josee";
    console.log(name);   
}
localscope()
if (true){
    let blocklet="i am trapped here";
    varleaked="i escaped the block";
    console.log(blocklet);
}
 