import assert from "node:assert/strict";
import { describe, it, beforeEach, afterEach } from "node:test";
import { getContactMailConfig } from "./env";

describe("getContactMailConfig", () => {
  const original = {
    RESEND_API_KEY: process.env.RESEND_API_KEY,
    CONTACT_TO_EMAIL: process.env.CONTACT_TO_EMAIL,
    CONTACT_FROM_EMAIL: process.env.CONTACT_FROM_EMAIL,
  };

  beforeEach(() => {
    delete process.env.RESEND_API_KEY;
    delete process.env.CONTACT_TO_EMAIL;
    delete process.env.CONTACT_FROM_EMAIL;
  });

  afterEach(() => {
    if (original.RESEND_API_KEY === undefined) delete process.env.RESEND_API_KEY;
    else process.env.RESEND_API_KEY = original.RESEND_API_KEY;
    if (original.CONTACT_TO_EMAIL === undefined) delete process.env.CONTACT_TO_EMAIL;
    else process.env.CONTACT_TO_EMAIL = original.CONTACT_TO_EMAIL;
    if (original.CONTACT_FROM_EMAIL === undefined) delete process.env.CONTACT_FROM_EMAIL;
    else process.env.CONTACT_FROM_EMAIL = original.CONTACT_FROM_EMAIL;
  });

  it("returns null when any required variable is missing", () => {
    assert.equal(getContactMailConfig(), null);
    process.env.RESEND_API_KEY = "re_test";
    assert.equal(getContactMailConfig(), null);
  });

  it("returns config when all variables are set", () => {
    process.env.RESEND_API_KEY = "re_test";
    process.env.CONTACT_TO_EMAIL = "inbox@example.com";
    process.env.CONTACT_FROM_EMAIL = "From <from@example.com>";
    assert.deepEqual(getContactMailConfig(), {
      resendApiKey: "re_test",
      toEmail: "inbox@example.com",
      fromEmail: "From <from@example.com>",
    });
  });
});
