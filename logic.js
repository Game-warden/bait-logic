// Branch-Free Constant-Time Selector to mitigate timing side-channels
function constantTimeSelect(flag, successBuffer, failureBuffer) {
  const result = new Uint8Array(successBuffer.length);
  // Create a mask: 0xFF if flag is 1, 0x00 if flag is 0
  const mask = -(flag & 1) & 0xFF;
  
  for (let i = 0; i < result.length; i++) {
    // Bitwise selection: (A & mask) | (B & ~mask)
    result[i] = (successBuffer[i] & mask) | (failureBuffer[i] & ~mask);
  }
  return result;
}
