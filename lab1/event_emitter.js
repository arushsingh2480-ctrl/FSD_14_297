import {EventEmitter} from 'node:events'

const sayHi = (name)=>{
    console.log(`${name} logged in`);
}
const task = new EventEmitter()
task.once("greet", ()=>{
    console.log(`"system started"`);
})
const exit = new EventEmitter()
task.once("exit", ()=>{
    console.log(`"logged out"`)
})

task.on('greet',sayHi);
task.on("greet", (name)=>{
    console.log(`&{name) starts working`);
});

task.emit("greet","Rahul");
console.log();
console.log()
task.emit("exit","manager");
task.emit("exit","employee")

task.emit("greet","mukesh")
console.log("total listener",task.listener)