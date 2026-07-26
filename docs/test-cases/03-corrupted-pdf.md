# Test Case 3 – Corrupted PDF Detection

## Objective

Verify that the workflow correctly identifies a corrupted or unreadable PDF resume, terminates processing safely, and notifies the applicant that their submitted file could not be processed.

---

## Test Input

| Field | Value |
|-------|-------|
| Email | Valid applicant email |
| Attachment | Corrupted PDF resume |
| File Type | PDF |
| Resume Status | First submission |
| PDF Integrity | Corrupted / Unreadable |

---

## Expected Result

The workflow should:

- Detect the incoming email via the IMAP Email Trigger.
- Verify that a resume attachment exists.
- Confirm that the uploaded file has a PDF extension.
- Attempt to extract text from the PDF.
- Detect that the PDF cannot be parsed successfully.
- Terminate the workflow before duplicate detection and AI evaluation.
- Prevent any database insertion or file upload.
- Send an automated email informing the applicant that the submitted PDF is corrupted.

---

## Workflow Path

```
Email Trigger
      ↓
Attachment Exists
      ↓
PDF Validation
      ↓
Extract PDF
      ↓
PDF Extraction Failed
      ↓
Corrupted PDF Notification Email
```

---

## Demonstration
https://github.com/user-attachments/assets/9a47198d-f812-4e27-b909-72f302a5bdfd

The demonstration shows an applicant submitting a corrupted PDF file. During the extraction stage, the workflow detects that the document cannot be parsed and safely terminates processing before any downstream operations are executed.

---

## Observations

During the demonstration, the workflow successfully:

- Accepted the incoming email.
- Detected the attached PDF file.
- Attempted to extract the document contents.
- Identified that the PDF was unreadable or corrupted.
- Prevented duplicate detection from executing.
- Prevented AI screening from executing.
- Prevented uploads to Supabase Storage.
- Prevented insertion of applicant records into the database.
- Sent an automated notification requesting a valid PDF submission.

---

## Validation Checklist

| Validation | Result |
|------------|--------|
| Email Trigger | ✅ Pass |
| Resume Attachment Detected | ✅ Pass |
| PDF File Detected | ✅ Pass |
| PDF Extraction Attempted | ✅ Pass |
| Corrupted PDF Detected | ✅ Pass |
| Duplicate Detection Skipped | ✅ Pass |
| AI Screening Skipped | ✅ Pass |
| Database Insertion Prevented | ✅ Pass |
| Storage Upload Prevented | ✅ Pass |
| Notification Email Sent | ✅ Pass |

---

## Test Result

**Status:** ✅ **PASS**

The workflow correctly identified the corrupted PDF during the extraction stage and safely terminated execution before consuming unnecessary resources. No applicant data or files were stored, and the applicant was automatically informed that their resume could not be processed due to file corruption.

---

## Notes

This test case validates the workflow's ability to gracefully handle malformed or unreadable PDF documents. Detecting corrupted files early prevents downstream failures, avoids unnecessary AI API calls and storage operations, and improves the applicant experience by immediately notifying them to submit a valid, readable resume.
