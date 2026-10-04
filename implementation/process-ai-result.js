const cleaned = $json.text
  .replace(/```json/g, "")
  .replace(/```/g, "")
  .trim();

return {
  json: JSON.parse(cleaned)
};
