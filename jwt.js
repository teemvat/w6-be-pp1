// Helper: Base64URL Encode/Decode

// Encode to Base64URL
function base64UrlEncode(data) {
    return Buffer.from(data)
      .toString("base64")
      .replace(/=/g, "")
      .replace(/\+/g, "-")
      .replace(/\//g, "_");
  }
  
  // Decode from Base64URL
  function base64UrlDecode(encodedData) {
    const base64 = encodedData.replace(/-/g, "+").replace(/_/g, "/");
    return Buffer.from(base64, "base64").toString();
  }
  
  // Test
  console.log("Encoded Data:", base64UrlEncode("hello")); // aGVsbG8
  console.log("Decoded Data:", base64UrlDecode("aGVsbG8")); // hello