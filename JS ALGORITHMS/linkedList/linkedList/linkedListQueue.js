// queue
function queue(){
    this.first = null;
    this.add = queueAdd;
    this.delete = queueDelete;
    this.print =queuePrint;
}
//end queue

//Add
function queueAdd(value){
    if (!this.first){
        this.first = new.node(value)
    }else{
        current = this.first;
        while(current.next){
            current = current.next;
        }
        current.next = new node(value);
        return true;
    }
return false;
}
//end Add

//Delete
function queueDelete(){
if(!this.firts){
    return false;
}else{
    current = this.first;
    this.first = this.firts.next ;
    return true; 
}
}
//end Delete

//Print
function queuePrint(){
    trail = "";
    current = this.first;
    while (current){
        trail += current.value;
        trail += "-->";
        current = current.next;
    }trail += "null"
    return trail;
}