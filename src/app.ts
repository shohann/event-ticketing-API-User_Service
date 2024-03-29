import express, { Application } from 'express';
import { loadApplicationModules } from './api/loaders'
// import './ioc'

export default function createApp(): express.Application {
  const app: Application = express();
  loadApplicationModules(app);


  return app;
};


