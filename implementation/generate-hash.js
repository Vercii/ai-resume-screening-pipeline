const crypto = require('crypto');

const binaryProperty = Object.keys($binary)[0];

const buffer = await this.helpers.getBinaryDataBuffer(
  0,
  binaryProperty
);

const resumeHash = crypto
  .createHash('sha256')
  .update(buffer)
  .digest('hex');

return {
  json: {
    ...$json,
    resume_hash: resumeHash,
  },
  binary: $binary,
};
