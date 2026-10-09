import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { sendContactEnquiry } from "./send-enquiry";

const fields = {
  name: "Alex Morgan",
  email: "alex@example.com",
  company: "",
  projectType: "Website",
  budget: "",
  timeline: "",
  details: "Hello",
};

const config = {
  resendApiKey: "re_test_key",
  toEmail: "inbox@example.com",
  fromEmail: "Enquiries <hello@mail.example.com>",
};

describe("sendContactEnquiry", () => {
  it("succeeds when provider returns a message id", async () => {
    const result = await sendContactEnquiry(fields, config, async () => ({
      data: { id: "msg_123" },
      error: null,
    }));
    assert.deepEqual(result, { ok: true, messageId: "msg_123" });
  });

  it("fails when provider rejects the send", async () => {
    const result = await sendContactEnquiry(fields, config, async () => ({
      data: null,
      error: { message: "invalid from" },
    }));
    assert.equal(result.ok, false);
    if (result.ok) return;
    assert.equal(result.reason, "provider_rejected");
  });

  it("fails when provider omits message id", async () => {
    const result = await sendContactEnquiry(fields, config, async () => ({
      data: null,
      error: null,
    }));
    assert.equal(result.ok, false);
    if (result.ok) return;
    assert.equal(result.reason, "missing_message_id");
  });
});
