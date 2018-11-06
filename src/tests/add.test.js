const add = (a, b) => a + b;
const genGreet = (name = "anon") => `Hello, ${name}!`;

test("should add two numbers", () => {
    const result = add(3, 4);
    expect(result).toBe(7);
});

test("should say Hello to someone", () => {
    const greet = genGreet("Angel");
    expect(greet).toBe("Hello, Angel!");
});

test("should say hello to no one", () => {
    const greet = genGreet();
    expect(greet).toBe("Hello, anon!");
});