const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });

  it("Returns the literal 'sha' when given no input", () => {
    const trivialKey = deterministicPartitionKey({});
    expect(trivialKey).toBe("c1802e6b9670927ebfddb7f67b3824642237361f07db35526c42c555ffd2dbe74156c366e1550ef8c0508a6cc796409a7194a59bba4d300a6182b483d315a862");
  });

  it("Returns the literal 'not partitionKey' when given no input", () => {
    const trivialKey = deterministicPartitionKey({partitionkey: "yes"});
    expect(trivialKey).toBe("98c9eac2b61cf0cafecf93f80ba4da29d55d3e0e61e4ef090ffc0fce0ddb01da215f6ce3378ebbe9b9b9e89db81b352cdf3c0ec3b4cc08e167553172654911e4");
  });

  it("Returns the literal 'with partitionKey' when given no input", () => {
    const trivialKey = deterministicPartitionKey({partitionKey: "yes"});
    expect(trivialKey).toBe("yes");
  });

  it("Returns the literal 'more then 256' when given no input", () => {
    const trivialKey = deterministicPartitionKey({partitionKey: "98c9eac2b61cf0cafecf93f80ba4da29d55d3e0e61e4ef090ffc0fce0ddb01da215f6ce3378ebbe9b9b9e89db81b352cdf3c0ec3b4cc08e167553172654911e434354sfesfsfsfsfsefsefsfsfdsffsdfdfsdfsdfsdfsdfsfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfshfdfkbsfbiudsbfuidshkfsidbfiusdbgidfsdofndsoifnoisdnfoidsifusdufbiudsnfiusdbifbsdiufbsbfiusdbiufbskdbfiusdbiufbdsiufbiudsbfiudsbfiubsdiufhsiughkusdnfusdbfiusdiufsdkufbisudbfiusdbfkubsdifbisdbfsdbfbsdifsdfuisdbfubsdi"});
    expect(trivialKey).toBe("170a6747e6bfda2fe5ee02abbb7a887f63c64bac6a89ca2d65eb11d6c99151637dd6b298ec21680d62ea0479d36e621a4c397ed36c64e0f792382102c6d1583f");
  });
});
