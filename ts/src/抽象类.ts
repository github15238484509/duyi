abstract class Chess {
    abstract rule(age: number): boolean;
    say() {
        this.rule(123)
        this.name
    }
    protected abstract name: string
}

class ma extends Chess {
    protected name: string = "3123";
    rule(age: number): boolean {
        throw new Error("Method not implemented.");
    }
}


