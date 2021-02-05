setTimeout(() => {
    console.log("Line 1, 0 timeout")
    // do stuff with the ajax request
}, 0);
console.log("line 2");
setTimeout(() => console.log("Line 3, 100 timeout"), 100);

for (let i = 0; i < 100001; i++) {
    if (i === 100000) {
        console.log("Done with loop");
    }
}