function createCat(spec) {
  const { name } = spec;
  function speak() {
    console.log(`${name} meows`);
  }
  return Object.freeze({
    speak,
  });
}

function createLion(spec) {
  const { name } = spec;

  createCat(spec).speak();

  function speak() {
    console.log(`${name} roars`);
  }
  Object.seal();
  return Object.freeze({
    speak,
  });
}

const lion = createLion({ name: "Mitzi" });
console.log(lion.speak());
