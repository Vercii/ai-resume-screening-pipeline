# Test Case 2 – Incorrect File Type Detection

## Objective

Verify that the workflow correctly rejects submissions containing an unsupported attachment type. The workflow should validate the uploaded file before attempting any resume processing and notify the applicant to submit a valid PDF resume.

---

## Test Input

| Field | Value |
|-------|-------|
| Email | Valid applicant email |
| Attachment | Non-PDF file (e.g., DOCX, PNG, JPG, TXT) |
| File Type | Unsupported |
| Resume Status | First submission |
| File Integrity | Valid |

---

## Expected Result

The workflow should:

- Detect the incoming email via the IMAP Email Trigger.
- Verify that an attachment exists.
- Detect that the uploaded attachment is not a PDF.
- Terminate the workflow immediately.
- Prevent duplicate detection from executing.
- Prevent PDF extraction.
- Prevent AI resume evaluation.
- Prevent file uploads to Supabase Storage.
- Prevent database insertion.
- Send an automated email requesting a valid PDF resume.

---

## Workflow Path

```
Email Trigger
      ↓
Attachment Exists
      ↓
PDF Validation
      ↓
Invalid File Type Detected
      ↓
Incorrect File Type Notification Email
```

---

## Demonstration
https://github.com/user-attachments/assets/71a8b031-4316-49b8-b17c-2e5c7a48cf59

The demonstration shows an applicant submitting an unsupported file type. During the validation stage, the workflow recognizes that the attachment is not a PDF and immediately terminates processing before any downstream nodes are executed.

---

## Observations

During the demonstration, the workflow successfully:

- Accepted the incoming email.
- Detected the attached file.
- Validated the attachment type.
- Identified that the uploaded file was not a PDF.
- Prevented duplicate detection from executing.
- Prevented PDF extraction.
- Prevented AI resume screening.
- Prevented uploads to Supabase Storage.
- Prevented insertion of applicant records into the database.
- Sent an automated notification requesting a valid PDF resume.

---

## Validation Checklist

| Validation | Result |
|------------|--------|
| Email Trigger | ✅ Pass |
| Resume Attachment Detected | ✅ Pass |
| File Type Validation | ✅ Pass |
| Invalid File Type Detected | ✅ Pass |
| Duplicate Detection Skipped | ✅ Pass |
| PDF Extraction Skipped | ✅ Pass |
| AI Screening Skipped | ✅ Pass |
| Database Insertion Prevented | ✅ Pass |
| Storage Upload Prevented | ✅ Pass |
| Notification Email Sent | ✅ Pass |

---

## Test Result

**Status:** ✅ **PASS**

The workflow successfully rejected the unsupported file type during the validation stage. Processing terminated safely before any computationally expensive or storage-related operations were performed, and the applicant was automatically informed that only PDF resumes are accepted.

---

## Notes

This test case validates the workflow's file type validation mechanism. By rejecting unsupported file formats at an early stage, the workflow avoids unnecessary processing, prevents downstream errors, and ensures that only compatible PDF resumes are submitted for AI evaluation.
