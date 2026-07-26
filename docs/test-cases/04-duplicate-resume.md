# Test Case 4 – Duplicate Resume Detection

## Objective

Verify that the workflow correctly detects duplicate resume submissions using a SHA-256 hash of the uploaded PDF. When an identical resume is submitted more than once, the workflow should terminate before AI screening, prevent duplicate database entries, and notify the applicant.

---

## Test Input

| Field | Value |
|-------|-------|
| Email | Valid applicant email |
| Attachment | Valid PDF resume |
| File Type | PDF |
| Resume Status | Previously submitted |
| PDF Integrity | Valid and readable |

---

## Expected Result

The workflow should:

- Detect the incoming email via the IMAP Email Trigger.
- Verify that a resume attachment exists.
- Confirm that the uploaded file is a PDF.
- Generate a SHA-256 hash from the uploaded resume.
- Search the Supabase database for an existing matching hash.
- Detect that the resume has already been submitted.
- Terminate the workflow before AI screening.
- Prevent the creation of a duplicate database record.
- Send an automated duplicate submission notification to the applicant.

---

## Workflow Path

```
Email Trigger
      ↓
Attachment Exists
      ↓
PDF Validation
      ↓
Generate SHA-256 Hash
      ↓
Duplicate Detection
      ↓
Duplicate Found
      ↓
Duplicate Notification Email
```

---

## Demonstration
https://github.com/user-attachments/assets/3c9fcda0-d3cf-4c99-a7b9-ba019d3dfe90

The demonstration shows an applicant submitting a resume that already exists in the system. The workflow identifies the duplicate using the stored SHA-256 hash and immediately stops further processing.

---

## Observations

During the demonstration, the workflow successfully:

- Accepted the incoming email.
- Validated the attached PDF.
- Generated a SHA-256 hash from the uploaded resume.
- Queried the applicant database for an existing matching hash.
- Detected that the resume had already been processed.
- Skipped PDF extraction and AI evaluation.
- Prevented duplicate data from being stored.
- Sent a duplicate submission notification email to the applicant.

---

## Validation Checklist

| Validation | Result |
|------------|--------|
| Email Trigger | ✅ Pass |
| Resume Attachment Detected | ✅ Pass |
| PDF Validation | ✅ Pass |
| SHA-256 Hash Generated | ✅ Pass |
| Duplicate Detection | ✅ Pass |
| AI Screening Skipped | ✅ Pass |
| Duplicate Database Entry Prevented | ✅ Pass |
| Duplicate Notification Email Sent | ✅ Pass |

---

## Test Result

**Status:** ✅ **PASS**

The workflow successfully detected a previously submitted resume using SHA-256 hashing. Processing was safely terminated before resource-intensive operations such as AI evaluation and database insertion, ensuring data integrity while avoiding unnecessary compute and API usage.

---

## Notes

This test case validates the duplicate detection mechanism of the workflow. Rather than relying on filenames, duplicate detection is performed by generating a SHA-256 hash from the binary contents of the uploaded PDF. This ensures that identical resumes are detected even if the applicant renames the file before resubmission, making the approach significantly more reliable and resistant to user manipulation.
