export class Calculation {
    getName(): string {
        console.log("Invoke Index Get Names Function");
        const names: string[] = [
            "Lakshmi Narasimham",
            "Amruthavalli"
        ];
        return names.join(',');
    }
}
