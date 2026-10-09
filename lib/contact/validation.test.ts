import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { parseContactRequestBody, validateContactFields } from "./validation";

describe("parseContactRequestBody", () => {
  const valid = {
    name: "Alex Morgan",
    email: "Alex@Example.com",
    company: "Acme",
    projectType: "Website",
    budget: "5k-15k",
    timeline: "2–4 months",
    details: "We need a marketing site with CMS.",
    website: "",
  };

  it("accepts a valid payload and normalizes email", () => {
    const result = parseContactRequestBody(valid);
    assert.equal(result.ok, true);
    if (!result.ok) return;
    assert.equal(result.isHoneypot, false);
    assert.equal(result.data.email, "alex@example.com");
  });

  it("rejects missing required fields", () => {
    const result = parseContactRequestBody({ ...valid, name: "" });
    assert.equal(result.ok, false);
    if (result.ok) return;
    assert.equal(result.status, 400);
    assert.ok(result.fieldErrors?.name);
  });

  it("rejects invalid email", () => {
    const result = parseContactRequestBody({ ...valid, email: "not-an-email" });
    assert.equal(result.ok, false);
    if (result.ok) return;
    assert.ok(result.fieldErrors?.email);
  });

  it("rejects malformed JSON-shaped input", () => {
    assert.equal(parseContactRequestBody(null).ok, false);
    assert.equal(parseContactRequestBody("text").ok, false);
    assert.equal(parseContactRequestBody([]).ok, false);
  });

  it("treats filled honeypot as spam without field validation errors", () => {
    const result = parseContactRequestBody({ ...valid, name: "", website: "https://spam.test" });
    assert.equal(result.ok, true);
    if (!result.ok) return;
    assert.equal(result.isHoneypot, true);
  });

  it("rejects invalid project type", () => {
    const result = parseContactRequestBody({ ...valid, projectType: "Unknown" });
    assert.equal(result.ok, false);
    if (result.ok) return;
    assert.ok(result.fieldErrors?.projectType);
  });
});

describe("validateContactFields", () => {
  it("requires project details", () => {
    const errors = validateContactFields({
      name: "A",
      email: "a@b.co",
      company: "",
      projectType: "Other",
      budget: "",
      timeline: "",
      details: "",
    });
    assert.ok(errors.details);
  });
});
