'use client'
import { useState } from 'react';

export default function Page() {
  const [shouldThrow, setShouldThrow] = useState(false);

  if (shouldThrow) {
    throw new Error("Simulated error for cart");
  }

  return (
    <div>
      <p>Hello from Cart Page</p>
      <button
        onClick={() => setShouldThrow(true)}
        className="bg-red-500 text-white px-4 py-2 mt-4"
      >
        Simulate Error
      </button>
    </div>
  );
}
