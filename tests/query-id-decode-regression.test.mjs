import assert from "node:assert/strict";

const malformedId = new URLSearchParams("?id=%").get("id");
assert.equal(malformedId, "%");

assert.throws(
  () => decodeURIComponent(malformedId),
  { name: "URIError" },
  "Extra decode should throw for malformed percent values."
);

const minis = [{ id: "aboleth" }, { id: "kobold" }];
assert.doesNotThrow(() => {
  minis.find((m) => m.id.toLowerCase() === malformedId.toLowerCase());
});

const encodedNormalId = new URLSearchParams("?id=kobold").get("id");
const matched = minis.find(
  (m) => m.id.toLowerCase() === encodedNormalId.toLowerCase()
);
assert.equal(matched?.id, "kobold");

console.log("query-id-decode-regression: ok");
