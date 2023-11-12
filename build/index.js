"use strict";
const getName = () => {
    console.log("Invoke Index Get Names Function");
    const names = [
        "Lakshmi Narasimham",
        "Amruthavalli"
    ];
    return names.join(',');
};
console.log("The names are:", { Name: getName() });
//# sourceMappingURL=index.js.map