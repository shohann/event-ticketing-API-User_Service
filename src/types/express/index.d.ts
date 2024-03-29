declare namespace Express {
  export interface Request {
    user: {
      id: number;
      role: string;
    };
  }
}

// import express from "express";

// declare global {
//   namespace Express {
//     interface Request {
//       user?: Record<string,any>
//     }
//   }
// }